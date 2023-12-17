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
