import { render, screen, fireEvent } from "@testing-library/react";
import { TextInput } from "./text_input";
import { TextInputProps } from "./text_input";

test("renders form label for species name", () => {
  const requiredProps: TextInputProps = {
    title: "Species Name",
    role: "speciesName",
    value: "Dog",
    onChange: () => {},
    regex: /^[a-z]{3,23}$/gi,
    message: "",
    submitted: false,
    validate: () => "",
  };
  render(<TextInput {...requiredProps} />);

  const labelText = screen.getByText(/Species Name/i);
  expect(labelText).toBeInTheDocument();
});

test("Species name Input field exists", async () => {
  const requiredProps: TextInputProps = {
    title: "Species Name",
    role: "speciesName",
    value: "",
    onChange: () => {},
    regex: /^[a-z]{3,23}$/gi,
    message: "",
    submitted: false,
    validate: () => "",
  };
  render(<TextInput {...requiredProps} />);
  const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
  expect(inputField).toBeInTheDocument();
});

test("Species name input field displays value passed in through props", async () => {
  const requiredProps: TextInputProps = {
    title: "Species Name",
    role: "speciesName",
    value: "Dog",
    onChange: () => {},
    regex: /^[a-z]{3,23}$/gi,
    message: "",
    submitted: false,
    validate: () => "",
  };
  render(<TextInput {...requiredProps} />);
  const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
  expect(inputField.value).toBe("Dog");
});

test("Species name input field call its onChange function", async () => {
  //Arrange
  const mockChange = jest.fn();
  const requiredProps: TextInputProps = {
    title: "Species Name",
    role: "speciesName",
    value: "",
    onChange: mockChange,
    regex: /^[a-z]{3,23}$/gi,
    message: "",
    submitted: false,
    validate: () => "",
  };
  render(<TextInput {...requiredProps} />);
  const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
  if (inputField) {
    fireEvent.change(inputField, { target: { value: "D" } });
  }
  expect(mockChange).toBeCalled();
});

test("renders form label for planet name", () => {
  const requiredProps: TextInputProps = {
    title: "Planet Name",
    role: "planetName",
    value: "Pluto",
    onChange: () => {},
    regex: /^[a-z0-9]{2,49}$/gi,
    message: "",
    submitted: false,
    validate: () => "",
  };
  render(<TextInput {...requiredProps} />);

  const labelText = screen.getByText(/Planet Name/i);
  expect(labelText).toBeInTheDocument();
});

test("Planet name Input field exists", async () => {
  const requiredProps: TextInputProps = {
    title: "Planet Name",
    role: "planetName",
    value: "",
    onChange: () => {},
    regex: /^[a-z0-9]{2,49}$/gi,
    message: "",
    submitted: false,
    validate: () => "",
  };
  render(<TextInput {...requiredProps} />);
  const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
  expect(inputField).toBeInTheDocument();
});

test("Planet name input field displays value passed in through props", async () => {
  const requiredProps: TextInputProps = {
    title: "Planet Name",
    role: "planetName",
    value: "Pluto",
    onChange: () => {},
    regex: /^[a-z0-9]{2,49}$/gi,
    message: "",
    submitted: false,
    validate: () => "",
  };
  render(<TextInput {...requiredProps} />);
  const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
  expect(inputField.value).toBe("Pluto");
});

test("Planet name input field calls its onChange function", async () => {
  const mockChange = jest.fn();
  const requiredProps: TextInputProps = {
    title: "Planet Name",
    role: "planetName",
    value: "",
    onChange: mockChange,
    regex: /^[a-z0-9]{2,49}$/gi,
    message: "",
    submitted: false,
    validate: () => "",
  };
  render(<TextInput {...requiredProps} />);
  const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
  if (inputField) {
    fireEvent.change(inputField, { target: { value: "M" } });
  }
  expect(mockChange).toBeCalled();
});

test("renders form label for number of beings", () => {
  const requiredProps: TextInputProps = {
    title: "Number of Beings",
    role: "numberOfBeings",
    value: "42",
    onChange: () => {},
    regex: /^[0-9]{10,}$/g,
    message: "",
    submitted: false,
    validate: () => "",
  };
  render(<TextInput {...requiredProps} />);

  const labelText = screen.getByText(/Number of Beings/i);
  expect(labelText).toBeInTheDocument();
});

test("Number of beings input field exists", async () => {
  const requiredProps: TextInputProps = {
    title: "Number of Beings",
    role: "numberOfBeings",
    value: "",
    onChange: () => {},
    regex: /^[0-9]{10,}$/g,
    message: "",
    submitted: false,
    validate: () => "",
  };
  render(<TextInput {...requiredProps} />);
  const inputField: HTMLInputElement =
    screen.getByLabelText("Number of Beings");
  expect(inputField).toBeInTheDocument();
});

test("Number of beings input field displays value passed in through props", async () => {
  const requiredProps: TextInputProps = {
    title: "Number of Beings",
    role: "numberOfBeings",
    value: "1000000001",
    onChange: () => {},
    regex: /^[0-9]{10,}$/g,
    message: "",
    submitted: false,
    validate: () => "",
  };
  render(<TextInput {...requiredProps} />);
  const inputField: HTMLInputElement =
    screen.getByLabelText("Number of Beings");
  expect(inputField.value).toBe("1000000001");
});

test("Number of beings input field calls its onChange function", async () => {
  const mockChange = jest.fn();
  const requiredProps: TextInputProps = {
    title: "Number of Beings",
    role: "numberOfBeings",
    value: "",
    onChange: mockChange,
    regex: /^[0-9]{10,}$/g,
    message: "",
    submitted: false,
    validate: () => "",
  };
  render(<TextInput {...requiredProps} />);
  const inputField: HTMLInputElement =
    screen.getByLabelText("Number of Beings");
  if (inputField) {
    fireEvent.change(inputField, { target: { value: "1" } });
  }
  expect(mockChange).toBeCalled();
});
