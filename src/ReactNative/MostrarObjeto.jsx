import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MostrarObjeto = () => {
  const [mostrar, setMostrar] = useState(false);
  
  const persona = {
    nombre: "Juan Velez",
    edad: 20,
    profesion: "Desarrollador Software",
    hobbies: ["Estudiar", "Programar", "Leer"],
    direccion: {
      calle: "Calle Principal 123",
      ciudad: "Bogota",
      pais: "Colombia"
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mostrar Datos de Objeto</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => setMostrar(!mostrar)}
      >
        <Text style={styles.buttonText}>
          {mostrar ? 'Ocultar Datos' : 'Mostrar Datos'}
        </Text>
      </TouchableOpacity>
      
      {mostrar && (
        <View style={styles.infoContainer}>
          <Text style={styles.subtitle}>Información de la Persona:</Text>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Nombre: </Text>
            {persona.nombre}
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Edad: </Text>
            {persona.edad}
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Profesión: </Text>
            {persona.profesion}
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Hobbies: </Text>
            {persona.hobbies.join(', ')}
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Dirección: </Text>
            {persona.direccion.calle}, {persona.direccion.ciudad}, {persona.direccion.pais}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
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
  infoContainer: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222222',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333333',
    lineHeight: 22,
  },
  label: {
    fontWeight: 'bold',
    color: '#222222',
  }
});

export default MostrarObjeto; 