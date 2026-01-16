import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ElementChoiceScreen from "./src/écrans/ElementChoiceScreen";
import AccueilScreen from "./src/écrans/AccueilScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ElementChoice">
        <Stack.Screen name="ElementChoice" component={ElementChoiceScreen} />
        <Stack.Screen name="Home" component={AccueilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

