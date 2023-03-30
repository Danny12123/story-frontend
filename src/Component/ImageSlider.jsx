import { Slider } from "antd";
import React, { useState } from "react";


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const SliderStyle = {
    height: "100%",
    width: '50%',
    position: "relative",
  };
  const styleSlider = {
    // backgroundImage: `url(${slides[current].url})`,
    backgroundImage: `url(${slides[current].url})`,
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div style={SliderStyle}>
      <div style={styleSlider}></div>
    </div>
  );
};

export default ImageSlider
