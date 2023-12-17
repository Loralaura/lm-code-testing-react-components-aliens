import { render, screen } from "@testing-library/react";
import { TextAreaInput } from "./text_area_input";
import { fireEvent } from "@testing-library/react";

test("renders form label for reasons for sparing", () => {
  const requiredProps = {
    title: "Reasons For Sparing",
    role: "reasonsForSparing",
    value: "Honestly? We don't deserve sparing tbh",
    onChange: () => {},
    regex: /^.{17,153}$/gi,
    message: "Must be between 17 and 153 characters",
    submitted: false,
    validate: () => "",
    size: { rows: 5, cols: 20 },
  };
  render(<TextAreaInput {...requiredProps} />);

  const labelText = screen.getByText(/Reasons For Sparing/i);
  expect(labelText).toBeInTheDocument();
});

test("Species name Input field exists", async () => {
  //Arrange
  const requiredProps = {
    title: "Reasons For Sparing",
    role: "reasonsForSparing",
    value: "",
    onChange: () => {},
    regex: /^.{17,153}$/gi,
    message: "Must be between 17 and 153 characters",
    submitted: false,
    validate: () => "",
    size: { rows: 5, cols: 20 },
  };
  //Act
  render(<TextAreaInput {...requiredProps} />);
  const inputField = screen.getByLabelText("Reasons For Sparing");
  //Assert
  expect(inputField).toBeInTheDocument();
});

test("Reasons For Sparing input field displays value passed in through props", async () => {
  const requiredProps = {
    title: "Reasons For Sparing",
    role: "reasonsForSparing",
    value: "Honestly? We don't deserve sparing tbh",
    onChange: () => {},
    regex: /^.{17,153}$/gi,
    message: "Must be between 17 and 153 characters",
    submitted: false,
    validate: () => "",
    size: { rows: 5, cols: 20 },
  };
  render(<TextAreaInput {...requiredProps} />);
  const inputField: HTMLInputElement = screen.getByLabelText(
    "Reasons For Sparing"
  );
  expect(inputField.value).toBe("Honestly? We don't deserve sparing tbh");
});

test("Reasons For Sparing input field call its onChange function", async () => {
  const mockChange = jest.fn();
  const requiredProps = {
    title: "Reasons For Sparing",
    role: "reasonsForSparing",
    value: "",
    onChange: mockChange,
    regex: /^.{17,153}$/gi,
    message: "Must be between 17 and 153 characters",
    submitted: false,
    validate: () => "",
    size: { rows: 5, cols: 20 },
  };
  render(<TextAreaInput {...requiredProps} />);
  const inputField: HTMLInputElement = screen.getByLabelText(
    "Reasons For Sparing"
  );
  if (inputField) {
    fireEvent.change(inputField, { target: { value: "H" } });
  }
  expect(mockChange).toBeCalled();
});
