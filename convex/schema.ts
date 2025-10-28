import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Unified Convex schema (clean copy) after restoring organizations & sitev.
// Legacy placeholder tables (e.g., tasks) removed during framework consolidation.

export default defineSchema({
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
});
