import { rest } from "msw";
import { BASE_URL } from "../lib/constants";

export const handlers = [
  rest.get(`${BASE_URL}/users/mock`, (req, res, ctx) => {
    return res(
      ctx.json({
        avatar_url: "https://avatars.githubusercontent.com/u/66051416?v=4",
        followers: 16,
        following: 24,
        public_repos: 23,
        name: "mock",
      })
    );
  }),
];
 