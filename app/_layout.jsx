import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import mobileAds, { MaxAdContentRating } from "react-native-google-mobile-ads";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import topics from "../constants/topics";

export default function RootLayout() {
  useEffect(() => {
    (async () => {
      await mobileAds().setRequestConfiguration({
        maxAdContentRating: MaxAdContentRating.G,
        tagForChildDirectedTreatment: false,
        tagForUnderAgeOfConsent: false,
      });
      await mobileAds().initialize();
    })();
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerPosition: "right",
          headerTitleAlign: "center",
          headerStyle: styles.headerStyle,
          headerTintColor: "white",
          drawerStyle: styles.headerStyle,
          drawerLabelStyle: styles.drawerItem,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "مواضيع الكتاب",
            title: "مواضيع الكتاب",
          }}
        />
        {topics.map((r, i) => (
          <Drawer.Screen
            key={i}
            name={r.path}
            options={{
              drawerLabel: r.title,
              title: r.title,
            }}
          />
        ))}
      </Drawer>
      <StatusBar style="light" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "rgb(14, 22, 25)",
  },
  drawerItem: {
    color: "white",
  },
});
