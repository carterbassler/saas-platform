"use node";

import { v } from "convex/values";
import Stripe from "stripe";

import { action, internalAction } from "./_generated/server";
import { internal } from "./_generated/api";

type Metadata = {
  userId: string;
};

export const pay = action({
  args: {},
  handler: async (ctx) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new Error("you must be logged in to purchase credits");
    }

    if (!user.emailVerified) {
      throw new Error("you must have a verified email to purchase credits");
    }

    const domain = process.env.HOSTING_URL ?? "http://localhost:3000";
    const stripe = new Stripe(process.env.STRIPE_KEY!, {
      apiVersion: "2024-06-20",
    });
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: process.env.PRICE_ID!, quantity: 1 }],
      customer_email: user.email,
      metadata: {
        userId: user.subject,
      },
      mode: "payment",
      success_url: `${domain}`,
      cancel_url: `${domain}`,
    });

    return session.url!;
  },
});

export const fulfill = internalAction({
  args: { signature: v.string(), payload: v.string() },
  handler: async (ctx, args) => {
    const stripe = new Stripe(process.env.STRIPE_KEY!, {
      apiVersion: "2024-06-20",
    });

    const webhookSecret = process.env.STRIPE_WEBHOOKS_SECRET!;
    try {
      const event = stripe.webhooks.constructEvent(
        args.payload,
        args.signature,
        webhookSecret
      );

      if (event.type === "checkout.session.completed") {
        const completedEvent = event.data.object as Stripe.Checkout.Session & {
          metadata : Metadata;
        };

        const userId = completedEvent.metadata.userId;

        await ctx.runMutation(internal.users.setStripeId, {
          userId,
          stripeId: completedEvent.id,
        });
      }

      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, error: (err as { message: string }).message };
    }
  },
});