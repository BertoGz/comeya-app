import React, { useState, useLayoutEffect, useCallback } from "react";
import { View, Text, FlatList } from "react-native";
import Styles from "../../Utils/Styles";
import Colors from "../../Utils/Colors";
import FoodCard from "../../Components/FoodCard";
import BackgroundColor from "../../Components/BackgroundColor";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../../Redux/Actions";
import { store } from "../../../App";
const FoodCategory = ({ route }) => {
  const foodData = route?.params?.foodData;
  const category = route?.params?.category;
  const { userData } = useSelector((userData) => userData);
  const dispatch = useDispatch();
  //const [foodData, setFoodData] = useState([]);
  const FoodCardCallback = useCallback(
    ({ item }) => {
      const { id } = item || {};
      const favorites = userData.favorites;
      const isLiked = favorites.has(id);
      const onPressItem = () => {
        dispatch(addToFavorites(id));
      };
      return <FoodCard {...{ item, onPressItem, isLiked }} />;
    },
    [userData]
  );
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
        extraData={userData}
        renderItem={FoodCardCallback}
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
