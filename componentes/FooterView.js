import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function FooterView() {
  return (
   
      <View style={styles.footerStyle}>
        <Text style={styles.textFooterStyle}>www.equipo.com</Text>
        <Text style={styles.textFooterStyle}>123456789</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  footerStyle: {
    height: 100,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    flexDirection: "row", // Muestra el contenido en horizontal
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  textFooterStyle: {
    fontSize: 30,
    borderColor: "black",
    borderWidth: 2,
    margin: 5,
    padding: 5,
    fontWeight: "bold",
  },
});
