// import { View } from "react-native";
import React, { useState } from "react";
import { AppContext } from "./AppContext";

export default function AppProvider({ children }) {
  const [data, setData] = useState({ resource: null });

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}
