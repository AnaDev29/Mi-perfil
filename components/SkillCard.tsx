import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface SkillCardProps {
  emoji: string;
  nombre: string;
  nivel: string;
}

export default function SkillCard({ emoji, nombre, nivel }: SkillCardProps) {
  return (
    <View style={styles.skillCard}>
      <Text style={styles.skillEmoji}>{emoji}</Text>
      <View style={styles.skillInfo}>
        <Text style={styles.skillNombre}>{nombre}</Text>
        <Text style={styles.skillNivel}>{nivel}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  skillCard: {
    backgroundColor: "#f6f0ff",
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    justifyContent: "center",
  },
  skillEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
  skillInfo: {
    flex: 1,
    alignItems: "flex-start",
  },
  skillNombre: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3a0ca3",
    marginBottom: 4,
  },
  skillNivel: {
    fontSize: 13,
    color: "#111827",
  },
});
