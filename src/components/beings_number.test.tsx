import { render, screen } from "@testing-library/react";
import { BeingsNumber } from "./beings_number";
import { fireEvent } from "@testing-library/react";

test("renders label for number of beings", () => {
  const requiredProps = {
    beingsNumber: "0",
    onChangeBeingsNumber: () => {},
  };
  render(<BeingsNumber {...requiredProps} />);
  const labelText = screen.getByText(/Number of Beings/i);
  expect(labelText).toBeInTheDocument();
});

test("Number of beings input exists", async () => {
  const requiredProps = {
    beingsNumber: "",
    onChangeBeingsNumber: () => {},
  };

  render(<BeingsNumber {...requiredProps} />);
  const inputField: HTMLInputElement =
    screen.getByLabelText("Number of Beings");

  expect(inputField).toBeInTheDocument();
});

test("Number of beings input displays value passed in through props", async () => {
  const requiredProps = {
    beingsNumber: "4",
    onChangeBeingsNumber: () => {},
  };
  render(<BeingsNumber {...requiredProps} />);
  const inputField: HTMLInputElement =
    screen.getByLabelText("Number of Beings");
  expect(inputField.value).toBe("4");
});

test("Number of beings input field calls its onChange function", async () => {
  const mockSubmit = jest.fn();
  const requiredProps = {
    beingsNumber: "",
    onChangeBeingsNumber: mockSubmit,
  };
  render(<BeingsNumber {...requiredProps} />);
  const inputField: HTMLInputElement =
    screen.getByLabelText("Number of Beings");
  if (inputField) {
    fireEvent.change(inputField, { target: { value: "1" } });
  }
  expect(mockSubmit).toBeCalled();
});
