// src/mocks/handlers.js
import { rest } from "msw";

const DOMAIN = "https://localhost";
const PORT = "3030";
const BASE_URL = `${DOMAIN}:${PORT}`;

// /Scoops
// method: GET
// Public
const scoops = rest.get(`${BASE_URL}/scoops`, (_, res, ctx) => {
  // Check if the user is authenticated in this session
  res(
    ctx.status(200),
    ctx.json([
      { name: "Chocolate", imageURL: "/images/chocolate" },
      { name: "Vanilla", imageURL: "/images/vanilla" },
    ]),
  );
});

export const handlers = [scoops];
