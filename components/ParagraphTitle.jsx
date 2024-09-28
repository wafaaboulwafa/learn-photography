import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ParagraphTitle = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 40,
  },
});

export default ParagraphTitle;
