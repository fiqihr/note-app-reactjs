import React from "react";

const InputIsi = (props) => {
  const { name, placeholder, value, onChange } = props;
  return (
    <div>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-80 border border-gray-300 rounded-md px-2 py-1"
      ></textarea>
    </div>
  );
};

export default InputIsi;
