import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileSection() {
  return (
    <>
      {/* Header con color sólido */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mi perfil</Text>
      </View>

      {/* Avatar a la izquierda con info a la derecha */}
      <View style={styles.profileRow}>
        <View style={styles.avatarContainerRow}>
          <Image source={require("../img/ana.jpg")} style={styles.avatar} />
        </View>
        <View style={styles.infoContainerRow}>
          <Text style={styles.nombre}>Ana Sanchez</Text>
          <Text style={styles.profesion}>Desarrolladora</Text>
        </View>
      </View>

      {/* Info de contacto */}
      <View style={styles.contactCard}>
        <View style={styles.contactItem}>
          <Text style={styles.contactEmoji}>📧</Text>
          <Text style={styles.contactText}>anasanchezrivera62@gmail.com</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactEmoji}>📍</Text>
          <Text style={styles.contactText}>Bogotá, Colombia</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactEmoji}>🔗</Text>
          <Text style={styles.contactText}>https://github.com/AnaDev29</Text>
        </View>
      </View>

      {/* Sobre Mí */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Sobre Mí</Text>
        </View>
        <Text style={styles.bioText}>
          Soy una persona comprometida, con iniciativa y capacidad para
          adaptarme a diferentes proyectos. Disfruto aprender cosas nuevas,
          colaborar con otros para alcanzar buenos resultados y mantener siempre
          una visión enfocada en la calidad y la eficiencia del trabajo.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#5b21b6", // morado más cálido
    marginHorizontal: 20,
    borderRadius: 16,
    paddingHorizontal: 12,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#000000", // texto negro legible
    letterSpacing: 1,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: -50,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: "#ece7f6",
  },
  infoContainer: {
    alignItems: "center",
    marginTop: 12,
    paddingHorizontal: 20,
  },
  nombre: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 4,
  },
  profesion: {
    fontSize: 15,
    color: "#2b2b2b",
    fontWeight: "600",
  },
  contactCard: {
    backgroundColor: "#f3e8ff",
    marginHorizontal: 30,
    marginTop: 18,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  contactEmoji: {
    fontSize: 20,
    marginRight: 10,
  },
  contactText: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "500",
    textAlign: "center",
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 22,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -30,
    marginHorizontal: 20,
  },
  avatarContainerRow: {
    width: 140,
    alignItems: "flex-start",
  },
  infoContainerRow: {
    flex: 1,
    paddingLeft: 12,
    alignItems: "flex-start",
  },
  sectionHeader: {
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#5b21b6",
  },
  bioText: {
    fontSize: 15,
    color: "#1f2937",
    lineHeight: 22,
    textAlign: "center",
  },
});
