import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import TitleFrame from "../Components/TitleFrame";
import theme from "../theme";
// import { Link } from "react-router-native";

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <TitleFrame text="Elije que guardará tu" textResalt="QR" />

      <View style={styles.containerElection}>
        <View style={styles.parElection}>
          <TouchableOpacity
            onPress={() => navigation.navigate("input-link")}
            style={styles.touchElection}
            // underlayColor={"#435B8A"}
          >
            <Text style={styles.textElection}>Link</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("input-image")}
            style={styles.touchElection}
            // underlayColor={"#435B8A"}
          >
            <Text style={styles.textElection}>Image</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.parElection}>
          <TouchableOpacity
            onPress={() => navigation.navigate("input-video")}
            style={styles.touchElection}
            // underlayColor={"#435B8A"}
          >
            <Text style={styles.textElection}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("input-zip")}
            style={styles.touchElection}
            // underlayColor={"#435B8A"}
          >
            <Text style={styles.textElection}>Zip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colors.colorBackground,
  },
  containerElection: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 280,
    height: 194,
    paddingHorizontal: 20,
    paddingVertical: 40,
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
  touchElection: {
    alignItems: "center",
    width: 102,
    paddingVertical: 5,
    borderRadius: 30,
    backgroundColor: theme.colors.colorSpecial,
  },
  parElection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textElection: {
    color: theme.colors.colorWhite,
  },
});
