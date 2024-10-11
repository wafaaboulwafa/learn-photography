import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import topics from "../constants/topics";

const Topic = ({ rec }) => {
  return (
    <Link
      href={{
        pathname: rec.path,
      }}
      style={styles.topicContainer}
    >
      <Text style={styles.topicText}>{rec.title}</Text>
    </Link>
  );
};

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>مواضيع الكتاب</Text>
      <ScrollView style={styles.scrollContainer}>
        {topics.map((r) => (
          <Topic rec={r} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  topicContainer: {
    flex: 1,
    margin: 10,
  },
  topicText: {
    fontSize: 16,
  },
});

export default Index;
