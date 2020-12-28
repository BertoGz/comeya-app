import React, { useState, useLayoutEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { getFoodDataFromCategory } from "../../Utils/Requests";
import Styles from "../../Utils/Styles";
import FoodCard from "../../Components/FoodCard";
const FoodCategory = ({ route }) => {
  const category = route?.params?.category;
  console.log(category);
  const [foodData, setFoodData] = useState([]);
  useLayoutEffect(() => {
    getFoodDataFromCategory({
      tag: category,
      onSuccess: (response) => {
        setFoodData(response);
      },
    });
  }, []);
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View style={{ flex: 1, ...Styles.centered }}></View>
      <FlatList data={foodData} renderItem={FoodCard} />
    </View>
  );
};

export default FoodCategory;
