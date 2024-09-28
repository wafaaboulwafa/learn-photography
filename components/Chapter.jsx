import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import content from "../constants/content";
import ParagraphImage from "./paragraphImage";
import ParagraphTitle from "./paragraphTitle";
import Paragraph from "./paragraph";
import { ScrollView } from "react-native-gesture-handler";

const Chapter = (id) => {
  const chapterContent = content.find((r) => r.id === id);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {chapterContent?.paragraphs &&
          chapterContent.paragraphs.map((r, i) => (
            <React.Fragment key={i}>
              {r.type === "header" && (
                <ParagraphTitle key={`h-${i}`} value={r.value} />
              )}
              {r.type === "image" && (
                <ParagraphImage key={`i-${i}`} value={r.value} />
              )}
              {r.type === "paragraph" && (
                <Paragraph key={`h-${i}`} value={r.value} />
              )}
            </React.Fragment>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
});

export default Chapter;
