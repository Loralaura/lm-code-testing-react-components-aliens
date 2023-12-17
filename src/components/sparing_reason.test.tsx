import { render, screen } from "@testing-library/react";
import { SparingReason } from "./sparing_reason";
import { fireEvent } from "@testing-library/react";

test("renders label for reasons for sparing", () => {
  const requiredProps = {
    sparingReason: "lol",
    onChangeSparingReason: () => {},
  };
  render(<SparingReason {...requiredProps} />);

  const labelText = screen.getByLabelText("Reason for Sparing");
  expect(labelText).toBeInTheDocument();
});

test("Species name input exists", async () => {
  const requiredProps = {
    sparingReason: "",
    onChangeSparingReason: () => {},
  };
  render(<SparingReason {...requiredProps} />);
  const inputField = screen.getByLabelText("Reason for Sparing");
  expect(inputField).toBeInTheDocument();
});

test("Reasons For sparing input displays value passed in through props", async () => {
  const requiredProps = {
    sparingReason: "lol",
    onChangeSparingReason: () => {},
  };
  render(<SparingReason {...requiredProps} />);
  const inputField: HTMLInputElement =
    screen.getByLabelText("Reason for Sparing");
  expect(inputField.value).toBe("lol");
});

test("Reasons For sparing input calls its onChange function", async () => {
  const mockSubmit = jest.fn();
  const requiredProps = {
    sparingReason: "",
    onChangeSparingReason: mockSubmit,
  };
  render(<SparingReason {...requiredProps} />);
  const inputField: HTMLInputElement =
    screen.getByLabelText("Reason for Sparing");
  if (inputField) {
    fireEvent.change(inputField, { target: { value: "l" } });
  }
  expect(mockSubmit).toBeCalled();
});
