import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "الرئيسية",
          }}
        />
        <Drawer.Screen
          name="chapter01"
          options={{
            drawerLabel: "Chapter 01",
            title: "مقدمة في التصوير",
          }}
        />
        <Drawer.Screen
          name="chapter02"
          options={{
            drawerLabel: "Chapter 02",
            title: "مقدمة في التصوير",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
