import React from "react";

var greeting = "";
var dateTime = new Date();
var time = dateTime.getHours();

const customStyle = {
  color: ""
};

if (time === 24 || time < 12) {
  greeting = "Good Morning";
  customStyle.color = "gred";
} else if (time >= 12 && time < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else if (time >= 18 && time < 24) {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

export default function Heading() {
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}
