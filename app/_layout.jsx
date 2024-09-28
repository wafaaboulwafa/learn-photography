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
          name="chapter01"
          options={{
            drawerLabel: "مدخل",
            title: "مدخل",
          }}
        />
        <Drawer.Screen
          name="chapter02"
          options={{
            drawerLabel: "مقدمة في التصوير",
            title: "مقدمة في التصوير",
          }}
        />
        <Drawer.Screen
          name="chapter03"
          options={{
            drawerLabel: "مقدمة في التصوير",
            title: "مقدمة في التصوير",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
