import { query } from "./_generated/server";

  export const hello = query({
    handler: async (ctx) => {
      return "Hello, Convex!";
    },
  });