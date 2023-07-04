import { FC } from "react";
import { numberFormatter } from "../../utils/numberFormatter";

const CountLabel: FC<{ count: string | number | undefined }> = ({ count }) => {
  return (
    <span className="bg-gray-700 rounded-xl px-2 py-1">
      {numberFormatter(count)}
    </span>
  );
};

export default CountLabel;
