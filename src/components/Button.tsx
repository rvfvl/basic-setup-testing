import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: Props) => {
  return (
    <button className="p-2 border bg-blue-500 text-white" {...rest}>
      {children}
    </button>
  );
};

export default Button;
