import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function HeaderView() {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.textEquipoStyle}>Equipo 1</Text>
        <Text style={styles.textEquipoStyle}>Equipo 2</Text>
        <Text style={styles.textEquipoStyle}>Equipo 3</Text>
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

  textEquipoStyle: {
    fontSize: 30,
    borderColor: "black",
    borderWidth: 2,
    margin: 5,
    padding: 5,
    fontWeight: "bold",
  },
});
