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
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.header}>مواضيع الكتاب</Text>
        {topics.map((r, i) => (
          <Topic key={i} rec={r} />
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
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  topicContainer: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "#e6e6e6",
  },
  topicText: {
    color: "#31f1f1f",
    fontSize: 16,
  },
});

export default Index;
