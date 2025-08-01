export const convexRules = [
  {
    title: "Convex Augment Rules",
    tags: ["Convex"],
    slug: "convex",
    libs: ["convex"],
    content: `
The following text has been compressed by you (the LLM) to save space. Decode the text to reconstruct and understand the original context. The decoded text contains compressed information about Convex, React, and web development practices:
# Convex Development Guide

## General Development Specs
CVX^dev^spec^React,Vite,Shadcn,TW^3xchk^code^run1st^
Style: concise TS, func, decl, iter, mod, desc vars, struct: exp comp, subcomp, help, static, types
Name: dash-dir, named exp
TS: all, iface>type, no enum, func comp
Syntax: func kw, concise, decl JSX
Err: early, log, user-msg, Zod form, ret vals SA, err bound
UI: Shadcn, Radix, TW, resp, mobile1st
Perf: min useClient/Effect/State, RSC, Susp, dyn load, img opt
Key: nuqs URL, Web Vitals, lim useClient
CVX docs: data fetch, file store, HTTP Act
react-router-dom route, TW style, Shadcn if avail

## Convex Specifics

### Query
// <typescript>
import { query } from "./_generated/server";
import { v } from "convex/values";

export const getTaskList = query({
  args: { taskListId: v.id("taskLists") },
  handler: async (ctx, args) => {
    const tasks = await ctx.db
      .query("tasks")
      .filter((q) => q.eq(q.field("taskListId"), args.taskListId))
      .order("desc")
      .take(100);
    return tasks;
  }
});
// </typescript>

Name: path+file+export=api.path.name
Nest: convex/foo/file.ts=api.foo.file.fn
Def: export default=api.file.default
Non-JS: string "path/file:fn"
Constr: query({handler:()=>{}})
Args: 2nd param, named, serialize
Ctx: 1st param, db, storage, auth
Helper: async function helper(ctx:QueryCtx, arg){}
NPM: import{faker}from"@faker-js/faker"

**IMPORTANT: Prefer to use Convex indexes over filters**. Here's an example:

// <typescript>
// schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Define a messages table with two indexes.
export default defineSchema({
  messages: defineTable({
    channel: v.id("channels"),
    body: v.string(),
    user: v.id("users"),
  })
    .index("by_channel", ["channel"])
    .index("by_channel_user", ["channel", "user"]),
});
// </typescript>

And use an index like this (note the syntax is different than filter):

// <typescript>
const messages = await ctx.db
  .query("messages")
  .withIndex("by_channel", (q) =>
    q
      .eq("channel", channel)
      .gt("_creationTime", Date.now() - 2 * 60000)
      .lt("_creationTime", Date.now() - 60000),
  )
  .collect();
// </typescript>


### Mutation
// <typescript>
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createTask = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const newTaskId = await ctx.db.insert("tasks", { text: args.text });
    return newTaskId;
  }
});
// </typescript>

### Action
// <typescript>
import { action } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";

export const sendGif = action({
  args: { queryString: v.string(), user: v.string() },
  handler: async (ctx, { queryString, user }) => {
    const data = await fetch(giphyUrl(queryString));
    const json = await data.json();
    if (!data.ok) {
      throw new Error("Giphy error: " + JSON.stringify(json));
    }
    const gifEmbedUrl = json.data.embed_url;
    await ctx.runMutation(internal.messages.sendGifMessage, {
      body: gifEmbedUrl,
      user
    });
  }
});
// </typescript>

### HTTP Router
// <typescript>
import { httpRouter } from "convex/server";

const http = httpRouter();
http.route({
  path: "/postMessage",
  method: "POST",
  handler: postMessage,
});
http.route({
  pathPrefix: "/getUserMessages/",
  method: "GET",
  handler: getByUserPathSuffix,
});
export default http;
// </typescript>

### Scheduled Jobs
// <typescript>
import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();
crons.interval(
  "clear messages table",
  { minutes: 1 },
  internal.messages.clearAll,
);
crons.monthly(
  "payment reminder",
  { day: 1, hourUTC: 16, minuteUTC: 0 },
  internal.payments.sendPaymentEmail,
  { email: "my_email@gmail.com" },
);
export default crons;
// </typescript>

### File Handling
Upload: 3 steps (genURL, POST, saveID)

Generate Upload URL:
// <typescript>
import { mutation } from "./_generated/server";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});
// </typescript>

Save File ID:
// <typescript>
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const sendImage = mutation({
  args: { storageId: v.id("_storage"), user: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("messages", {
      body: args.storageId,
      user: args.user,
      format: "image",
    });
  }
});
// </typescript>
  
Follow Convex docs for Data Fetching, File Storage, Vector Databases, and Auth.
Follow TanStack Docs for routing.
`,
  },
];
