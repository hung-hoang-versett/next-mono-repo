import React from "react";
export interface ButtonProps {
  className?: any;
  disabled?: boolean;
  loading?: boolean;
  size?: "small" | "middle" | "large";
  id?: string;
  buttonType?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Button: React.FC<ButtonProps> = ({
  className,
  id,
  onClick,
  buttonType,
  ...props
}) => {
  return (
    <button id={id} {...props} onClick={onClick}>
      {props.children}
    </button>
  );
};
