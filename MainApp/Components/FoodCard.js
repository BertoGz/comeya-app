import React from "react";
import { Alert, View, Image, Text, TouchableOpacity } from "react-native";
import { store } from "../../App";
import { SCREEN_HEIGHT } from "../Constants";
import Colors, { addColor } from "../Utils/Colors";
import Styles from "../Utils/Styles";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "native-base";
import { addToFavorites } from "../Redux/Actions";

const FoodCard = ({ item, isLiked, onPressItem }) => {
  const { title, image, id, ingrediants } = item || {};
  console.log("test item", item);

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
          source={{ uri: image }}
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
              {title}
            </Text>
            <TouchableOpacity
              activeOpacity={1}
              delayPressIn={0}
              onPress={onPressItem}
            >
              <View>
                {isLiked ? (
                  <Icon
                    name={"heart"}
                    type={"AntDesign"}
                    style={{ top: 2, color: "red" }}
                  />
                ) : (
                  <Icon
                    name={"hearto"}
                    type={"AntDesign"}
                    style={{ top: 2, color: "white" }}
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, padding: 10 }}>
          <Text style={{ color: "white" }}>{ingrediants.join()}</Text>
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
          pointerEvents={"none"}
        />
      </>
    </TouchableOpacity>
  );
};

export default FoodCard;
