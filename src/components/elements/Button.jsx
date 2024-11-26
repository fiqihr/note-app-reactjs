import React from "react";

const Button = (props) => {
  const { icon, text, click } = props;
  return (
    <button onClick={click} className="flex justify-center group relative w-32 lg:w-auto bg-color1 text-gray-50 rounded-md px-4 py-1 hover:bg-opacity-70 hover:shadow-md">
      <img src={icon} className="w-6 h-6" />
      <span className="absolute left-1/2 bottom-full mb-1 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-color3 text-color1 text-sm rounded-md px-2 py-1 transition-opacity whitespace-nowrap duration-300">
        {text}
      </span>
    </button>
  );
};

export default Button;
