import React, { useState, useRef } from "react";
import EmailEntry from "./EmailEntry";

// TODO: move this out
export const KEY_CODES = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
};

type Props = {
  defaultValue?: string[];
  onChange: (value: string[]) => void;
};

const EmailInput = ({ defaultValue, onChange }: Props) => {
  const [value, setValue] = useState<string[]>(defaultValue || []);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (value: string[]) => {
    setValue(value);
    onChange(value);
  };

  return (
    <div className="flex flex-grow flex-wrap">
      {value.map((email) => (
        <EmailEntry
          key={email}
          value={email}
          onDelete={(email) => {
            const index = value.indexOf(email);

            handleChange([...value.slice(0, index), ...value.slice(index + 1)]);
            inputRef.current!.focus();
          }}
        />
      ))}
      <input
        type="email"
        className="flex flex-grow outline-none"
        ref={inputRef}
        onKeyDown={(evt) => {
          if (
            evt.keyCode === KEY_CODES.ENTER ||
            evt.keyCode === KEY_CODES.TAB
          ) {
            evt.preventDefault();
            if (
              !!inputRef.current!.value &&
              !value.includes(inputRef.current!.value)
            ) {
              handleChange([...value, inputRef.current!.value]);
              inputRef.current!.value = "";
            }
          }
          if (evt.keyCode === KEY_CODES.BACKSPACE && !inputRef.current!.value) {
            handleChange(value.slice(0, value.length - 1));
          }
        }}
      />
    </div>
  );
};

export default EmailInput;
