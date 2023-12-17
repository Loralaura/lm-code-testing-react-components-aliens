import { render, screen } from "@testing-library/react";
import { BeingsNumber } from "./beings_number";

test("renders label for beings number", () => {
  const requiredProps = {
    beingsNumber: "1",
    onChangeBeingsNumber: () => {},
  };
  render(<BeingsNumber {...requiredProps} />);

  const labelText = screen.getByText(/Number of Beings/i);
  expect(labelText).toBeInTheDocument();
});
