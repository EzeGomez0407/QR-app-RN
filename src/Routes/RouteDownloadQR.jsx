import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useContext } from "react";
import axios from "axios";

import BoxSelect from "../Components/BoxSelect";
import TitleFrame from "../Components/TitleFrame";
import { AppContext } from "../../AppContext";

import { downloadQRimgae, downloadQRpdf } from "../DownloadQRFunction";

export default function RouteDownloadQR({ navigation }) {
  const [img, setImg] = useState();
  const { data, setData } = useContext(AppContext);
  console.log(data);
  const qrImg = () => {
    axios
      .get(
        `http://api.qrserver.com/v1/create-qr-code/?data=${data.resource}&size=300x300`,
        {
          responseType: "blob",
        }
      )
      .then((response) => {
        const blob = new Blob([response.data], { type: "image/png" });
        const reader = new FileReader();
        reader.onload = () => {
          const url = reader.result;
          // console.log(url);
          setImg(url);
          // Utiliza la URL para mostrar la imagen en el componente Image
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  qrImg();

  // console.log(img);

  return (
    <View style={styles.contain}>
      <TitleFrame text="Descarga tu " textResalt="QR" />
      <Image style={styles.img} source={{ uri: img }} />
      <BoxSelect>
        <TouchableOpacity
          style={styles.btnOption}
          onPress={() => downloadQRimgae(img)}
        >
          <Text style={styles.btnOptionText}>Guardar como Imagen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnOption}
          onPress={() => downloadQRpdf(img)}
        >
          <Text style={styles.btnOptionText}>Guardar como PDF</Text>
        </TouchableOpacity>
      </BoxSelect>
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btnOption: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1B59F9",
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 12,
  },
  btnOptionText: {
    color: "#ffffff",
    fontSize: 14,
  },
  img: {
    width: 70,
    height: 70,
  },
});
