import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>فهرس المحتويات</Text>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "1" },
        }}
      >
        Chapter 1
      </Link>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "2" },
        }}
      >
        Chapter 2
      </Link>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "3" },
        }}
      >
        Chapter 3
      </Link>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "4" },
        }}
      >
        Chapter 4
      </Link>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "5" },
        }}
      >
        Chapter 5
      </Link>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "6" },
        }}
      >
        Chapter 6
      </Link>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "7" },
        }}
      >
        Chapter 7
      </Link>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "8" },
        }}
      >
        Chapter 8
      </Link>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "9" },
        }}
      >
        Chapter 9
      </Link>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "10" },
        }}
      >
        Chapter 10
      </Link>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "11" },
        }}
      >
        Chapter 11
      </Link>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "12" },
        }}
      >
        Chapter 12
      </Link>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "13" },
        }}
      >
        Chapter 13
      </Link>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "14" },
        }}
      >
        Chapter 14
      </Link>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "15" },
        }}
      >
        Chapter 15
      </Link>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "16" },
        }}
      >
        Chapter 16
      </Link>
      <Link
        href={{
          pathname: "/chapter/[id]",
          params: { id: "17" },
        }}
      >
        Chapter 17
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {},
});

export default Index;
