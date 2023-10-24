import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function BodyView() {
  return (
    <View style={styles.bodyStyle}>
      <Image
        style={styles.image}
        source={require("../assets/Endou_passing_the_ball.webp")}
      ></Image>
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

  image: {
    flex: 1,
  },
});
