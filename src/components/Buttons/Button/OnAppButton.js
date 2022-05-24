import React from "react";

function OnAppButton({ appleStore }) {
  const imgUrl = appleStore
    ? "https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
    : "https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png";
  const url = appleStore ? "#" : "#";
  return (
    <a className="cursor-pointer " href={url}>
      <img className="h-10" src={imgUrl} alt="app store" />
    </a>
  );
}

export default OnAppButton;
