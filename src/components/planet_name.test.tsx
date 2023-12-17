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
