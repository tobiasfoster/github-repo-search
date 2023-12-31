import { ChangeEvent } from "react";
import { forwardRef } from "react";

type SelectProps = {
  options: { display: string; value: string | number }[];
  id: string;
  value: string | number;
  changeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
  classes?: string[];
};

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  return (
    <select
      className={`pl-2 rounded-md ${props.classes?.join(" ")}`}
      value={props.value}
      onChange={props.changeHandler}
      ref={ref ?? null}
      id={props.id}
    >
      {props.options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.display}
          </option>
        );
      })}
    </select>
  );
});

export default Select;
