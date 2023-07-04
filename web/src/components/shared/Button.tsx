import { forwardRef } from "react";

type ButtonProps = {
  id: string;
  text: string;
  clickHandler: () => void;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button onClick={props.clickHandler} ref={ref ?? null} id={props.id}>
      {props.text}
    </button>
  );
});

export default Button;
