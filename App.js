import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/IMAGEN.jpg')}
      />
      <Text style={styles.texto}>Diego Alejandro Velásquez Gómez</Text>
      <Text style={styles.carrera}>Estudiante de Ing. en Ciencias de la Computación</Text>
      <br></br>
      <Text>Algunos de mis pasatiempos favoritos son escuchar música y ver vídeos de cosas que me interesan, comos los videojuegos, programación, comida, etc.</Text>
      <Text>Creo que mi lenguaje favorito es php ya que fue uno de los primeros lenguajes de programación con los cuales tuve contacto.</Text>
      <br></br>
      <StatusBar style="auto" />
      <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn141.picsart.com/310381235159211.png?type=webp&to=min&r=640',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37D15A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontWeight: 'bold',
    fontSize : 20,
    color: 'black',
    fontFamily: 'Comic Sans Ms'

  },
  carrera:{
    fontStyle: 'italic',
    color: 'white',
  },
  logo: {
    width: 200,
    height: 200,
  },
  
  
});
