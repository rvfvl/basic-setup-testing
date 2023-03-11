import React from "react";

type Props = { label: string } & React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: Props) => {
  return (
    <div>
      <label className="block pb-1 font-mono">{props.label}:</label>
      <input className="border" {...props} />
    </div>
  );
};

export default Input;
