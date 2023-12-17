import { render, screen } from "@testing-library/react";
import { PlanetName } from "./planet_name";
import { fireEvent } from "@testing-library/react";

test("renders label for planet name", () => {
  const requiredProps = {
    planetName: "Pluto",
    onChangePlanetName: () => {},
  };
  render(<PlanetName {...requiredProps} />);

  const labelText = screen.getByText(/Planet Name/i);
  expect(labelText).toBeInTheDocument();
});

test("Planet name input exists", async () => {
  const requiredProps = {
    planetName: "",
    onChangePlanetName: () => {},
  };
  render(<PlanetName {...requiredProps} />);
  const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
  expect(inputField).toBeInTheDocument();
});

test("Planet name input displays value passed in through props", async () => {
  const requiredProps = {
    planetName: "Pluto",
    onChangePlanetName: () => {},
  };
  render(<PlanetName {...requiredProps} />);
  const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
  expect(inputField.value).toBe("Pluto");
});

test("Planet name input calls its onChange function", async () => {
  const mockSubmit = jest.fn();
  const requiredProps = {
    planetName: "",
    onChangePlanetName: mockSubmit,
  };
  render(<PlanetName {...requiredProps} />);
  const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
  if (inputField) {
    fireEvent.change(inputField, { target: { value: "P" } });
  }
  expect(mockSubmit).toBeCalled();
});
