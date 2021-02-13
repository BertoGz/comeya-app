import React, { useState, useLayoutEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Styles from "../../Utils/Styles";
import Colors from "../../Utils/Colors";
import FoodCard from "../../Components/FoodCard";
import BackgroundColor from "../../Components/BackgroundColor";
const FoodCategory = ({ route }) => {
  const foodData = route?.params?.foodData;
  const category = route?.params?.category;

  //const [foodData, setFoodData] = useState([]);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <BackgroundColor color={Colors.secondary} />

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
