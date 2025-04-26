import React, { useState } from "react";

export const TextInput = ({
  name,
  placeholder,
  id,
}: {
  name: string;
  placeholder: string;
  id: string;
}):JSX.Element => {
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (fieldName: string, val: string) => {
    setInputValues((prev) => ({ ...prev, [fieldName]: val }));
  };

  return (
    <div className="relative w-full">
      <input
                    id={name}
                    name={name}
                    type="text"
                    value={inputValues[name] || ""}
                    onChange={(e) => handleInputChange(name, e.target.value)}
                    placeholder=" "
                    className="
                      peer block w-full h-[34px] text-[15px]
                      px-2.5 pt-4 pb-2
                      text-gray-900 bg-white rounded-md
                      border border-gray-300
                      focus:outline-none focus:ring-0 focus:border-blue-400
                      placeholder-transparent
                    "
                  />
                  <label
                    htmlFor={name}
                    className={`
                      absolute left-2 z-10 bg-white px-1 text-sm font-normal
                      transition-all duration-200 origin-top-left
                      ${
                        inputValues[name]
                          ? "top-[-0.4rem] scale-75 text-blue-400"
                          : "top-[0.65rem] scale-100 text-gray-500"
                      }
                      peer-focus:top-[-0.4rem]
                      peer-focus:scale-75
                      peer-focus:text-blue-400
                    `}
                    style={{ transformOrigin: "top left" }}
                  >
                    {placeholder}
                  </label>
    </div>
  );
};