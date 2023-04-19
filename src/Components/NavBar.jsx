import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Alert,
} from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import theme from "../theme";

export default function NavBar() {
  return (
    <View style={styles.viewBar}>
      <Text style={styles.text}>QR :D</Text>

      <TouchableNativeFeedback
        onPress={() => {
          alert(
            "Es un menu hamburguesa que mostrara las opciones para cambiar entre la pestaña de inicio y la de Sobre el proyecto"
          );
        }}
      >
        <Octicons name="three-bars" size={32} color={theme.colors.colorWhite} />
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.colorGeneral,
  },
  text: {
    fontFamily: theme.texts.fontFamily,
    color: theme.colors.colorWhite,
  },
});
