import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const ModificarTextos = () => {
  const [texto1, setTexto1] = useState('Texto 1');
  const [texto2, setTexto2] = useState('Texto 2');
  const [texto3, setTexto3] = useState('Texto 3');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modificar Textos</Text>
      
      <View style={styles.textContainer}>
        <Text style={styles.textDisplay}>{texto1}</Text>
        <TextInput
          style={styles.input}
          value={texto1}
          onChangeText={setTexto1}
          placeholder="Modifica el texto 1"
          placeholderTextColor="#999999"
        />
      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.textDisplay}>{texto2}</Text>
        <TextInput
          style={styles.input}
          value={texto2}
          onChangeText={setTexto2}
          placeholder="Modifica el texto 2"
          placeholderTextColor="#999999"
        />
      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.textDisplay}>{texto3}</Text>
        <TextInput
          style={styles.input}
          value={texto3}
          onChangeText={setTexto3}
          placeholder="Modifica el texto 3"
          placeholderTextColor="#999999"
        />
      </View>
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
  textContainer: {
    marginBottom: 15,
  },
  textDisplay: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: '500',
    color: '#333333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    color: '#333333',
  },
});

export default ModificarTextos; 