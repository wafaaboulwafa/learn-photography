import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import topics from "../constants/topics";
import {
  FontSizeProvider,
  useFontSize,
} from "../components/FontSizeContext";
import FontSizeButton from "../components/FontSizeButton";
import BackButton from "../components/BackButton";
import AppSplash from "../components/AppSplash";
import { initAds } from "../components/AdsInit";

// Minimum on-screen time for the in-app splash, regardless of how fast
// the rest of the app initialises.
const SPLASH_MIN_MS = 1500;

// Keep the native splash visible while we load saved settings.
// Wrapped in try/catch — on platforms where the splash module is a no-op
// stub (e.g. web), the call may throw synchronously.
try {
  SplashScreen.preventAutoHideAsync()?.catch(() => {});
} catch {}

function AppShell() {
  const { ready } = useFontSize();
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const showSplash = !ready || !minTimeElapsed;

  useEffect(() => {
    initAds();
    const t = setTimeout(() => setMinTimeElapsed(true), SPLASH_MIN_MS);
    // Hand off from the (icon-sized) native splash to our in-app
    // fullscreen splash as soon as JS is up. Our AppSplash takes over
    // the whole screen so the user sees a continuous fullscreen image.
    try {
      SplashScreen.hideAsync()?.catch(() => {});
    } catch {}
    return () => clearTimeout(t);
  }, []);

  if (showSplash) {
    return <AppSplash />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#3a2a12" translucent={false} />
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
          statusBarStyle: "light",
          statusBarBackgroundColor: "#3a2a12",
          statusBarTranslucent: false,
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
    </GestureHandlerRootView>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <FontSizeProvider>
        <AppShell />
      </FontSizeProvider>
    </SafeAreaProvider>
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
