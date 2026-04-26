import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { useFontSize } from "./FontSizeContext";

const ParagraphTitle = ({ value }) => {
  const { scale } = useFontSize();
  const fontSize = 24 * scale;
  const lineHeight = fontSize * 1.5;

  return (
    <View style={styles.container}>
      <Text
        style={[styles.text, { fontSize, lineHeight }]}
        selectable={false}
      >
        {value}
      </Text>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 18,
  },
  text: {
    fontWeight: "700",
    color: "#3a2a12",
    writingDirection: "rtl",
    textAlign: "right",
    fontFamily: Platform.select({
      ios: "Georgia",
      android: "serif",
      default: "serif",
    }),
  },
  divider: {
    marginTop: 8,
    height: 2,
    backgroundColor: "#a17a3a",
    width: 60,
    alignSelf: "flex-end",
    borderRadius: 1,
  },
});

export default ParagraphTitle;
