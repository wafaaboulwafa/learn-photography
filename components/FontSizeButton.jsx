import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useFontSize } from "./FontSizeContext";

const LABEL = {
  small: "A-",
  medium: "A",
  large: "A+",
  xlarge: "A++",
};

const FontSizeButton = () => {
  const { size, cycle } = useFontSize();
  return (
    <Pressable
      onPress={cycle}
      hitSlop={12}
      accessibilityLabel="تغيير حجم الخط"
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
    >
      <Text style={styles.label}>{LABEL[size]}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
    minWidth: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  label: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});

export default FontSizeButton;
