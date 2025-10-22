import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import ProfileSection from "./components/ProfileSection";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  const habilidades = [
    { emoji: "⚛️", nombre: "React", nivel: "Básico" },
    { emoji: "🖌️", nombre: "CSS / TailwindCSS", nivel: "Básico" },
    { emoji: "🖥️", nombre: "HTML5", nivel: "Básico" },
    { emoji: "📱", nombre: "React Native", nivel: "Básico" },
    { emoji: "🧩", nombre: "Git y GitHub", nivel: "Básico" },
    { emoji: "⚙️,💭", nombre: "Node.js / Express", nivel: "Básico" },
    { emoji: "🗄️", nombre: "Bases de Datos (MongoDB / SQL)", nivel: "Básico" },
  ];

  const proyectos = [
    {
      emoji: "📆,⏰",
      titulo: "Glaminder",
      descripcion:
        "Glaminder es una plataforma web que permite a propietarios, empleados y clientes gestionar citas, servicios, personal y reportes de manera eficiente dentro de un entorno moderno y automatiza.",
      tags: ["Node.js", "React", "Vite", "Express.js"],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Sección de Perfil */}
      <ProfileSection />

      {/* Separador */}
      <View style={styles.separator} />

      {/* Sección de Habilidades */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Mis Habilidades</Text>
        </View>
        {habilidades.map((habilidad, index) => (
          <SkillCard
            key={index}
            emoji={habilidad.emoji}
            nombre={habilidad.nombre}
            nivel={habilidad.nivel}
          />
        ))}
      </View>

      {/* Separador */}
      <View style={styles.separator} />

      {/* Sección de Proyectos */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Mi Proyecto</Text>
        </View>
        {proyectos.map((proyecto, index) => (
          <ProjectCard
            key={index}
            emoji={proyecto.emoji}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            tags={proyecto.tags}
          />
        ))}
      </View>

      {/* Espaciado final */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf8ff",
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 22,
  },
  sectionHeader: {
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#5b21b6",
  },
  separator: {
    height: 1,
    backgroundColor: "#f6eaf6",
    marginHorizontal: 20,
    marginVertical: 25,
  },
});
