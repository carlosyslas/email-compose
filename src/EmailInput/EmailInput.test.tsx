import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EmailInput, { KEY_CODES } from "./EmailInput";

test("Handles <ENTER>, <TAB> and <BACKSPACE>", () => {
  const onChange = jest.fn();
  const { getByText, getByRole, queryByText } = render(
    <EmailInput onChange={onChange} />
  );
  const input = getByRole("textbox") as HTMLInputElement;

  fireEvent.change(input, { target: { value: "valid@domain.com" } });
  fireEvent.keyDown(input, { keyCode: KEY_CODES.ENTER });
  expect(input.value).toBe("");

  fireEvent.change(input, { target: { value: "invalid" } });
  fireEvent.keyDown(input, { keyCode: KEY_CODES.TAB });
  expect(input.value).toBe("");

  fireEvent.change(input, { target: { value: "to-remove" } });
  fireEvent.keyDown(input, { keyCode: KEY_CODES.ENTER });
  expect(input.value).toBe("");
  fireEvent.keyDown(input, { keyCode: KEY_CODES.BACKSPACE });

  const validEmailEntry = getByText(/valid@domain.com/i);
  expect(validEmailEntry).toBeInTheDocument();
  const invalidEntry = getByText(/invalid/i);
  expect(invalidEntry).toBeInTheDocument();
  const toRemove = queryByText(/valido/i);
  expect(toRemove).not.toBeInTheDocument();
});

// TODO: Add test for removing an entry by clicking on the "x" button
