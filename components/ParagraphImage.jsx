import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";

const ParagraphImage = ({ value }) => {
  return (
    <View style={styles.container}>
      {/* <ImageZoom
        cropWidth={Dimensions.get("window").width}
        cropHeight={Dimensions.get("window").height}
        imageWidth={200}
        imageHeight={200}
      > */}
      <Image resizeMode="contain" style={styles.image} source={value} />
      {/* </ImageZoom> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
  },
});

export default ParagraphImage;
