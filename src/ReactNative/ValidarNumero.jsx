import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const ValidarNumero = () => {
  const [numero, setNumero] = useState('0');
  const [esMayor, setEsMayor] = useState(false);

  const validarNumero = (valor) => {
    const num = parseInt(valor);
    setNumero(valor);
    setEsMayor(!isNaN(num) && num > 10);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Validar Número</Text>
      
      <TextInput
        style={styles.input}
        value={numero}
        onChangeText={validarNumero}
        keyboardType="numeric"
        placeholder="Introduce un número"
        placeholderTextColor="#999999"
      />
      
      <Text style={[
        styles.resultText,
        { color: esMayor ? '#00a000' : '#e00000' }
      ]}>
        {esMayor 
          ? `El número ${numero} es mayor que 10`
          : `El número ${numero} NO es mayor que 10`
        }
      </Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
    color: '#333333',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  }
});

export default ValidarNumero; 