import React from "react";
import { StyleSheet, View } from "react-native";
import Perfil from "./PerfilView";
import ListaJugadores from "./ListaJugadoresView";

export default function BodyView({ equipos, equipoSeleccionado, pokemonSeleccionado, setPokemonSeleccionado }) {
  const jugadoresDelEquipo = equipos[equipoSeleccionado] || [];

  return (
    <View style={styles.bodyStyle}>
      <ListaJugadores jugadores={jugadoresDelEquipo} pokemonSeleccionado={pokemonSeleccionado} setPokemonSeleccionado={setPokemonSeleccionado} />
      <Perfil pokemonSeleccionado={pokemonSeleccionado} />
    </View>
  );
}

const styles = StyleSheet.create({
  bodyStyle: {
    flex: 1,
    borderColor: "white",
    borderWidth: 2,
    flexDirection: "row",
    backgroundColor: "#2c3e50", // Color de fondo
    shadowColor: "#000", // Color de la sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Elevación para sombra en Android
  },
});
