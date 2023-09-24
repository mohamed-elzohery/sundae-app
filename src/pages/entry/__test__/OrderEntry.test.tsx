import { rest } from "msw";
import { server } from "../../../mocks/server";
import { OptionsEnum } from "../Options";
import { BASE_URL } from "../../../mocks/handlers";
import OrderEntry from "../OrderEntry";
import { render, screen } from "@testing-library/react";

test("renders alert when server error occurrs while fetching options", async () => {
  // Override test handlers
  server.resetHandlers(
    rest.get(`${BASE_URL}/${OptionsEnum.SCOOPS}`, (_, res, ctx) =>
      res(ctx.status(500)),
    ),
    rest.get(`${BASE_URL}/${OptionsEnum.TOPPINGS}`, (_, res, ctx) =>
      res(ctx.status(500)),
    ),
  );

  render(<OrderEntry />);

  const alerts = await screen.findAllByRole("alert");
  expect(alerts).toHaveLength(2);
});
