import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import content from "../constants/content";
import ParagraphImage from "./ParagraphImage";
import ParagraphTitle from "./ParagraphTitle";
import Paragraph from "./Paragraph";

const Chapter = (id) => {
  const chapterContent = content.find((r) => r.id === id);

  return (
    <SafeAreaView style={styles.container}>
      <ParagraphTitle>{chapterContent?.title}</ParagraphTitle>
      {chapterContent?.paragraphs &&
        chapterContent.paragraphs.map((r) => (
          <>
            {r.type === "head" && <ParagraphTitle value={r.value} />}
            {r.type === "image" && <ParagraphImage value={r.value} />}
            {r.type === "paragraph" && <Paragraph value={r.value} />}
          </>
        ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chapter;
