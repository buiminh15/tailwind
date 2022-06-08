import React from "react";

function RadioButton({ name, value, handleRadioButton }) {
  return (
    <div
      className="inline-flex
    items-center space-x-2"
    >
      <input
        type="radio"
        className="h-5 w-5 accent-pink-600"
        checked={value === name}
        name={name}
        id={name}
        onChange={handleRadioButton}
      />
      <label for={name} className="text-lg capitalize ">
        {name}
      </label>
    </div>
  );
}

export default RadioButton;
