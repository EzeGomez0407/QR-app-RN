import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import QRCode from "react-native-qrcode-svg";
import axios from "axios";
import { AppContext } from "../../AppContext";
import BoxSelect from "../Components/BoxSelect";
import TitleFrame from "../Components/TitleFrame";

// import RNFetchBlob from "rn-fetch-blob";

import { downloadQRimgae } from "../DownloadQRFunction";

export default function RouteDownloadQR({ navigation }) {
  const [img, setImg] = useState();

  const qrImg = () => {
    axios
      .get(
        "http://api.qrserver.com/v1/create-qr-code/?data=https://www3.animeflv.net/ver/dragon-ball-z-268&size=300x300",
        {
          responseType: "blob",
        }
      )
      .then((response) => {
        const blob = new Blob([response.data], { type: "image/png" });
        const reader = new FileReader();
        reader.onload = () => {
          const url = reader.result;
          console.log(url);
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
      <BoxSelect>
        <Image style={styles.img} source={{ uri: img }} />
        <TouchableOpacity
          style={styles.btnOption}
          onPress={() => downloadQRimgae(img)}
        >
          <Text style={styles.btnOptionText}>Guardar</Text>
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
    width: 50,
    height: 50,
  },
});
