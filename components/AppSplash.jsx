import React from "react";
import { View, Image, StyleSheet, StatusBar } from "react-native";

const AppSplash = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="#000000" />
    <Image
      source={require("../assets/splash.png")}
      style={styles.image}
      resizeMode="contain"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default AppSplash;
