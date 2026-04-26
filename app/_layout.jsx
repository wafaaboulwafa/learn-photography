import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import topics from "../constants/topics";
import { FontSizeProvider } from "../components/FontSizeContext";
import FontSizeButton from "../components/FontSizeButton";
import BackButton from "../components/BackButton";
import { initAds } from "../components/AdsInit";

export default function RootLayout() {
  useEffect(() => {
    initAds();
  }, []);

  return (
    <FontSizeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
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
