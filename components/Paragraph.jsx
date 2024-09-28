import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Paragraph = ({ value }) => {
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
    fontSize: 18,
    lineHeight: 35,
  },
});

export default Paragraph;
