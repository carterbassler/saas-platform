import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createNewBatch = mutation({
    args : {
        label : v.string(),
        uploadData : v.string(),
        numCalls : v.number(),
        cost : v.number(),
    },
    handler : async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity()
        if (!user) {
            throw new Error("You are not logged in! How tf are you on this page?")
        }
        await ctx.db.insert("batches", {
            label : args.label,
            userId : user.subject,
            uploadData : args.uploadData,
            numCalls : args.numCalls,
            cost : args.cost,
        })
    }
})

export const getBatchesForUser = query({
    args : {},
    handler : async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity()
        if (!user) {
            return [];
        }
        
        return await ctx.db
        .query('batches')
        .filter((q) => q.eq(q.field('userId'), user.subject))
        .collect();
    }
})