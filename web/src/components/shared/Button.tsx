import { forwardRef } from "react";

type ButtonProps = {
  id: string;
  text: string;
  clickHandler: () => void;
  classes?: string[];
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button
      className={`bg-neutral-200 active:bg-neutral-400 text-neutral-800  px-2 rounded-md ${props.classes?.join(
        " ",
      )}`}
      onClick={props.clickHandler}
      ref={ref ?? null}
      id={props.id}
    >
      {props.text}
    </button>
  );
});

export default Button;
