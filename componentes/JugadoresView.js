import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native-web";

export default function JugadoresView({ jugador, pokemonSeleccionado, setPokemonSeleccionado }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleJugadorClick = () => {
    setPokemonSeleccionado(jugador);
  };

  const handleJugadorPressIn = () => {
    setIsHovered(true);
  };

  const handleJugadorPressOut = () => {
    setIsHovered(false);
  };

  return (
    <TouchableOpacity
      onPress={handleJugadorClick}
      onMouseEnter={handleJugadorPressIn}
      onMouseLeave={handleJugadorPressOut}
      
      style={[
        styles.jugadorItem,
        isHovered ? styles.hoveredJugador : null,
        jugador.nombre === pokemonSeleccionado.nombre ? styles.selectedJugador : null,
      ]}
    >
      <View style={styles.jugadorContent}>
        <Text style={styles.textNombreStyle}>{jugador.nombre}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  jugadorItem: {
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
    margin: 5,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  selectedJugador: {
    backgroundColor: "#0017FF", // Color de fondo para el jugador seleccionado
  },
  hoveredJugador: {
    backgroundColor: "#B5B5B5", // Color de fondo en "hover"
  },
  jugadorContent: {
    alignItems: "center",
  },
  textNombreStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
