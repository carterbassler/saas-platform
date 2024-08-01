import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  batches: defineTable({
    label: v.string(),
    userId: v.string(),
    uploadData: v.string(),
    numCalls : v.number(),
    cost : v.number(),
  }),
  users: defineTable({
    userId: v.string(),
    email: v.string(),
    stripeId: v.optional(v.string()),
    credits: v.number(),
  }).index("by_userId", ["userId"]),
});
