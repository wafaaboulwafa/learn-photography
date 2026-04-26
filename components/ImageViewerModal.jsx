import React from "react";
import {
  Modal,
  View,
  Pressable,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
} from "react-native";
import ImageZoom from "react-native-image-pan-zoom";

const ImageViewerModal = ({ visible, source, onClose }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.backdrop}>
        {visible && source && (
          <ImageZoom
            cropWidth={width}
            cropHeight={height}
            imageWidth={width}
            imageHeight={height}
            enableDoubleClickZoom
            minScale={1}
            maxScale={4}
            onClick={onClose}
          >
            <Image
              source={source}
              style={{ width, height }}
              resizeMode="contain"
            />
          </ImageZoom>
        )}
        <Pressable
          onPress={onClose}
          hitSlop={16}
          style={styles.closeButton}
          accessibilityLabel="إغلاق"
        >
          <Text style={styles.closeText}>×</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "black",
  },
  closeButton: {
    position: "absolute",
    top: 36,
    right: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  closeText: {
    color: "white",
    fontSize: 28,
    lineHeight: 30,
    fontWeight: "300",
  },
});

export default ImageViewerModal;
