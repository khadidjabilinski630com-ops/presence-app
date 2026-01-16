import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ route, navigation }) {
  const { elementId } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Élément en cours</Text>
      <Text style={styles.title}>{(elementId || "").toUpperCase()}</Text>

      <Text style={styles.day}>Jour 1</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Practice", { elementId })}
      >
        <Text style={styles.buttonText}>Entrer dans la pratique</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0f14",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  subtitle: {
    color: "#9aa4b2",
    fontSize: 14,
    marginBottom: 8,
  },
  title: {
    color: "#ffffff",
    fontSize: 32,
    marginBottom: 16,
  },
  day: {
    color: "#ffffff",
    fontSize: 18,
    marginBottom: 32,
  },
  button: {
    borderWidth: 1,
    borderColor: "#ffffff",
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
