import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CambiarFondo = () => {
  const [colorFondo, setColorFondo] = useState('#ffffff');

  const cambiarColor = () => {
    // Generar un color aleatorio
    const nuevoColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColorFondo(nuevoColor);
  };

  return (
    <View style={[styles.container, { backgroundColor: colorFondo }]}>
      <Text style={styles.title}>Cambiar Color de Fondo</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={cambiarColor}
      >
        <Text style={styles.buttonText}>Cambiar Color</Text>
      </TouchableOpacity>
      <Text style={styles.colorText}>Color actual: {colorFondo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#222222',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  colorText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
});

export default CambiarFondo; 