import React from "react";

const GradientComponent = ({ percentage }) => {
  const gradientStyle = {
    position: "relative",
    width: "80%",
    height: "2px",
    backgroundColor: "#f0f0f0",
    marginTop: "10px",
  };

  const afterStyle = {
    content: "",
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "100%",
    height: "100%",
    background: `linear-gradient(to right, #ff0000 0%, #ff0000 ${percentage}, #ffffff ${percentage}, #ffffff 100%)`,
  };

  return (
    <div style={gradientStyle}>
      <div style={afterStyle}></div>
    </div>
  );
};

export default GradientComponent;
