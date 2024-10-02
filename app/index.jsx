import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>فهرس المحتويات</Text>
      <Link
        href={{
          pathname: "AuthorIntro",
        }}
      >
        مقدمة الكاتب
      </Link>
      <Link
        href={{
          pathname: "IntroToPhotography",
        }}
      >
        مقدمة في التصوير
      </Link>
      <Link
        href={{
          pathname: "Composition",
        }}
      >
        تكوين الصورة
      </Link>
      <Link
        href={{
          pathname: "LightProperties",
        }}
      >
        خصائص الضوء و أنواعه
      </Link>
      <Link
        href={{
          pathname: "ExposureTriangle",
        }}
      >
        مثلث التعريض الضوئي
      </Link>
      <Link
        href={{
          pathname: "WhiteBalance",
        }}
      >
        موازنة اللون الأبيض
      </Link>
      <Link
        href={{
          pathname: "LightMetering",
        }}
      >
        مقياس الضوء
      </Link>
      <Link
        href={{
          pathname: "CameraFocus",
        }}
      >
        التركيز و خصائصه
      </Link>
      <Link
        href={{
          pathname: "CameraFlash",
        }}
      >
        فلاش الكاميرا
      </Link>
      <Link
        href={{
          pathname: "CameraLenses",
        }}
      >
        عدسات الكاميرا
      </Link>
      <Link
        href={{
          pathname: "LightRoom",
        }}
      >
        معالجة الصور ببرنامج لايت روم
      </Link>
      <Link
        href={{
          pathname: "PhotographySpecializations",
        }}
      >
        محاور التصوير الفوتوغرافي
      </Link>
      <Link
        href={{
          pathname: "LandscapePhotography",
        }}
      >
        تصوير الطبيعة
      </Link>
      <Link
        href={{
          pathname: "NightPhotography",
        }}
      >
        التصوير الليلي
      </Link>

      <Link
        href={{
          pathname: "ArchitecturePhotography",
        }}
      >
        التصوير المعماري
      </Link>
      <Link
        href={{
          pathname: "PortraitPhotography",
        }}
      >
        تصوير البورتريت
      </Link>
      <Link
        href={{
          pathname: "PhotoJournalist",
        }}
      >
        التصوير الصحفي
      </Link>
      <Link
        href={{
          pathname: "SportsPhotography",
        }}
      >
        تصوير الرياضة
      </Link>
      <Link
        href={{
          pathname: "AnimalsPhotography",
        }}
      >
        تصوير الحيوانات
      </Link>
      <Link
        href={{
          pathname: "FlowersPhotography",
        }}
      >
        تصوير الزهور
      </Link>
      <Link
        href={{
          pathname: "FinalWords",
        }}
      >
        كلمة أخيرة
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Index;
