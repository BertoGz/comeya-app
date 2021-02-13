import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { getAllFoodCategories } from "../../Utils/Requests";
import SearchBar from "../../Components/SearchBar";
import FoodCategoryListItem from "../../Components/FoodCategoryListItem";
import Colors from "../../Utils/Colors";
import Styles from "../../Utils/Styles";
import { useNavigation } from "@react-navigation/native";
import { getFoodDataFromCategory } from "../../Utils/Requests";
import BackgroundColor from "../../Components/BackgroundColor";
const Home = () => {
  const [foodCategories, setFoodCategories] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getAllFoodCategories({
      onSuccess: (response) => {
        setFoodCategories(response);
      },
    });
  }, []);
  console.log(foodCategories);
  const onPressCategory = (category) => {
    console.log("hello", category);
    getFoodDataFromCategory({
      tag: category,
      onSuccess: (data) => {
        if (data.length > 0) {
          navigation.navigate("FoodCategory", { foodData: data, category });
        } else {
          Alert.alert("No Data");
        }
      },
      onFailure: () => {},
    });
  };
  return (
    <View style={{ flexShrink: 1 }}>
      <BackgroundColor color={Colors.secondary} />

      <ScrollView>
        <View style={{ height: 100, ...Styles.centered }}>
          <Text
            style={{
              ...Styles.h1,
              ...Styles.boldText,
              color: Colors.textLight,
            }}
          >
            Comeyá
          </Text>
        </View>
        <SearchBar contentContainer={{ paddingBottom: 20 }} />
        <FlatList
          numColumns={2}
          data={foodCategories}
          renderItem={({ item }) => {
            return <FoodCategoryListItem {...{ item, onPressCategory }} />;
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerText: {
    color: "teal",
    fontSize: 20,
  },
});
