import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function ListaEquiposView({ equipos, equipoSeleccionado, onEquipoSeleccionado }) {

  const [hoveredEquipo, setHoveredEquipo] = useState(null);

  const handleEquipoPressIn = () => {
    setIsHovered(true);
  };

  const handleEquipoPressOut = () => {
    setIsHovered(false);
  };
  return (
    <View style={styles.equiposContainer}>
      {Object.keys(equipos).map((nombreEquipo, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onEquipoSeleccionado(nombreEquipo)}
          onMouseEnter={() => setHoveredEquipo(nombreEquipo)}
          onMouseLeave={() => setHoveredEquipo(null)}
          style={[
            styles.equipoItem,
            nombreEquipo === hoveredEquipo ? styles.hoveredEquipo : null,
            nombreEquipo === equipoSeleccionado ? styles.selectedEquipo : null,
          ]}
        >
          <Text style={styles.textEquipo}>{nombreEquipo}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  equiposContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: 10,
  },
  equipoItem: {
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
    margin: 10,
    padding: 10,
    backgroundColor: "#2c3e50", // Color de fondo predeterminado
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  selectedEquipo: {
    backgroundColor: "#0017FF", // Color de fondo para el equipo seleccionado
  },
  textEquipo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  hoveredEquipo: {
    backgroundColor: "#B5B5B5", // Color de fondo en "hover"
  },
});
