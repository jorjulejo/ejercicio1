import React from "react";
import { StyleSheet, View } from "react-native";
import Perfil from "./PerfilView";
import ListaJugadores from "./ListaJugadoresView";

export default function BodyView({ equipos, equipoSeleccionado, pokemonSeleccionado, setPokemonSeleccionado }) {
  const jugadoresDelEquipo = equipos[equipoSeleccionado] || [];

  return (
    <View style={styles.bodyStyle}>
      <ListaJugadores jugadores={jugadoresDelEquipo} setPokemonSeleccionado={setPokemonSeleccionado} />
      <Perfil pokemonSeleccionado={pokemonSeleccionado} />
    </View>
  );
}

const styles = StyleSheet.create({
  bodyStyle: {
    flex: 1,
    borderColor: "black",
    borderWidth: 2,
    flexDirection: "row",
  },
});
