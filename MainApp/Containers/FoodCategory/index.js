import React, { useState, useLayoutEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Styles from "../../Utils/Styles";
import Colors from "../../Utils/Colors";
import FoodCard from "../../Components/FoodCard";
import { LinearGradient } from "expo-linear-gradient";

const FoodCategory = ({ route }) => {
  const foodData = route?.params?.foodData;
  const category = route?.params?.category;

  //const [foodData, setFoodData] = useState([]);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: Colors.secondary,
      }}
    >
      <LinearGradient
        colors={[
          "rgba(255,255,255,.3)",
          Colors.secondary,
          "rgba(255,255,255,.3)",
        ]}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          borderRadius: 10,
          zIndex: -1,
          backgroundColor: Colors.secondary,
        }}
      />
      <FlatList
        contentContainerStyle={{}}
        data={foodData}
        renderItem={FoodCard}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => {
          return <ListHeader {...{ category }} />;
        }}
      />
    </View>
  );
};

export default FoodCategory;

const ListHeader = ({ category }) => {
  return (
    <View style={{ ...Styles.centered, paddingTop: 50 }}>
      <Text style={{ ...Styles.h1, ...Styles.boldText, color: "white" }}>
        {category}
      </Text>
    </View>
  );
};
