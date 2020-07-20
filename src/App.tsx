import React from "react";
import EmailInput from "./EmailInput";

function App() {
  return (
    <div>
      <div className="flex justify-center p-20">
        <div
          style={{ width: "580px" }}
          className="flex flex-col box-border bg-white border shadow-lg  rounded-lg "
        >
          <div className="flex px-4 pb-1 pt-3">
            <label className="text-gray-500 mr-8">From:</label>
            <span className="font-bold">Debora Jones</span>
          </div>
          <div className="flex px-4 pt-1 pb-3">
            <label className="text-gray-500 mr-8">To:</label>
            <EmailInput
              defaultValue={["user@domain.com", "invalid"]}
              onChange={(value) => console.log({ value })}
            />
          </div>
          <div className="flex px-4 py-3 border-t border-b">
            <label className="text-gray-500 mr-1">Subject:</label>
            <span className="pr-20">
              White Paper: Can you identify with these use cases?
            </span>
          </div>
          <div className="flex px-4 py-3  border-b">
            <div className="pr-4 border-r">
              <span className="">Normal Text</span>{" "}
              <span className="text-gray-500 px-2">▼</span>
            </div>
            <div className="flex justify-between w-16 font-serif px-4 border-r">
              <div className="font-bold">B</div>
              <div className="italic">I</div>
              <div>...</div>
            </div>
            <div className="px-4 border-r">A</div>
            <div className="px-4 border-r">⚽️🏀</div>
            <div className="px-4 ">🏈⚾️🎾</div>
          </div>
          <div className="px-4 pt-5 pb-20">
            <label className="text-gray-500">Enter your message...</label>
          </div>
          <div className="flex justify-between px-4 py-3 border-t">
            <div>🍤🍙🌮</div>
            <div className="bg-blue-500 text-white font-medium py-1 px-6 rounded-full">
              Send
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
