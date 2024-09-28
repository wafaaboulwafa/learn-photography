import React from "react";
import { View, Text } from "react-native";

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
  },
  text: {},
});

export default ParagraphTitle;
