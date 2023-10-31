import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListaEquipos from "./ListaEquiposView";

export default function HeaderView({ equipos, equipoSeleccionado, onEquipoSeleccionado }) {
  return (
    <View style={styles.headerStyle}>
      <ListaEquipos equipos={equipos} equipoSeleccionado={equipoSeleccionado} onEquipoSeleccionado={onEquipoSeleccionado} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 100,
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "#2c3e50", // Color de fondo
    alignItems: "center",
    justifyContent: "space-between", // Alinear contenido verticalmente
    flexDirection: "row", // Muestra el contenido en horizontal
    paddingHorizontal: 20, // Espaciado interno horizontal
  },
});
