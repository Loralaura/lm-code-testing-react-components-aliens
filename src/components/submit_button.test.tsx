import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SubmitButton } from "./submit_button";

test("When user clicks button, handleSubmit is called", async () => {
  const mockSubmit = jest.fn();
  const requiredProps = {
    buttonText: "",
    onSubmitHandler: mockSubmit,
  };

  render(<SubmitButton {...requiredProps} />);

  const submitButton = screen.getByRole("submitButton");
  expect(submitButton).toBeInTheDocument();

  if (submitButton) {
    await userEvent.click(submitButton);
  }
  expect(mockSubmit).toBeCalled();
});
