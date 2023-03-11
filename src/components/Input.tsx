import React from "react";

type Props = { label: string } & React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: Props) => {
  return (
    <>
      <label>{props.label}</label>
      <input className="border" {...props} />
    </>
  );
};

export default Input;
