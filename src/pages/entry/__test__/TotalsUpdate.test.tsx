import { render, screen } from "@testing-library/react";
import Options, { OptionsEnum } from "../Options";
import userEvent from "@testing-library/user-event";

test("subtotals updates when changing selected scoops", async () => {
  render(<Options type={OptionsEnum.SCOOPS} />);

  // test total to be initially zero
  const scoopsSubTotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopsSubTotal).toHaveTextContent("0.00");

  // test subtotal when vanilla scoop is added
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
    exact: false,
  });
  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "1");
  expect(scoopsSubTotal).toHaveTextContent("2.00");

  // test subtotal when chocolate scoop is added
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
    exact: false,
  });
  await userEvent.clear(chocolateInput);
  await userEvent.type(chocolateInput, "2");
  expect(scoopsSubTotal).toHaveTextContent("6.00");
});
