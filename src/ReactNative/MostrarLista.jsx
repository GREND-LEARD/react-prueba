import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

const MostrarLista = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Simulación de una llamada a una API
  useEffect(() => {
    // Simulamos un pequeño retraso para imitar una llamada a la API
    const timeoutId = setTimeout(() => {
      try {
        // Estos serían los datos que recibiríamos de la API
        const datosSimulados = [
          { id: '1', nombre: "Producto A", precio: 25.99, disponible: true },
          { id: '2', nombre: "Producto B", precio: 14.50, disponible: false },
          { id: '3', nombre: "Producto C", precio: 32.75, disponible: true },
          { id: '4', nombre: "Producto D", precio: 9.99, disponible: true },
          { id: '5', nombre: "Producto E", precio: 42.00, disponible: false }
        ];
        
        setDatos(datosSimulados);
        setCargando(false);
      } catch (err) {
        setError("Error al cargar los datos");
        setCargando(false);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Renderizado de cada item
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.itemRow}>
        <Text style={styles.itemId}>{item.id}</Text>
        <Text style={styles.itemNombre}>{item.nombre}</Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.itemPrecio}>${item.precio.toFixed(2)}</Text>
        <Text style={[
          styles.itemDisponible,
          { color: item.disponible ? '#00a000' : '#e00000' }
        ]}>
          {item.disponible ? 'Disponible' : 'No disponible'}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mostrar Lista de Datos</Text>
      
      {cargando ? (
        <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <>
          <Text style={styles.subtitle}>Lista de Productos:</Text>
          <FlatList
            data={datos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.lista}
          />
        </>
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
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222222',
  },
  loader: {
    marginVertical: 20,
  },
  error: {
    color: '#e00000',
    fontSize: 16,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  lista: {
    maxHeight: 300,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 4,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  itemId: {
    fontWeight: 'bold',
    width: 30,
    color: '#222222',
    fontSize: 16,
  },
  itemNombre: {
    flex: 1,
    fontWeight: '500',
    color: '#333333',
    fontSize: 16,
  },
  itemPrecio: {
    fontWeight: 'bold',
    color: '#222222',
    fontSize: 16,
  },
  itemDisponible: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MostrarLista; 