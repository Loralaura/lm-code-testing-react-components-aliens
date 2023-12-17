import { render, screen } from "@testing-library/react";
import { SpeciesName } from "./species_name";

test("renders label for species name", () => {
  const requiredProps = {
    speciesName: "Dog",
    onChangeSpeciesName: () => {},
  };
  render(<SpeciesName {...requiredProps} />);

  const labelText = screen.getByText(/Species Name/i);
  expect(labelText).toBeInTheDocument();
});

test("Species name input field exists", async () => {
  const requiredProps = {
    speciesName: "",
    onChangeSpeciesName: () => {},
  };
  render(<SpeciesName {...requiredProps} />);
  const inputField = screen.getByLabelText("Species Name");
  expect(inputField).toBeInTheDocument();
});

test("Species name input field displays value passed in through props", async () => {
  const requiredProps = {
    speciesName: "Dog",
    onChangeSpeciesName: () => {},
  };
  render(<SpeciesName {...requiredProps} />);
  const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
  expect(inputField.value).toBe("Dog");
});
