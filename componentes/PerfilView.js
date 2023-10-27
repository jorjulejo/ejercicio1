import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function PerfilView({ pokemonSeleccionado }) {
  const jugadorSeleccionado = pokemonSeleccionado ? pokemonSeleccionado : { nombre: "BULBASAUR", imagen: "1" };

  return (
    <View style={styles.perfilStyle}>
      <Image
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${jugadorSeleccionado.imagen}.png` }} // Reemplaza "url_de_tu_servidor" con la URL real de tus imágenes.
        style={styles.imagenJugadorStyle}
      />
      <Text style={styles.textNombreStyle}>{jugadorSeleccionado.nombre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  perfilStyle: {
    flex: 1,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  imagenJugadorStyle: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  textNombreStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});
