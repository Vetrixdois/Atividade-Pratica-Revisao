import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Button = ({ imageSource, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        {/* Imagem à esquerda */}
        {imageSource && (
          <Image source={imageSource} style={styles.image} />
        )}
        {/* Texto centralizado */}
        <Text style={styles.text}>Como deseja acessar</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#14c871',  // Cor do fundo do botão
    borderRadius: 8,             // Bordas arredondadas
    paddingVertical: 16,         // Espaçamento vertical
    paddingHorizontal: 40,       // Espaçamento horizontal
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
    color: '#fff',              // Cor do texto
    fontSize: 16,                // Tamanho da fonte
    textAlign: 'center',        // Centraliza o texto
  }
});

export default Button;
