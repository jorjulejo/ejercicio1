import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function JugadoresView({ jugador, setPokemonSeleccionado }) {
  const handleJugadorClick = () => {
    
    setPokemonSeleccionado(jugador);
  };

  return (
    <TouchableOpacity onPress={handleJugadorClick}>
      <View style={styles.jugadorStyle}>
        <Text style={styles.textNombreStyle}>{jugador.nombre}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  jugadorStyle: {
    borderColor: "black",
    borderWidth: 2,
    margin: 5,
    padding: 5,
  },
  textNombreStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
