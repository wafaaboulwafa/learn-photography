import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import mobileAds from "react-native-google-mobile-ads";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    (async () => {
      await mobileAds().initialize();
    })();
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerPosition: "right",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "الرئيسية",
            title: "الرئيسية",
          }}
        />
        <Drawer.Screen
          name="AuthorIntro"
          options={{
            drawerLabel: "مقدمة الكاتب",
            title: "مقدمة الكاتب",
          }}
        />
        <Drawer.Screen
          name="IntroToPhotography"
          options={{
            drawerLabel: "مقدمة في التصوير",
            title: "مقدمة في التصوير",
          }}
        />
        <Drawer.Screen
          name="Composition"
          options={{
            drawerLabel: "تكوين الصورة",
            title: "تكوين الصورة",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
