import { StyleSheet, Text, View } from "react-native";
import React from "react";

import TitleFrame from "../Components/TitleFrame";
import BoxResource from "../Components/BoxResource";

export default function InputImage({ navigation }) {
  return (
    <View style={styles.contain}>
      <TitleFrame text="Ingresa tu " textResalt="Imagen" />
      <BoxResource btnBack navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
