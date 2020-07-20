import React from "react";

const VALIDATION_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

type Props = {
  value: string;
  onDelete: (value: string) => void;
};

const EmailEntry = ({ value, onDelete }: Props) => {
  const valid = VALIDATION_REGEXP.test(value);
  const backgroundClassName = valid ? "hover:bg-gray-300" : "bg-red-300";

  return (
    <div
      className={`flex items-center text-transparent hover:text-black px-3 rounded ${backgroundClassName}`}
    >
      <div className="font-bold text-black">{value}</div>
      {!valid && (
        <div className="flex items-center justify-center bg-red-600 text-white h-3 w-3 rounded-lg text-xs ml-2">
          !
        </div>
      )}
      <div className="ml-2 cursor-pointer" onClick={() => onDelete(value)}>
        x
      </div>
    </div>
  );
};

export default EmailEntry;
