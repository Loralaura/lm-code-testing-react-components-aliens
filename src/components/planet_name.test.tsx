import { render, screen } from "@testing-library/react";
import { PlanetName } from "./planet_name";

test("renders label for Planet Name", () => {
  const requiredProps = {
    planetName: "Pluto",
    onChangePlanetName: () => {},
  };
  render(<PlanetName {...requiredProps} />);

  const labelText = screen.getByText(/Planet Name/i);
  expect(labelText).toBeInTheDocument();
});

test("Planet Name input field exists", async () => {
  const requiredProps = {
    planetName: "",
    onChangePlanetName: () => {},
  };
  render(<PlanetName {...requiredProps} />);
  const inputField = screen.getByLabelText(/Planet Name/i);
  expect(inputField).toBeInTheDocument();
});

test("Planet Name input field displays value passed in through props", async () => {
  const requiredProps = {
    planetName: "Pluto",
    onChangePlanetName: () => {},
  };
  render(<PlanetName {...requiredProps} />);
  const inputField: HTMLInputElement = screen.getByLabelText(/Planet Name/i);
  expect(inputField.value).toBe("Pluto");
});
