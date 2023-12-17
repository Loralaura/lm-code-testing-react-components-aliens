import { render, screen } from "@testing-library/react";
import { SparingReason } from "./sparing_reason";

test("renders label for Sparing Reason", () => {
  const requiredProps = {
    sparingReason: "lol",
    onChangeSparingReason: () => {},
  };
  render(<SparingReason {...requiredProps} />);

  const labelText = screen.getByText(/Reason for Sparing/i);
  expect(labelText).toBeInTheDocument();
});

test("Sparing Reason input field exists", async () => {
  const requiredProps = {
    sparingReason: "",
    onChangeSparingReason: () => {},
  };
  render(<SparingReason {...requiredProps} />);
  const inputField = screen.getByLabelText(/Reason for Sparing/i);
  expect(inputField).toBeInTheDocument();
});

test("Sparing Reason input field displays value passed in through props", async () => {
  const requiredProps = {
    sparingReason: "lol",
    onChangeSparingReason: () => {},
  };
  render(<SparingReason {...requiredProps} />);
  const inputField: HTMLInputElement =
    screen.getByLabelText(/Reason for Sparing/i);
  expect(inputField.value).toBe("lol");
});
