import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>فهرس المحتويات</Text>
      <Link
        href={{
          pathname: "AuthorIntro",
        }}
      >
        مقدمة الكاتب
      </Link>
      <Link
        href={{
          pathname: "IntroToPhotography",
        }}
      >
        مقدمة في التصوير
      </Link>
      <Link
        href={{
          pathname: "Composition",
        }}
      >
        تكوين الصورة
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Index;
