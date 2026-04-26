import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { useFontSize } from "./FontSizeContext";

const Paragraph = ({ value }) => {
  const { scale } = useFontSize();
  const fontSize = 18 * scale;
  const lineHeight = fontSize * 1.95;

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          { fontSize, lineHeight },
        ]}
        selectable={false}
      >
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  text: {
    color: "#2a2418",
    writingDirection: "rtl",
    textAlign: "right",
    fontFamily: Platform.select({
      ios: "Georgia",
      android: "serif",
      default: "serif",
    }),
  },
});

export default Paragraph;
