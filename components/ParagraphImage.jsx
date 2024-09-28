import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ParagraphImage = ({ value }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ path: value }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {},
});

export default ParagraphImage;
