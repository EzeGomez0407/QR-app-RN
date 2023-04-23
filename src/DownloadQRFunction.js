import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import * as Print from "expo-print";

import Toast from "react-native-root-toast";

export async function downloadQRimgae(img) {
  const blob = img.split("data:image/png;base64,")[1];
  const nombreArchivo = `QR_${Date.now()}.png`;
  const rutaCarpeta = FileSystem.documentDirectory + "Download/";
  const { status } = await MediaLibrary.requestPermissionsAsync();

  if (status === "granted") {
    try {
      const infoCarpeta = await FileSystem.getInfoAsync(rutaCarpeta);
      if (!infoCarpeta.exists) {
        await FileSystem.makeDirectoryAsync(rutaCarpeta, {
          intermediates: true,
        });
      }

      const filePath = `${rutaCarpeta}${nombreArchivo}`;
      await FileSystem.writeAsStringAsync(filePath, blob, {
        encoding: FileSystem.EncodingType.Base64,
      });

      await MediaLibrary.saveToLibraryAsync(filePath);

      Toast.show("QR descargado con éxito", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.TOP,
        backgroundColor: "#37f88f",
        opacity: 1,
        textColor: "#000",
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 500,
      });

      console.log("QR guardado exitosamente.");
    } catch (error) {
      console.error("Error al guardar el QR:", error);
    }
  } else {
    console.log("No se han otorgado los permisos necesarios.");
  }
}

export async function downloadQRpdf(img) {
  const { status } = await MediaLibrary.requestPermissionsAsync();

  if (status === "granted") {
    try {
      const pdfContent = `
      <html>
        <head>
          <title>QR ${Date.now()}</title>
        </head>
        <body>
          <img src="${img}" style="width:400px;height:400px"/>
        </body>
      </html>
      `;

      const pdfDocument = await Print.printAsync({ html: pdfContent });

      const pdfBase64 = new Blob([pdfDocument], { type: "application/pdf" });

      console.log("QR guardado exitosamente.");
    } catch (error) {
      console.error("Error al guardar el QR:", error);
    }
  } else {
    console.log("No se han otorgado los permisos necesarios.");
  }
}
