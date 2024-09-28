import React from "react";
import { SafeAreaView } from "react-native";
import content from "../constants/content";
import ParagraphImage from "../components/ParagraphImage";
import ParagraphTitle from "../components/ParagraphTitle";
import { useLocalSearchParams } from "expo-router";

const Chapter = () => {
  const { id } = useLocalSearchParams();

  const chapterContent = content.find((r) => r.id === id);

  return (
    <SafeAreaView style={styles.container}>
      <ParagraphTitle>{chapterContent.title}</ParagraphTitle>
      {chapterContent.paragraphs.map((r) => (
        <>
          {r.type === "head" && <ParagraphTitle>{r.value}</ParagraphTitle>}
          {r.type === "image" && <ParagraphImage>{r.value}</ParagraphImage>}
          {r.type === "paragraph" && <Paragraph>{r.value}</Paragraph>}
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
