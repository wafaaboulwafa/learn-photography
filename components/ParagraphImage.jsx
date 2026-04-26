import React, { useState } from "react";
import { View, Image, Pressable, StyleSheet, Text } from "react-native";
import ImageViewerModal from "./ImageViewerModal";

const MAX_HEIGHT = 320;

const resolveInitialAspectRatio = (source) => {
  if (Image.resolveAssetSource) {
    const resolved = Image.resolveAssetSource(source);
    if (resolved && resolved.width && resolved.height) {
      return resolved.width / resolved.height;
    }
  }
  return 4 / 3;
};

const ParagraphImage = ({ value }) => {
  const [open, setOpen] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(() =>
    resolveInitialAspectRatio(value)
  );

  const handleLoad = (e) => {
    const { width, height } = e.nativeEvent?.source || {};
    if (width && height) setAspectRatio(width / height);
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setOpen(true)}
        style={({ pressed }) => [styles.frame, pressed && styles.framePressed]}
        accessibilityRole="imagebutton"
        accessibilityLabel="فتح الصورة بحجم كامل"
      >
        <Image
          resizeMode="contain"
          source={value}
          onLoad={handleLoad}
          style={[styles.image, { aspectRatio }]}
        />
        <View style={styles.zoomHint}>
          <Text style={styles.zoomHintText}>⤢</Text>
        </View>
      </Pressable>
      <ImageViewerModal
        visible={open}
        source={value}
        onClose={() => setOpen(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 14,
    alignItems: "center",
  },
  frame: {
    width: "100%",
    maxHeight: MAX_HEIGHT,
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: "#ece4d3",
    borderWidth: 1,
    borderColor: "rgba(58,42,18,0.18)",
    alignItems: "center",
    justifyContent: "center",
  },
  framePressed: {
    opacity: 0.85,
  },
  image: {
    width: "100%",
    maxHeight: MAX_HEIGHT,
    alignSelf: "center",
  },
  zoomHint: {
    position: "absolute",
    bottom: 8,
    right: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.55)",
    alignItems: "center",
    justifyContent: "center",
  },
  zoomHintText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default ParagraphImage;
