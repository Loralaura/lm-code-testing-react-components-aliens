import { render, screen } from "@testing-library/react";
import { SelectOption, SelectOptionProps } from "./select_option";

test("Option for select element displayed", () => {
  const requiredProps: SelectOptionProps = {
    optionValue: "Not 4",
  };

  render(<SelectOption {...requiredProps} />);

  const option = screen.getByRole("option");
  expect(option).toBeInTheDocument();
});

test("Option Not 4 for select element displayed", () => {
  const requiredProps: SelectOptionProps = {
    optionValue: "Not 4",
  };

  render(<SelectOption {...requiredProps} />);

  const option = screen.getByRole("option");
  expect(option.innerHTML).toBe("Not 4");
});

test("Empty option for select element displayed", () => {
  const requiredProps: SelectOptionProps = {
    optionValue: "",
  };

  render(<SelectOption {...requiredProps} />);

  const option = screen.getByRole("option");
  expect(option.innerHTML).toBe("");
});
