import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
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
          name="chapter/1"
          options={{
            drawerLabel: "Chapter 01",
            title: "مقدمة في التصوير",
          }}
        />
        <Drawer.Screen
          name="chapter/2"
          options={{
            drawerLabel: "Chapter 02",
            title: "Chapter 02",
          }}
        />
        <Drawer.Screen
          name="chapter/3"
          options={{
            drawerLabel: "Chapter 03",
            title: "Chapter 03",
          }}
        />
        <Drawer.Screen
          name="chapter/4"
          options={{
            drawerLabel: "Chapter 04",
            title: "Chapter 04",
          }}
        />
        <Drawer.Screen
          name="chapter/5"
          options={{
            drawerLabel: "Chapter 05",
            title: "Chapter 05",
          }}
        />
        <Drawer.Screen
          name="chapter/6"
          options={{
            drawerLabel: "Chapter 06",
            title: "Chapter 06",
          }}
        />
        <Drawer.Screen
          name="chapter/7"
          options={{
            drawerLabel: "Chapter 07",
            title: "Chapter 07",
          }}
        />
        <Drawer.Screen
          name="chapter/8"
          options={{
            drawerLabel: "Chapter 08",
            title: "Chapter 08",
          }}
        />
        <Drawer.Screen
          name="chapter/9"
          options={{
            drawerLabel: "Chapter 09",
            title: "Chapter 09",
          }}
        />
        <Drawer.Screen
          name="chapter/10"
          options={{
            drawerLabel: "Chapter 10",
            title: "Chapter 10",
          }}
        />
        <Drawer.Screen
          name="chapter/11"
          options={{
            drawerLabel: "Chapter 11",
            title: "Chapter 11",
          }}
        />
        <Drawer.Screen
          name="chapter/12"
          options={{
            drawerLabel: "Chapter 12",
            title: "Chapter 12",
          }}
        />
        <Drawer.Screen
          name="chapter/13"
          options={{
            drawerLabel: "Chapter 13",
            title: "Chapter 13",
          }}
        />
        <Drawer.Screen
          name="chapter/14"
          options={{
            drawerLabel: "Chapter 14",
            title: "Chapter 14",
          }}
        />
        <Drawer.Screen
          name="chapter/15"
          options={{
            drawerLabel: "Chapter 15",
            title: "Chapter 15",
          }}
        />
        <Drawer.Screen
          name="chapter/16"
          options={{
            drawerLabel: "Chapter 16",
            title: "Chapter 16",
          }}
        />
        <Drawer.Screen
          name="chapter/17"
          options={{
            drawerLabel: "Chapter 17",
            title: "Chapter 17",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
