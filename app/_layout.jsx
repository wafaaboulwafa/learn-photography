import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import mobileAds, { MaxAdContentRating } from "react-native-google-mobile-ads";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

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

        <Drawer.Screen
          name="LightProperties"
          options={{
            drawerLabel: "خصائص الضوء و أنواعه",
            title: "خصائص الضوء و أنواعه",
          }}
        />

        <Drawer.Screen
          name="ExposureTriangle"
          options={{
            drawerLabel: "مثلث التعريض الضوئي",
            title: "مثلث التعريض الضوئي",
          }}
        />

        <Drawer.Screen
          name="WhiteBalance"
          options={{
            drawerLabel: "موازنة اللون الأبيض",
            title: "موازنة اللون الأبيض",
          }}
        />
        <Drawer.Screen
          name="LightMetering"
          options={{
            drawerLabel: "مقياس الضوء",
            title: "مقياس الضوء",
          }}
        />
        <Drawer.Screen
          name="CameraFocus"
          options={{
            drawerLabel: "التركيز و خصائصه",
            title: "التركيز و خصائصه",
          }}
        />
        <Drawer.Screen
          name="CameraFlash"
          options={{
            drawerLabel: "فلاش الكاميرا",
            title: "فلاش الكاميرا",
          }}
        />
        <Drawer.Screen
          name="CameraLenses"
          options={{
            drawerLabel: "عدسات الكاميرا",
            title: "عدسات الكاميرا",
          }}
        />
        <Drawer.Screen
          name="LightRoom"
          options={{
            drawerLabel: "معالجة الصور ببرنامج لايت روم",
            title: "معالجة الصور ببرنامج لايت روم",
          }}
        />
        <Drawer.Screen
          name="PhotographySpecializations"
          options={{
            drawerLabel: "محاور التصوير الفوتوغرافي",
            title: "محاور التصوير الفوتوغرافي",
          }}
        />
        <Drawer.Screen
          name="LandscapePhotography"
          options={{
            drawerLabel: "تصوير الطبيعة",
            title: "تصوير الطبيعة",
          }}
        />

        <Drawer.Screen
          name="NightPhotography"
          options={{
            drawerLabel: "التصوير الليلي",
            title: "التصوير الليلي",
          }}
        />
        <Drawer.Screen
          name="ArchitecturePhotography"
          options={{
            drawerLabel: "التصوير المعماري",
            title: "التصوير المعماري",
          }}
        />

        <Drawer.Screen
          name="PortraitPhotography"
          options={{
            drawerLabel: "تصوير البورتريت",
            title: "تصوير البورتريت",
          }}
        />
        <Drawer.Screen
          name="PhotoJournalist"
          options={{
            drawerLabel: "التصوير الصحفي",
            title: "التصوير الصحفي",
          }}
        />
        <Drawer.Screen
          name="SportsPhotography"
          options={{
            drawerLabel: "تصوير الرياضة",
            title: "تصوير الرياضة",
          }}
        />
        <Drawer.Screen
          name="AnimalsPhotography"
          options={{
            drawerLabel: "تصوير الحيوانات",
            title: "تصوير الحيوانات",
          }}
        />
        <Drawer.Screen
          name="FlowersPhotography"
          options={{
            drawerLabel: "تصوير الزهور",
            title: "تصوير الزهور",
          }}
        />
        <Drawer.Screen
          name="FinalWords"
          options={{
            drawerLabel: "كلمة أخيرة",
            title: "كلمة أخيرة",
          }}
        />
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
