import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Platform } from "react-native";
import HeaderView from "./componentes/HeaderView";
import BodyView from "./componentes/BodyView";
import FooterView from "./componentes/FooterView";

export default function App() {
  const { height, width } = Dimensions.get("window");
  const [isWeb, setIsWeb] = useState(Platform.OS === "web" && width > 700);

  const equipos = {
    Gen1: [
      { nombre: "BULBASAUR", imagen: 1 },
      { nombre: "CHARMANDER", imagen: 4 },
      { nombre: "SQUIRTLE", imagen: 7 },
      { nombre: "PIKACHU", imagen: 25 },
      { nombre: "EEVEE", imagen: 133 },
    ],
    Gen2: [
      { nombre: "CHIKORITA", imagen: 152 },
      { nombre: "CYNDAQUIL", imagen: 155 },
      { nombre: "TOTODILE", imagen: 158 },
      { nombre: "LUGIA", imagen: 249 },
      { nombre: "HO-OH", imagen: 250 },
    ],
    Gen3: [
      { nombre: "TREECKO", imagen: 252 },
      { nombre: "TORCHIC", imagen: 255 },
      { nombre: "MUDKIP", imagen: 258 },
      { nombre: "KYOGRE", imagen: 382 },
      { nombre: "GROUDON", imagen: 383 },
    ],
  };

  const [equipoSeleccionado, setEquipoSeleccionado] = useState("Gen1");
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(equipos.Gen1[0]);

  const updateDimensions = () => {
    const { height, width } = Dimensions.get("window");
    setIsWeb(Platform.OS === "web" && width > 700);
  };

  useEffect(() => {
    Dimensions.addEventListener("change", updateDimensions);
    return () => {
      Dimensions.removeEventListener("change", updateDimensions);
    };
  }, []);

  return (
    <View style={styles.container}>
      <HeaderView
        equipos={equipos}
        equipoSeleccionado={equipoSeleccionado}
        onEquipoSeleccionado={setEquipoSeleccionado}
        isWeb={isWeb}
      />
      <BodyView
        equipos={equipos}
        equipoSeleccionado={equipoSeleccionado}
        pokemonSeleccionado={pokemonSeleccionado}
        setPokemonSeleccionado={setPokemonSeleccionado}
        isWeb={isWeb}
      />
      <FooterView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "white",
    borderWidth: 2,
  },
});