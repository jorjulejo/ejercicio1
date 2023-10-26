import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ListaEquipos from "./ListaEquiposView";

export default function HeaderView({ equipos, equipoSeleccionado, onEquipoSeleccionado }) {
  return (
    <View style={styles.headerStyle}>
      <ListaEquipos equipos={equipos} equipoSeleccionado={equipoSeleccionado} onEquipoSeleccionado={onEquipoSeleccionado} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 100,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    flexDirection: "row", // Muestra el contenido en horizontal
    flexWrap: "wrap",
    padding: 5,
  },
});
