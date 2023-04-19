import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useContext } from "react";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";

import { AppContext } from "../../AppContext";
import theme from "../theme";

const pickDocument = async (setData) => {
  try {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.type === "success") {
      console.log(
        "URI: ",
        result.uri,
        "Name of File: ",
        result.name,
        "Type: ",
        result.type,
        "Size: ",
        result.size
      );
    } else {
      console.log("File selection canceled");
    }
  } catch (error) {
    console.log("File selection failed: ", error);
  }
};

// Funcion en la que llamamos a la API generadora de QR=============
const QRProcess = (setData, url) => {
  setData({ result: null, value: url });
};
// --------------------------------------------------------------

export default function BoxResource({
  type,
  placeholder,
  btnBack,
  navigation,
}) {
  const { data, setData } = useContext(AppContext);
  const [urlForQR, setUrlForQR] = useState("");
  const [fileForQR, setFileForQR] = useState();

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
      {type === "URL" ? (
        <TextInput
          style={styles.inputText}
          value={urlForQR}
          placeholder={placeholder}
          onChangeText={setUrlForQR}
        />
      ) : (
        <TouchableOpacity style={styles.btnFileLoaded} onPress={pickDocument}>
          <Text>Cargar Archivo</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => {
          QRProcess(setData, "https://www3.animeflv.net/ver/dragon-ball-z-268");
          navigation.navigate("DownloadQR");
        }}
      >
        <Text style={styles.nextBtnText}>Siguiente</Text>
      </TouchableOpacity>
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
  nextBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1B59F9",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  nextBtnText: {
    color: "#ffffff",
    fontSize: 14,
  },
  inputText: {
    borderColor: "#222222",
    borderStyle: "solid",
    width: 260,
    borderWidth: 0.6,
    borderRadius: 6,
    paddingVertical: 3,
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 40,
    elevation: 10,
  },
  btnFileLoaded: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 40,
    elevation: 10,
  },
});
