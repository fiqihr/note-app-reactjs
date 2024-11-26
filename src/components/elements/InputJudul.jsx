import React from "react";

const InputJudul = (props) => {
  const { placeholder, name, value, onChange } = props;
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-md px-2 py-1 mb-2 text-2xl lg:text-xl"
    />
  );
};

export default InputJudul;
