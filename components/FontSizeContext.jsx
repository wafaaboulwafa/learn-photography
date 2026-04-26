import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@learn-photography/fontSize";
const STEPS = ["small", "medium", "large", "xlarge"];

const SCALE = {
  small: 0.85,
  medium: 1,
  large: 1.2,
  xlarge: 1.45,
};

const FontSizeContext = createContext({
  size: "medium",
  scale: 1,
  ready: false,
  cycle: () => {},
});

export const FontSizeProvider = ({ children }) => {
  const [size, setSize] = useState("medium");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((stored) => {
        if (stored && STEPS.includes(stored)) setSize(stored);
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  useEffect(() => {
    if (!ready) return;
    AsyncStorage.setItem(STORAGE_KEY, size).catch(() => {});
  }, [size, ready]);

  const value = useMemo(
    () => ({
      size,
      scale: SCALE[size],
      ready,
      cycle: () =>
        setSize((s) => STEPS[(STEPS.indexOf(s) + 1) % STEPS.length]),
    }),
    [size, ready]
  );

  return (
    <FontSizeContext.Provider value={value}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => useContext(FontSizeContext);
