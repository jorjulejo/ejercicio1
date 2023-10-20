import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.textEquipoStyle}>Equipo 1</Text>
        <Text style={styles.textEquipoStyle}>Equipo 2</Text>
        <Text style={styles.textEquipoStyle}>Equipo 3</Text>
      </View>
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
      <View style={styles.footerStyle}>
        <Text style={styles.textFooterStyle}>www.equipo.com</Text>
        <Text style={styles.textFooterStyle}>123456789</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "black",
    borderWidth: 2,
  },
  headerStyle: {
    height: 100,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    flexDirection: "row", // Muestra el contenido en horizontal
    flexWrap: "wrap",
    padding: 5,
  },
  bodyStyle: {
    flex: 1,
    borderColor: "black",
    borderWidth: 2,
    flexDirection: "row", // Muestra el contenido en horizontal
  },
  footerStyle: {
    height: 100,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    flexDirection: "row", // Muestra el contenido en horizontal
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  textEquipoStyle: {
    fontSize: 30,
    borderColor: "black",
    borderWidth: 2,
    margin: 5,
    padding: 5,
    fontWeight: "bold",
  },
  textFooterStyle: {
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
