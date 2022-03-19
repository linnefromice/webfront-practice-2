import { graphql } from "msw";

export const handlers = [
  graphql.query("GetUserInfo", (req, res, ctx) => {
    return res(
      ctx.data({
        username: "Example",
        status: "OK",
      })
    );
  }),
];
