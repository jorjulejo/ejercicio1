import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ListaEquipos from "./ListaEquiposView";

export default function HeaderView({
  equipos,
  equipoSeleccionado,
  onEquipoSeleccionado,
  isWeb,
  toggleBodyVisibility, // Nueva prop para cambiar la visibilidad del cuerpo
}) {
  return (
    <View style={styles.headerStyle}>
      {isWeb ? (
        <ListaEquipos
          equipos={equipos}
          equipoSeleccionado={equipoSeleccionado}
          onEquipoSeleccionado={onEquipoSeleccionado}
        />
      ) : (
        <>
          <ListaEquipos
          equipos={equipos}
          equipoSeleccionado={equipoSeleccionado}
          onEquipoSeleccionado={onEquipoSeleccionado}
        />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 100,
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
});
