import React from "react";
import { Button, Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate("Details")}
      ></Button>
    </View>
  );
};

export default Home;
