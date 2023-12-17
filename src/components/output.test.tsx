import { render, screen } from "@testing-library/react";
import { Output } from "./output";
import { FormValuesProps } from "./output";

test("renders title for species name in output following form submission", () => {
  const requiredProps: FormValuesProps = {
    title: "Species Name",
    value: "Woman",
    role: "speciesName",
    regex: /^[a-z]{3,23}$/gi,
    message:
      "Must be between 3 and 23 characters. No numbers or special characters allowed!",
    validate: () => "",
    submitted: true,
  };
  render(<Output {...requiredProps} />);
  const text = screen.getByText(/Species Name/i);
  expect(text).toBeInTheDocument();
});

test("Reasons For Sparing output does not display if there has been no submission", () => {
  const requiredProps = {
    title: "Reasons For Sparing",
    role: "reasonsForSparing",
    value: "",
    regex: /^.{17,153}$/gi,
    message: "Must be between 17 and 153 characters",
    validate: () => "",
    submitted: false,
    size: { rows: 5, cols: 20 },
  };
  render(<Output {...requiredProps} />);
  expect(screen.queryByRole("paragraph")).not.toBeInTheDocument();
});

test("Reasons For Sparing output displays if there has been submission", () => {
  const requiredProps = {
    title: "Reasons For Sparing",
    role: "reasonsForSparing",
    value: "Because we are a special species",
    regex: /^.{17,153}$/gi,
    message: "Must be between 17 and 153 characters",
    submitted: true,
    validate: () => "",
    size: { rows: 5, cols: 20 },
  };
  render(<Output {...requiredProps} />);
  const text = screen.getByText(/Because we are a special species/i);
  expect(text).toBeInTheDocument();
});

test("Reasons For Sparing output displays error if submitted value is invalid", () => {
  const mockValidate = jest.fn();
  const requiredProps = {
    title: "Reasons For Sparing",
    role: "reasonsForSparing",
    value: "B",
    regex: /^.{17,153}$/gi,
    message: "Must be between 17 and 153 characters",
    submitted: true,
    validate: mockValidate,
    size: { rows: 5, cols: 20 },
  };
  render(<Output {...requiredProps} />);
  const text = screen.getByText(/Must be between 17 and 153 characters/i);
  expect(mockValidate).toBeCalled();
  expect(text).toBeInTheDocument();
});

test("Number of beings output displays error if submitted value is invalid", () => {
  const mockValidate = jest.fn();
  const requiredProps = {
    title: "Number of Beings",
    role: "numberOfBeings",
    value: "5",
    regex: /^[0-9]{10,}$/g,
    message: "Numbers ONLY. Must be at least 1,000,000,000",
    submitted: true,
    validate: mockValidate,
  };
  mockValidate.mockReturnValue([
    "Numbers ONLY. Must be at least 1,000,000,000",
  ]);
  render(<Output {...requiredProps} />);
  expect(mockValidate).toBeCalled();
  expect(mockValidate()).toStrictEqual([
    "Numbers ONLY. Must be at least 1,000,000,000",
  ]);
});

test("Maths answer validation returns no error if answer is correct", () => {
  const mockValidate = jest.fn();
  const requiredProps = {
    title: "What is 2 + 2?",
    role: "mathsAnswer",
    value: "4",
    regex: /^4{1}$/,
    message: '"4" must be selected',
    submitted: true,
    validate: mockValidate,
    options: ["Not 4", "0", "4", "99", "4 million"],
  };
  mockValidate.mockReturnValue([]);
  render(<Output {...requiredProps} />);
  expect(mockValidate).toBeCalled();
  expect(mockValidate()).toStrictEqual([]);
});

test("Maths answer validation returns error if answer is incorrect", () => {
  const mockValidate = jest.fn();
  const requiredProps = {
    title: "What is 2 + 2?",
    role: "mathsAnswer",
    value: "99",
    regex: /^4{1}$/,
    message: '"4" must be selected',
    submitted: true,
    validate: mockValidate,
    options: ["Not 4", "0", "4", "99", "4 million"],
  };
  mockValidate.mockReturnValue([`"4" must be selected`]);
  render(<Output {...requiredProps} />);
  expect(mockValidate).toBeCalled();
  expect(mockValidate()).toStrictEqual([`"4" must be selected`]);
});
