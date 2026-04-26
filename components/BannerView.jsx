import React, { useRef } from "react";
import { View, StyleSheet, Platform, Text } from "react-native";
import Constants from "expo-constants";

const isExpoGo = Constants.appOwnership === "expo";

const BannerView = () => {
  if (isExpoGo) {
    return (
      <View style={[styles.container, styles.placeholder]}>
        <Text style={styles.placeholderText}>
          (الإعلانات تظهر فقط بعد بناء النسخة)
        </Text>
      </View>
    );
  }

  const {
    BannerAd,
    BannerAdSize,
    TestIds,
    useForeground,
  } = require("react-native-google-mobile-ads");

  const adUnitId = __DEV__
    ? TestIds.ADAPTIVE_BANNER
    : "ca-app-pub-1620938030646614/9962159730";

  const bannerRef = useRef(null);
  useForeground(() => {
    Platform.OS === "ios" && bannerRef.current?.load();
  });
  return (
    <View style={styles.container}>
      <BannerAd
        ref={bannerRef}
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: false,
          networkExtras: {
            collapsible: "bottom",
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  placeholder: {
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  placeholderText: {
    color: "rgba(58,42,18,0.4)",
    fontSize: 12,
  },
});

export default BannerView;
