import React, { useState } from "react";
import RadioButton from "../components/Buttons/RadioButton";

function GetApp() {
  const [option, setOption] = useState("email");
  const handleRadioButton = (e) => {
    setOption(e.target.name);
  };
  return (
    <div className="h-fit w-full bg-gray-500">
      <div className="inline-flex space-x-4">
        <RadioButton
          name="email"
          value={option}
          handleRadioButton={handleRadioButton}
        />
        <RadioButton
          handleRadioButton={handleRadioButton}
          name="phone"
          value={option}
        />
      </div>
    </div>
  );
}

export default GetApp;
