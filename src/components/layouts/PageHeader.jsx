import React from "react";
import Button from "../elements/Button";
import { Link } from "react-router-dom";

const PageHeader = (props) => {
  const { title, buttonicon, buttontext, linkto } = props;
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-between md:items-center lg:items-center mb-4 lg:mb-6">
      <h3 className="my-4 text-2xl font-bold">{title}</h3>
      <div className="bg-red-200 w-32 lg:w-auto">
        <Link to={linkto}>
          <Button text={buttontext} icon={buttonicon} click={() => {}} />
        </Link>
      </div>
    </div>
  );
};

export default PageHeader;
