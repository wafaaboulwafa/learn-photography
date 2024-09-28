import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ParagraphImage = ({ value }) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={value} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
  },
});

export default ParagraphImage;
