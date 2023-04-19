import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import theme from "../theme";

export default function Footer() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Alert.alert("Redirije a la red social")}>
        <Text style={styles.texts}>LinkedIn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert("Redirije a la red social")}>
        <Text style={styles.texts}>Twitter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert("Redirije a la red social")}>
        <Text style={styles.texts}>Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert("Redirije a la red social")}>
        <Text style={styles.texts}>GitHub</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: 60,
    backgroundColor: theme.colors.colorSecundary,
  },
  texts: {
    color: theme.colors.colorWhite,
    fontSize: theme.texts.fontSize.textFooter,
  },
});
