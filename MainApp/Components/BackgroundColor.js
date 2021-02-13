import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import Colors, { addColor } from "../Utils/Colors";
const BackgroundColor = ({ color }) => (
  <LinearGradient
    colors={["rgba(255,255,255,.3)", color, "rgba(255,255,255,.3)"]}
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      borderRadius: 10,
      zIndex: -1,
      backgroundColor: color,
    }}
  />
);
export default BackgroundColor;
