
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ElementChoiceScreen from "./src/screens/ElementChoiceScreen";
import HomeScreen from "./src/screens/HomeScreen";
import PracticeScreen from "./src/screens/PracticeScreen";
import BilanScreen from "./src/screens/BilanScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="ElementChoice"
          component={ElementChoiceScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Practice"
          component={PracticeScreen}
        />
        <Stack.Screen
          name="Bilan"
          component={BilanScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

