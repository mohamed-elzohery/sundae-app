import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("checkbox is unchecked by default", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms of conditions/i,
  });
  expect(checkbox).not.toBeChecked();
});

test("button is disabled if checkbox is unchecked", () => {
  render(<SummaryForm />);
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  const checkbox = screen.getByRole("checkbox", {
    name: /terms of conditions/i,
  });
  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

test("button is enabled if checkbox is checked", () => {
  render(<SummaryForm />);
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  const checkbox = screen.getByRole("checkbox", {
    name: /terms of conditions/i,
  });
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(confirmButton).toBeEnabled();
});

test("button get back disabled if checkbox is unchecked again", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  const checkbox = screen.getByRole("checkbox", {
    name: /terms of conditions/i,
  });
  await user.click(checkbox);
  expect(confirmButton).toBeEnabled();
  await user.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test("popover appears on hover", async () => {
  render(<SummaryForm />);
  const user = userEvent.setup();
  const nullPopover = screen.queryByText(
    /no ice cream will be delivered anyway/i,
  );
  expect(nullPopover).toBeNull();
  const termsOfConditions = screen.getByText(/terms of conditions/i);
  await user.hover(termsOfConditions);
  const popover = screen.getByText(/no ice cream will be delivered anyway/i);
  expect(popover).toBeInTheDocument();
  await user.unhover(termsOfConditions);
  await waitFor(() => {
    const nullPopoverAfter = screen.queryByText(
      /no ice cream will be delivered anyway/i,
    );
    expect(nullPopoverAfter).toBeNull();
  });
});
