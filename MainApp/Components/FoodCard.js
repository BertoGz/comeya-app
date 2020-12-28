import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";

import { SCREEN_HEIGHT } from "../Constants";
import Colors, { addColor } from "../Utils/Colors";
import Styles from "../Utils/Styles";
import { LinearGradient } from "expo-linear-gradient";

const FoodCard = ({ item, onPressItem }) => {
  return (
    <TouchableOpacity
      style={{
        height: SCREEN_HEIGHT / 4,
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: SCREEN_HEIGHT * 0.02,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
      }}
      activeOpacity={0.6}
      delayPressIn={0}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={["rgba(255,255,255,.1)", "rgba(255,255,255,.2)"]}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          borderRadius: 10,
        }}
      />
      <Text style={{ ...Styles.h2, ...Styles.boldText, color: "white" }}>
        {item?.title}
      </Text>
    </TouchableOpacity>
  );
};

export default FoodCard;
