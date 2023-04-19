import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../theme";

import BoxResource from "../Components/BoxResource";
import TitleFrame from "../Components/TitleFrame";

export default function ResourceSelect({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TitleFrame text="Ingresa tu " textResalt="Link" />
      <BoxResource
        type="URL"
        placeholder="URL..."
        navigation={navigation}
        btnBack
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colors.colorBackground,
  },
});
