import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ParagraphImage from "./ParagraphImage";
import ParagraphTitle from "./ParagraphTitle";
import Paragraph from "./Paragraph";
import BannerView from "./BannerView";
import { ScrollView } from "react-native-gesture-handler";

const Chapter = (chapterContent) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.page}
        showsVerticalScrollIndicator={false}
      >
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
                <Paragraph key={`p-${i}`} value={r.value} />
              )}
            </React.Fragment>
          ))}
        <View style={styles.endOrnament} />
      </ScrollView>
      <View
        style={[
          styles.adsContainer,
          { height: 80 + insets.bottom, paddingBottom: insets.bottom },
        ]}
      >
        <BannerView />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5efe4",
  },
  scroll: {
    flex: 1,
  },
  page: {
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 48,
  },
  endOrnament: {
    alignSelf: "center",
    width: 40,
    height: 2,
    backgroundColor: "#a17a3a",
    marginTop: 24,
    marginBottom: 8,
    borderRadius: 1,
    opacity: 0.6,
  },
  adsContainer: {
    backgroundColor: "#0e1619",
  },
});

export default Chapter;
