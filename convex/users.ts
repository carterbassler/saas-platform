import { v } from "convex/values";
import { MutationCtx, QueryCtx, internalMutation, mutation, query } from "./_generated/server";
import { getUserId } from "./util";

export const getUser = query({
  args: {},
  handler: async (ctx, args) => {
    const userId = await getUserId(ctx);

    if (!userId) {
      return undefined;
    }

    return getFullUser(ctx, userId);
  },
});

export const createUser = internalMutation({
  args: { email: v.string(), userId: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", {
      email: args.email,
      userId: args.userId,
      credits : 0,
    });
  },
});

export const setStripeId = internalMutation({
  args: { stripeId: v.string(), userId: v.string()},
  handler: async (ctx, args) => {
    const user = await getFullUser(ctx, args.userId);

    if (!user) {
      throw new Error("no user found with that user id");
    }

    await ctx.db.patch(user._id, {
      stripeId: args.stripeId,
    });
  },
});

export function getFullUser(ctx: QueryCtx | MutationCtx, userId: string) {
  return ctx.db
    .query("users")
    .withIndex("by_userId", (q) => q.eq("userId", userId))
    .first();
}
