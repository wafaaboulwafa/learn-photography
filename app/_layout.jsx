import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import topics from "../constants/topics";
import {
  FontSizeProvider,
  useFontSize,
} from "../components/FontSizeContext";
import FontSizeButton from "../components/FontSizeButton";
import BackButton from "../components/BackButton";
import { initAds } from "../components/AdsInit";

// Keep the native splash visible while we load saved settings.
SplashScreen.preventAutoHideAsync().catch(() => {});

function AppShell() {
  const { ready } = useFontSize();

  useEffect(() => {
    initAds();
  }, []);

  const onLayout = useCallback(() => {
    if (ready) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [ready]);

  if (!ready) {
    // Render nothing visible — the native splash stays on screen until
    // we hide it on first layout below.
    return <View style={{ flex: 1 }} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayout}>
      <Drawer
        screenOptions={{
          drawerPosition: "right",
          headerTitleAlign: "center",
          headerStyle: styles.headerStyle,
          headerTintColor: "white",
          headerTitleStyle: styles.headerTitle,
          drawerStyle: styles.drawerStyle,
          drawerLabelStyle: styles.drawerItem,
          drawerActiveTintColor: "#e4b873",
          drawerInactiveTintColor: "white",
          sceneContainerStyle: { backgroundColor: "#f5efe4" },
          headerLeft: () => <BackButton />,
          headerRight: () => <FontSizeButton />,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "مواضيع الكتاب",
            title: "مواضيع الكتاب",
            headerLeft: () => null,
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

export default function RootLayout() {
  return (
    <FontSizeProvider>
      <AppShell />
    </FontSizeProvider>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#3a2a12",
  },
  headerTitle: {
    fontWeight: "700",
    fontSize: 18,
  },
  drawerStyle: {
    backgroundColor: "#0e1619",
  },
  drawerItem: {
    color: "white",
    fontSize: 15,
  },
});
