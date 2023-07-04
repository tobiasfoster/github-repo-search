import { FC } from "react";

type LoaderSize = "small" | "medium" | "large";
type LoaderProps = {
  size: LoaderSize;
};

const Loader: FC<LoaderProps> = ({ size }) => {
  const getLoaderSize = (size: LoaderSize) => {
    switch (size) {
      case "small":
        return {
          width: "25px",
          height: "25px",
        };
      case "medium":
        return {
          width: "50px",
          height: "50px",
        };
      case "large":
        return {
          width: "100px",
          height: "100px",
        };
      default:
        return {
          width: "25px",
          height: "25px",
        };
    }
  };

  return (
    <div
      className="rounded-full border-2 border-r-transparent self-center"
      style={{
        animationName: "spin",
        animationTimingFunction: "linear",
        animationDuration: "0.5s",
        animationIterationCount: "infinite",
        ...getLoaderSize(size),
      }}
    ></div>
  );
};

export default Loader;
