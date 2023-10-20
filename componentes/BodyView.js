import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function BodyView() {
  return (
    <View style={styles.bodyStyle}>
    <View style={styles.JugadoresStyle}>
      <Text style={styles.textEquipoStyle}>Jugador 1.1</Text>
      <Text style={styles.textEquipoStyle}>Jugador 1.2</Text>
      <Text style={styles.textEquipoStyle}>Jugador 1.3</Text>
      <Text style={styles.textEquipoStyle}>Jugador 1.4</Text>
      <Text style={styles.textEquipoStyle}>Jugador 1.5</Text>
    </View>
    <View style={styles.bodyStyle}>
      <Image
        source={require("./assets/Endou_passing_the_ball.webp")}
        style={styles.image}
      ></Image>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
 
    bodyStyle: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        flexDirection: "row", // Muestra el contenido en horizontal
      },

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
  image: {
    flex: 1,
  },
});



