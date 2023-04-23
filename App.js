import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import theme from "./src/theme";

// Componentes=============================================
import Footer from "./src/Components/Footer";
import NavBar from "./src/Components/NavBar";
import AppProvider from "./AppProvider";
// -------------------------------------------------------------

// Routes=================================================
import Main from "./src/Routes/Main";
import InputLink from "./src/Routes/InputLink";
import InputImage from "./src/Routes/InputImage";
import InputVideo from "./src/Routes/InputVideo";
import InputZip from "./src/Routes/InputZip";
import RouteDownloadQR from "./src/Routes/RouteDownloadQR";
// -----------------------------------------------------------

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato: require("./assets/fonts/Lato-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <AppProvider>
      <RootSiblingParent>
        <NavigationContainer
          style={styles.container}
          onLayout={onLayoutRootView}
        >
          <NavBar />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Main} />
            <Stack.Screen name="input-link" component={InputLink} />
            <Stack.Screen name="input-image" component={InputImage} />
            <Stack.Screen name="input-video" component={InputVideo} />
            <Stack.Screen name="input-zip" component={InputZip} />
            <Stack.Screen name="DownloadQR" component={RouteDownloadQR} />
          </Stack.Navigator>
          <Footer />
          <StatusBar
            style="inverted"
            backgroundColor="#084B68"
            hidden={false}
            translucent={false}
          />
        </NavigationContainer>
      </RootSiblingParent>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
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
