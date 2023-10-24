import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import HeaderView from "./componentes/HeaderView";
import BodyView from "./componentes/BodyView";
import FooterView from "./componentes/FooterView";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderView></HeaderView>
      <BodyView></BodyView>
      <FooterView></FooterView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "black",
    borderWidth: 2,
  },
});
