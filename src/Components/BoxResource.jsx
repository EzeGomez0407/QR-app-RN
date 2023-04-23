import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useContext, useRef } from "react";
import * as DocumentPicker from "expo-document-picker";
import { isWebUri } from "valid-url";
import Toast from "react-native-root-toast";

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

export default function BoxResource({
  type,
  placeholder,
  btnBack,
  navigation,
}) {
  const { data, setData } = useContext(AppContext);
  const [urlForQR, setUrlForQR] = useState("");
  // const [fileForQR, setFileForQR] = useState();
  // const urlForQR = useRef(null);

  const handlerCleanField = () => {
    setUrlForQR("");
  };

  const handleTextoChange = (newUrl) => {
    currentText = newUrl;
    setUrlForQR(currentText);
  };

  const handlerNextToQR = () => {
    const link = urlForQR;
    console.log(link);
    const isValidLink = isWebUri(link);

    if (isValidLink) {
      setData({
        resource: link,
      });
      navigation.navigate("DownloadQR");
      // console.log(data);
      return;
    } else {
      Toast.show("Link no válido", {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        backgroundColor: "#ff3734",
        opacity: 1,
        textColor: "#fff",
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 500,
      });
      return;
    }
  };

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
          value={urlForQR}
          style={styles.inputText}
          placeholder={placeholder}
          onChangeText={handleTextoChange}
        />
      ) : (
        <TouchableOpacity style={styles.btnFileLoaded} onPress={pickDocument}>
          <Text>Cargar Archivo</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.btnCleanField}
        onPress={handlerCleanField}
      >
        <Text style={styles.textCleanField}>Limpiar Campo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => {
          handlerNextToQR();
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
  btnCleanField: {
    marginVertical: 20,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
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
  textCleanField: {
    fontSize: 11,
    color: "#e46a2a",
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
