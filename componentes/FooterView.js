import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FooterView() {
  return (
    <View style={styles.footerStyle}>
      <Text style={styles.textFooterStyle}>www.equipo.com</Text>
      <Text style={styles.textFooterStyle}>123456789</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerStyle: {
    height: 100,
    borderColor: "white",
    borderWidth: 2,
    alignItems: "center",
    flexDirection: "row", // Muestra el contenido en horizontal
    justifyContent: "space-between",
    flexWrap: "wrap",
    backgroundColor: "#f0f0f0", // Color de fondo
    padding: 10,

    backgroundColor: "#2c3e50", // Color de fondo
  },
  textFooterStyle: {
    fontSize: 20, 
    borderColor: "white",
    borderWidth: 2,
    padding: 5,
    fontWeight: "bold",
    color: "white",
    
  },
});
