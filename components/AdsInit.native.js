import Constants from "expo-constants";

const isExpoGo = Constants.appOwnership === "expo";

export async function initAds() {
  if (isExpoGo) return;
  const { default: mobileAds, MaxAdContentRating } = await import(
    "react-native-google-mobile-ads"
  );
  await mobileAds().setRequestConfiguration({
    maxAdContentRating: MaxAdContentRating.G,
    tagForChildDirectedTreatment: false,
    tagForUnderAgeOfConsent: false,
  });
  await mobileAds().initialize();
}
