import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>فهرس المحتويات</Text>
      <Link
        href={{
          pathname: "chapter01",
        }}
      >
        Chapter 1
      </Link>
      <Link
        href={{
          pathname: "chapter02",
        }}
      >
        Chapter 2
      </Link>
      <Link
        href={{
          pathname: "chapter03",
        }}
      >
        Chapter 3
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {},
});

export default Index;
