import React from "react";
import clsx from "clsx";

function Button({ label, ...props }) {
  console.log(props.height)
  return (
    <button
      type="button"
      className={clsx(
        "p-3 bg-blue-500 rounded-xl min-w-[30%] text-white font-medium hover:text-blue-500 hover:bg-slate-50 transition duration-300 hover:ease-in",
        ...props
      )}
    >
      {label}
    </button>
  );
}

export default Button;
