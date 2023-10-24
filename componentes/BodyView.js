import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Perfil from "./PerfilView";
import ListaJugadores from "./ListaJugadoresView";

export default function BodyView() {
  return (
    <View style={styles.bodyStyle}>
      <ListaJugadores></ListaJugadores>
      <Perfil></Perfil>
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
});
