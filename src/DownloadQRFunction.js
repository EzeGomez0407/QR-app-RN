import * as FileSystem from "expo-file-system";

export async function downloadQRimgae(img) {
  const blob = img.split("data:image/png;base64,")[1];
  //   console.log(blob);
  const nombreArchivo = `QR_${Date.now()}.png`;
  const rutaCarpeta = `${FileSystem.documentDirectory}YourQR/`;

  console.log(FileSystem.documentDirectory);

  try {
    const infoCarpeta = await FileSystem.getInfoAsync(rutaCarpeta);
    if (!infoCarpeta.exists) {
      await FileSystem.makeDirectoryAsync(rutaCarpeta, { intermediates: true });
    }
    await FileSystem.writeAsStringAsync(
      `${rutaCarpeta}${nombreArchivo}`,
      blob,
      {
        encoding: FileSystem.EncodingType.Base64,
      }
    );
    // ================================================
    // const archivo = await FileSystem.readAsStringAsync(
    //   `${rutaCarpeta}${nombreArchivo}`
    // );
    // console.log("Contenido del archivo:", archivo);

    // console.log("QR guardado exitosamente.");
  } catch (error) {
    console.error("Error al guardar el QR:", error);
  }
}

// ...

/* export const saveImage = async () => {

    try {
        const rootPath = Platform.OS === 'android' ? RNFetchBlob.fs.dirs.SDCardDir : RNFetchBlob.fs.dirs.DocumentDir;
      const folderPath = `${rootPath}/QR`;

      const dirExists = await RNFS.exists(
        `${RNFS.DocumentDirectoryPath}/Your codeQR`
      );
    
      if (!dirExists) {
        await RNFS.mkdir(`${RNFS.DocumentDirectoryPath}/Your codeQR`);
      }
    
      const filePath = `${RNFS.DocumentDirectoryPath}/Your codeQR/qr-image.png`;
      await RNFS.writeFile(filePath, blob, "base64");
    
      const exists = await RNFS.exists(filePath);
      if (exists) {
        console.log("Image saved successfully");
      } else {
        console.log("Failed to save image");
      }
    } catch (error) {
        
    }

};
const createFolder = async () => {
    try {
      
  
      // Revisar si la carpeta existe, si no existe, crearla
      const isExist = await RNFetchBlob.fs.isDir(folderPath);
      if (!isExist) {
        await RNFetchBlob.fs.mkdir(folderPath);
        console.log('Carpeta creada:', folderPath);
      } else {
        console.log('La carpeta ya existe:', folderPath);
      }
    } catch (error) {
      console.log('Error al crear la carpeta:', error);
    }
  }
  
  createFolder(); */
