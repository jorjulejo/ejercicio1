import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
const equipos = ["Equipo 1", "Equipo 2", "Equipo 3"];

export default function EquipoView() {
  
  return (
    <View style={styles.EquiposStyle}>
      {equipos.map((equipo)=>{
        return (<Text style={styles.textEquipoStyle}>{equipo}</Text>);
      })};
    </View>
  );
}

const styles = StyleSheet.create({
  EquiposStyle: {
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
