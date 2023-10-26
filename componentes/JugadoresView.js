import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const jugadores = ["Jugador 1.1", "Jugador 1.2", "Jugador 1.3", "Jugador 1.4", "Jugador 1.5"];

export default function BodyView() {
  return (
    <View style={styles.JugadoresStyle}>
      {jugadores.map((jugador)=>{
        return (<Text style={styles.textEquipoStyle}>{jugador}</Text>);
      })};

    </View>
  );
}

const styles = StyleSheet.create({
  textEquipoStyle: {
    fontSize: 30,
    borderColor: "black",
    borderWidth: 2,
    margin: 5,
    padding: 5,
    fontWeight: "bold",
  },
  JugadoresStyle: {
    borderColor: "black",
    borderWidth: 2,
    flexWrap: "wrap",
    padding: 5,
  },
});
