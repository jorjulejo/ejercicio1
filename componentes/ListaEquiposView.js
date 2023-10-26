import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function EquipoView({ equipos, equipoSeleccionado, onEquipoSeleccionado }) {
  return (
    <View style={styles.EquiposStyle}>
      {Object.keys(equipos).map((nombreEquipo, index) => (
        <TouchableOpacity key={index} onPress={() => onEquipoSeleccionado(nombreEquipo)}>
          <Text style={[styles.textEquipoStyle, nombreEquipo === equipoSeleccionado ? styles.selectedNombreEquipo : null]}>
            {nombreEquipo}
          </Text>
        </TouchableOpacity>
      ))}
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
  selectedNombreEquipo: {
    backgroundColor: 'yellow',
  },
});
