import { ChangeEvent, HtmlHTMLAttributes } from "react";
import { forwardRef } from "react";

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  id: string;
  value: string;
  placeholder?: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  classes?: string[];
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      className={`py-2 pl-2 rounded-md ${props.classes?.join(" ")}`}
      onChange={props.changeHandler}
      ref={ref ?? null}
      placeholder={props.placeholder ?? ""}
      onKeyDown={props.onKeyDown}
      {...props}
    />
  );
});

export default Input;
