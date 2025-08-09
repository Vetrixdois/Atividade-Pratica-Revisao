import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const OtherButton = ({ imageSource, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        {/* Texto centralizado */}
        <Text style={styles.text}>Outras Opções</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fdfdfd',  // Cor do fundo do botão
    borderRadius: 8,
    borderWidth: 1, 
    borderColor: '#43d38d',            // Bordas arredondadas
    paddingVertical: 16,         // Espaçamento vertical
    paddingHorizontal: 81,       // Espaçamento horizontal
    marginVertical: 10,          // Margem vertical
    justifyContent: 'center',    // Alinha o conteúdo no centro
    alignItems: 'center',        // Alinha o conteúdo no centro
  },
  buttonContent: {
    flexDirection: 'row',        // Alinha o conteúdo na horizontal
    alignItems: 'center',        // Centraliza o conteúdo verticalmente
  },
  image: {
    width: 24,                   // Tamanho da imagem
    height: 24,                  // Tamanho da imagem
    marginRight: 10,             // Espaçamento entre a imagem e o texto
  },
  text: {
    color: '#555555',              // Cor do texto
    fontSize: 16,                // Tamanho da fonte
    textAlign: 'center',        // Centraliza o texto
  }
});

export default OtherButton;
