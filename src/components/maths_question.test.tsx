import { render, screen } from "@testing-library/react";
import { MathsQuestion } from "./maths_question";
import { fireEvent } from "@testing-library/react";

test("renders label for maths question", () => {
  const requiredProps = {
    mathsAnswer: "4",
    onChangeMathsAnswer: () => {},
  };
  render(<MathsQuestion {...requiredProps} />);

  const labelText = screen.getByText("What is 2 + 2?");
  expect(labelText).toBeInTheDocument();
});

test("Maths question input exists", async () => {
  const requiredProps = {
    mathsAnswer: "4",
    onChangeMathsAnswer: () => {},
  };
  render(<MathsQuestion {...requiredProps} />);
  const selectInput: HTMLSelectElement =
    screen.getByLabelText("What is 2 + 2?");
  expect(selectInput).toBeInTheDocument();
});

test("Maths question input displays value passed in through props", async () => {
  const requiredProps = {
    mathsAnswer: "99",
    onChangeMathsAnswer: () => {},
  };
  render(<MathsQuestion {...requiredProps} />);
  const selectInput: HTMLSelectElement =
    screen.getByLabelText("What is 2 + 2?");
  expect(selectInput.value).toBe("99");
});

test("Maths question input calls its onChange function", async () => {
  const mockSubmit = jest.fn();
  const requiredProps = {
    mathsAnswer: "",
    onChangeMathsAnswer: mockSubmit,
  };
  render(<MathsQuestion {...requiredProps} />);
  const selectInput: HTMLSelectElement =
    screen.getByLabelText("What is 2 + 2?");
  if (selectInput) {
    fireEvent.change(selectInput, { target: { value: "4" } });
  }
  expect(mockSubmit).toBeCalled();
});
