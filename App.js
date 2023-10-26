import { StyleSheet, Text, View, Image } from "react-native";
import HeaderView from "./componentes/HeaderView";
import BodyView from "./componentes/BodyView";
import FooterView from "./componentes/FooterView";
import React,{useState} from "react";


export default function App() {
 const equipos = {
  equipo1:[
    {nombre:"BULBASAUR",imagen:1},
    {nombre:"IVYSAUR",imagen:2},
    {nombre:"VENUSAUR",imagen:3},
    {nombre:"CHARMANDER",imagen:4},
    {nombre:"CHARMELEON",imagen:5}
  ]
  , equipo2:[
      {nombre:"CHARIZARD",imagen:6},
      {nombre:"SQUIRTLE",imagen:7},
      {nombre:"WARTORTLE",imagen:8},
      {nombre:"BLASTOISE",imagen:9},
      {nombre:"CATERPIE",imagen:10}
  ]

  ,equipo3:[
      {nombre:"METAPOD",imagen:11},
      {nombre:"BUTTERFREE",imagen:12},
      {nombre:"WEEDLE",imagen:13},
      {nombre:"KAKUNA",imagen:14},
      {nombre:"BEEDRILL",imagen:15}
  ]
  };


const[equipoSeleccionado,setEquipoSeleccionado] = useState("equipo1");
const[pokemonSeleccionado,setPokemonSeleccionado] = useState(0);

return (
  <View style={styles.container}>
    <HeaderView equipos={equipos} equipoSeleccionado={equipoSeleccionado} onEquipoSeleccionado={setEquipoSeleccionado}/>
    <BodyView equipos={equipos} equipoSeleccionado={equipoSeleccionado} pokemonSeleccionado={pokemonSeleccionado} setPokemonSeleccionado={setPokemonSeleccionado} />
    <FooterView/>
  </View>
);

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "black",
    borderWidth: 2,
  },
});
