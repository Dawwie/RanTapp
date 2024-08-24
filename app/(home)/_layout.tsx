import { useBackgroundColor } from "@/contexts/BackgroundColorProvider";
import { useRandomColor } from "@/hooks/useRandomColor";
import React from "react";

import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export default function TabLayout() {
  const { backgroundColor, setBackgroundColor } = useBackgroundColor();
  const { randomRGBColor, randomRGBColorText } = useRandomColor();
  const textColorStyle = { color: randomRGBColorText };

  const onPageClick = () => {
    setBackgroundColor(randomRGBColor);
  };

  return (
    <TouchableOpacity onPress={onPageClick} style={styles.container}>
      {!!backgroundColor ? (
        <View style={[styles.container, { backgroundColor }]}>
          <Text style={textColorStyle}>Hello there!</Text>
          <View style={styles.colorText}>
            <Text style={textColorStyle}>{backgroundColor}</Text>
          </View>
        </View>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  colorText: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});
