import "react-native-gesture-handler"
import React from "react";
import { NavigationContainer } from "@react-navigation/native"


// Rotas
import Routes from "./src/routes";

// Component - Dentro do Return escrevemos um JSX (JS + HTML)
export default function App() {
  return (

    <NavigationContainer>
      <Routes />
    </NavigationContainer>

  )
}