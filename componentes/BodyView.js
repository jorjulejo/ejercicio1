import React from "react";
import { StyleSheet, View, Platform, Dimensions } from "react-native"; // Importa Platform desde react-native
import Perfil from "./PerfilView";
import ListaJugadores from "./ListaJugadoresView";

// Detectar la plataforma (móvil o web)

export default function BodyView({
  equipos,
  equipoSeleccionado,
  pokemonSeleccionado,
  setPokemonSeleccionado,
  isWeb,
}) {
  const jugadoresDelEquipo = equipos[equipoSeleccionado] || [];

  return (
    <View
      style={[
        styles.bodyStyle,
        isWeb ? webStyles.bodyWeb : mobileStyles.bodyMobile,
      ]}
    >
      {isWeb ? (
        <>
          <ListaJugadores
            jugadores={jugadoresDelEquipo}
            pokemonSeleccionado={pokemonSeleccionado}
            setPokemonSeleccionado={setPokemonSeleccionado}
          />
          <Perfil pokemonSeleccionado={pokemonSeleccionado} />
        </>
      ) : (
        <>
          <Perfil pokemonSeleccionado={pokemonSeleccionado} />
          <ListaJugadores
            jugadores={jugadoresDelEquipo}
            pokemonSeleccionado={pokemonSeleccionado}
            setPokemonSeleccionado={setPokemonSeleccionado}
          />
        </>
      )}
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

const webStyles = StyleSheet.create({
  bodyWeb: {
    flexDirection: "row",
  },
});

const mobileStyles = StyleSheet.create({
  bodyMobile: {
    flexDirection: "column",
  },
});
