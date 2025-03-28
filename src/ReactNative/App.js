import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView, 
  StyleSheet,
  StatusBar
} from 'react-native';

// Importar componentes
import CambiarFondo from './CambiarFondo';
import ModificarTextos from './ModificarTextos';
import ValidarNumero from './ValidarNumero';
import MostrarObjeto from './MostrarObjeto';
import MostrarLista from './MostrarLista';

const App = () => {
  const [componenteActivo, setComponenteActivo] = useState('cambiarFondo');

  // Función para renderizar el componente seleccionado
  const renderComponente = () => {
    switch (componenteActivo) {
      case 'cambiarFondo':
        return <CambiarFondo />;
      case 'modificarTextos':
        return <ModificarTextos />;
      case 'validarNumero':
        return <ValidarNumero />;
      case 'mostrarObjeto':
        return <MostrarObjeto />;
      case 'mostrarLista':
        return <MostrarLista />;
      default:
        return <CambiarFondo />;
    }
  };

  // Función para renderizar un botón de navegación
  const renderBoton = (id, titulo) => (
    <TouchableOpacity
      style={[
        styles.botonNav,
        componenteActivo === id ? styles.botonNavActivo : null
      ]}
      onPress={() => setComponenteActivo(id)}
    >
      <Text 
        style={[
          styles.textoBotonNav,
          componenteActivo === id ? styles.textoBotonNavActivo : null
        ]}
      >
        {titulo}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.titulo}>Prueba React Native</Text>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.navegacion}>
        {renderBoton('cambiarFondo', 'Cambiar Fondo')}
        {renderBoton('modificarTextos', 'Modificar Textos')}
        {renderBoton('validarNumero', 'Validar Número')}
        {renderBoton('mostrarObjeto', 'Mostrar Objeto')}
        {renderBoton('mostrarLista', 'Mostrar Lista')}
      </ScrollView>
      
      <ScrollView style={styles.contenido}>
        {renderComponente()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    elevation: 3,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  navegacion: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 5,
    elevation: 2,
  },
  botonNav: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    elevation: 1,
  },
  botonNavActivo: {
    backgroundColor: '#4CAF50',
  },
  textoBotonNav: {
    fontWeight: '500',
    fontSize: 16,
    color: '#333333',
  },
  textoBotonNavActivo: {
    color: 'white',
    fontWeight: 'bold',
  },
  contenido: {
    flex: 1,
    padding: 15,
  },
});

export default App; 