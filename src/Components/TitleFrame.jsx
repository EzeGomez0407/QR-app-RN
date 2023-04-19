import { StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../theme";

export default function TitleFrame(props) {
  return (
    <View style={styles.fatherContainer}>
      <View style={styles.container}>
        <Text style={styles.textPrimary}>
          {props.text}{" "}
          {props.textResalt && (
            <Text style={styles.textResalt}>{props.textResalt}</Text>
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fatherContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // marginTop: 109,
    // marginBottom: 55,
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 80,
    justifyContent: "center",
  },
  textPrimary: {
    color: theme.colors.colorTextTitle,
    fontSize: theme.texts.fontSize.textHeader,
    textAlign: "center",
    fontFamily: theme.texts.fontFamily,
  },
  textResalt: {
    color: theme.colors.colorSpecial,
  },
});
