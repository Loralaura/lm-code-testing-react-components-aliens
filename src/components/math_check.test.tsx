import { render, screen } from "@testing-library/react";
import { MathCheck } from "./math_check";

test("renders label for math check", () => {
  const requiredProps = {
    mathCheck: "2",
    onChangeMathCheck: () => {},
  };
  render(<MathCheck {...requiredProps} />);

  const labelText = screen.getByText("What is 2 + 2?");
  expect(labelText).toBeInTheDocument();
});
