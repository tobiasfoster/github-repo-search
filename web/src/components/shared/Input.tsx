import { ChangeEvent, HtmlHTMLAttributes } from "react";
import { forwardRef } from "react";

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  id: string;
  value: string;
  placeholder?: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      onChange={props.changeHandler}
      value={props.value}
      ref={ref ?? null}
      id={props.id}
      placeholder={props.placeholder ?? ""}
      onKeyDown={props.onKeyDown}
    />
  );
});

export default Input;
