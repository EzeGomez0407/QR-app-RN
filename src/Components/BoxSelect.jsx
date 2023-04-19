import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import theme from "../theme";

export default function BoxSelect({ btnBack, navigation, children }) {
  return (
    <View style={styles.containerElection}>
      {btnBack && (
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.textBtnBack}>Atras</Text>
        </TouchableOpacity>
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  containerElection: {
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    width: 330,
    minHeight: 190,
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: theme.colors.colorWhite,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 40,
    elevation: 40,
  },
  btnBack: {
    position: "absolute",
    top: 10,
    left: 20,
  },
  textBtnBack: {
    fontSize: 12,
    borderBottomColor: "#000",
    borderBottomWidth: 0.6,
  },
});
