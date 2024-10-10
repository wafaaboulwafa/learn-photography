import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ParagraphImage from "./ParagraphImage";
import ParagraphTitle from "./ParagraphTitle";
import Paragraph from "./Paragraph";
import BannerView from "./BannerView";
import { ScrollView } from "react-native-gesture-handler";

const Chapter = (chapterContent) => {
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
      <View style={styles.adsContainer}>
        <BannerView />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
  },
  adsContainer: {
    height: 80,
  },
});

export default Chapter;
