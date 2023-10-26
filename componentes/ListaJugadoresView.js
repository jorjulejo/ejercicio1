import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import JugadoresView from "./JugadoresView";

export default function ListaJugadoresView({ jugadores, setPokemonSeleccionado }) {
  return (
    <View style={styles.listaJugadoresStyle}>
      <ScrollView>
        {jugadores.map((jugador, index) => (
          <JugadoresView key={index} jugador={jugador} setPokemonSeleccionado={setPokemonSeleccionado} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  listaJugadoresStyle: {
    flex: 1,
    borderColor: "black",
    borderWidth: 2,
  },
});
