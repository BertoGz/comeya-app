import { Icon } from "native-base";
import React from "react";
import { View, TextInput } from "react-native";
import Colors from "../Utils/Colors";
const SearchBar = ({ contentContainer }) => {
  return (
    <View
      style={[
        {
          paddingHorizontal: 20,
          alignContent: "center",
        },
        { ...contentContainer },
      ]}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "rgb(250,250,250)",
          padding: 5,
          borderRadius: 10,
          flexDirection: "row",
        }}
      >
        <Icon
          name={"search"}
          type={"FontAwesome"}
          style={{ color: Colors.textLight, paddingRight: 7 }}
        />
        <TextInput
          editable
          maxLength={40}
          returnKeyType={"search"}
          style={{
            backgroundColor: "white",
            fontSize: 20,
            flex: 1,
            color: Colors.textLight,
          }}
        />
      </View>
    </View>
  );
};
export default SearchBar;
