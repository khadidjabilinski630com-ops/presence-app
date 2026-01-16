import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ELEMENTS = [
  { id: "feu", label: "Feu", subtitle: "Colère, affirmation" },
  { id: "eau", label: "Eau", subtitle: "Tristesse, attachement" },
  { id: "air", label: "Air", subtitle: "Peur, clarté mentale" },
  { id: "terre", label: "Terre", subtitle: "Fatigue, incarnation" },
  { id: "ether", label: "Éther", subtitle: "Sens, silence" },
];

export default function ElementChoiceScreen({ navigation }) {
  const chooseElement = (elementId) => {
    navigation.replace("Home", { elementId });
  };

  const drawRandom = () => {
    const random =
      ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
    chooseElement(random.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Par où commencer</Text>

      {ELEMENTS.map((el) => (
        <TouchableOpacity
          key={el.id}
          style={styles.card}
          onPress={() => chooseElement(el.id)}
        >
          <Text style={styles.cardTitle}>{el.label}</Text>
          <Text style={styles.cardSubtitle}>{el.subtitle}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.draw} onPress={drawRandom}>
        <Text style={styles.drawText}>🎲 Tirage</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0f14",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 26,
    textAlign: "center",
    marginBottom: 32,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ffffff",
    padding: 16,
    marginBottom: 12,
  },
  cardTitle: {
    color: "#ffffff",
    fontSize: 18,
  },
  cardSubtitle: {
    color: "#9aa4b2",
    fontSize: 14,
    marginTop: 4,
  },
  draw: {
    marginTop: 24,
    alignItems: "center",
  },
  drawText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
