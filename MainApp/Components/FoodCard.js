import React from "react";
import { Alert, View, Image, Text, TouchableOpacity } from "react-native";

import { SCREEN_HEIGHT } from "../Constants";
import Colors, { addColor } from "../Utils/Colors";
import Styles from "../Utils/Styles";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "native-base";

const FoodCard = ({ item, onPressItem }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.primaryLight,

        borderRadius: 10,
        margin: 20,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
      }}
      activeOpacity={1}
      delayPressIn={0}
    >
      <View style={{ width: "100%", height: SCREEN_HEIGHT / 3 }}>
        <Image
          style={{
            position: "absolute",
            resizeMode: "cover",
            width: "100%",
            height: "100%",
          }}
          source={{ uri: item?.image }}
        />
      </View>
      <>
        <View style={{ flex: 1 }}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              paddingHorizontal: 10,
              paddingTop: 5,
            }}
          >
            <Text style={{ ...Styles.h3, ...Styles.boldText, color: "white" }}>
              {item?.title}
            </Text>
            <Icon
              name={"hearto"}
              type={"AntDesign"}
              style={{ top: 2, color: "white" }}
            />
          </View>
        </View>
        <View style={{ flex: 1, padding: 10 }}>
          <Text style={{ color: "white" }}>{item?.ingrediants.join()}</Text>
        </View>
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
      </>
    </TouchableOpacity>
  );
};

export default FoodCard;
