import { render, screen } from "@testing-library/react";
import { SparingReason } from "./sparing_reason";

test("renders label for Sparing Reason", () => {
  const requiredProps = {
    sparingReason: "lol",
    onChangeSparingReason: () => {},
  };
  render(<SparingReason {...requiredProps} />);

  const labelText = screen.getByText(/Reason for Sparing/i);
  expect(labelText).toBeInTheDocument();
});
