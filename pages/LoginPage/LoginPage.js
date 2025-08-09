import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginPage = ({}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View>
        <View>
            <Text>Acesse</Text>
            <Text>
                com E-mail e senha
            </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LoginPage;