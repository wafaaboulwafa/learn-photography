import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";
import { Link } from "expo-router";
import topics from "../constants/topics";
import { useFontSize } from "../components/FontSizeContext";

const Topic = ({ rec, index, scale }) => (
  <Link href={{ pathname: rec.path }} asChild>
    <Pressable
      style={({ pressed }) => [
        styles.topicContainer,
        pressed && styles.topicPressed,
      ]}
    >
      <View style={styles.topicRow}>
        <Text style={[styles.topicNumber, { fontSize: 14 * scale }]}>
          {index + 1}
        </Text>
        <Text
          style={[styles.topicText, { fontSize: 16 * scale }]}
          selectable={false}
        >
          {rec.title}
        </Text>
      </View>
    </Pressable>
  </Link>
);

const Index = () => {
  const { scale } = useFontSize();
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cover}>
          <Text
            style={[styles.coverEyebrow, { fontSize: 14 * scale }]}
            selectable={false}
          >
            كتاب
          </Text>
          <Text
            style={[styles.coverTitle, { fontSize: 28 * scale, lineHeight: 40 * scale }]}
            selectable={false}
          >
            تعلم التصوير الفوتوغرافي
          </Text>
          <View style={styles.coverDivider} />
          <Text
            style={[styles.coverSubtitle, { fontSize: 15 * scale }]}
            selectable={false}
          >
            دليلك العملي للبدء بالتصوير
          </Text>
        </View>

        <Text
          style={[styles.tocHeader, { fontSize: 20 * scale }]}
          selectable={false}
        >
          الفهرس
        </Text>
        <View style={styles.tocDivider} />

        {topics.map((r, i) => (
          <Topic key={i} rec={r} index={i} scale={scale} />
        ))}

        <View style={styles.endOrnament} />
      </ScrollView>
    </View>
  );
};

const SERIF = Platform.select({
  ios: "Georgia",
  android: "serif",
  default: "serif",
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5efe4",
  },
  scrollContent: {
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 40,
  },
  cover: {
    alignItems: "center",
    paddingVertical: 28,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(58,42,18,0.15)",
  },
  coverEyebrow: {
    fontFamily: SERIF,
    fontSize: 14,
    color: "#a17a3a",
    letterSpacing: 4,
    marginBottom: 8,
  },
  coverTitle: {
    fontFamily: SERIF,
    fontSize: 28,
    fontWeight: "700",
    color: "#3a2a12",
    textAlign: "center",
    lineHeight: 40,
  },
  coverDivider: {
    width: 60,
    height: 2,
    backgroundColor: "#a17a3a",
    marginVertical: 14,
    borderRadius: 1,
  },
  coverSubtitle: {
    fontFamily: SERIF,
    fontSize: 15,
    color: "#5a4a2a",
    fontStyle: "italic",
    textAlign: "center",
  },
  tocHeader: {
    fontFamily: SERIF,
    fontSize: 20,
    fontWeight: "700",
    color: "#3a2a12",
    textAlign: "center",
    marginBottom: 6,
  },
  tocDivider: {
    alignSelf: "center",
    width: 40,
    height: 1.5,
    backgroundColor: "#a17a3a",
    marginBottom: 16,
    borderRadius: 1,
    opacity: 0.6,
  },
  topicContainer: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginVertical: 4,
    borderRadius: 6,
    backgroundColor: "#ece4d3",
    borderWidth: 1,
    borderColor: "rgba(58,42,18,0.12)",
  },
  topicPressed: {
    backgroundColor: "#e0d6bf",
  },
  topicRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  topicNumber: {
    fontFamily: SERIF,
    fontSize: 14,
    color: "#a17a3a",
    fontWeight: "700",
    marginLeft: 12,
    minWidth: 26,
    textAlign: "center",
  },
  topicText: {
    flex: 1,
    fontFamily: SERIF,
    color: "#2a2418",
    fontSize: 16,
    textAlign: "right",
    writingDirection: "rtl",
  },
  endOrnament: {
    alignSelf: "center",
    width: 40,
    height: 2,
    backgroundColor: "#a17a3a",
    marginTop: 24,
    borderRadius: 1,
    opacity: 0.6,
  },
});

export default Index;
