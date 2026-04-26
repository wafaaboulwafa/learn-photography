import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

const BackButton = () => (
  <Pressable
    onPress={() => (router.canGoBack() ? router.back() : router.replace("/"))}
    hitSlop={12}
    accessibilityLabel="رجوع"
    style={({ pressed }) => [styles.button, pressed && styles.pressed]}
  >
    <Text style={styles.label}>‹</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    marginLeft: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  label: {
    color: "white",
    fontSize: 28,
    lineHeight: 30,
    fontWeight: "300",
  },
});

export default BackButton;
