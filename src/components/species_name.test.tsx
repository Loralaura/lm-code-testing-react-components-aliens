import { render, screen } from "@testing-library/react";
import { SpeciesName } from "./species_name";
import { fireEvent } from "@testing-library/react";

test("renders label for species name", () => {
  const requiredProps = {
    speciesName: "Dog",
    onChangeSpeciesName: () => {},
  };
  render(<SpeciesName {...requiredProps} />);

  const labelText = screen.getByText(/Species Name/i);
  expect(labelText).toBeInTheDocument();
});

test("Species name input exists", async () => {
  const requiredProps = {
    speciesName: "",
    onChangeSpeciesName: () => {},
  };
  render(<SpeciesName {...requiredProps} />);
  const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
  expect(inputField).toBeInTheDocument();
});

test("Species name input displays value passed in through props", async () => {
  const requiredProps = {
    speciesName: "Dog",
    onChangeSpeciesName: () => {},
  };
  render(<SpeciesName {...requiredProps} />);
  const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
  expect(inputField.value).toBe("Dog");
});

test("Species name input call its onChange function", async () => {
  const mockSubmit = jest.fn();
  const requiredProps = {
    speciesName: "",
    onChangeSpeciesName: mockSubmit,
  };
  render(<SpeciesName {...requiredProps} />);
  const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
  if (inputField) {
    fireEvent.change(inputField, { target: { value: "D" } });
  }
  expect(mockSubmit).toBeCalled();
});
