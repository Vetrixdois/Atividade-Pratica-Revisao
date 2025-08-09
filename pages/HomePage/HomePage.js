import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from '../../components/GoogleButton/ButtonGoogle.js';
import OtherButton from '../../components/OtherOptionsButton/OtherButton.js'
import Google from '../../assets/Google.png'
import Dog from '../../assets/casual_dog.png'

const HomePage = ({ navigation }) => {
    return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={Dog} style={{width: 350, height:300}} />
      <View style={{alignItems: 'center',justifyContent: 'center',margin: 32}}>
        <Text style={{fontSize: 40, fontWeight: '500', color: '#737e86'}}>Ótimo dia!</Text>
        <Text style={{fontWeight: 'bold', color: '#737e86'}}>Como deseja acessar?</Text>
      </View>

      <Button
        imageSource={Google} // Imagem para o botão (se necessário)
        onPress={() => navigation.navigate('LoginPage')}
      />
      <OtherButton/>
    </View>
    );
  };

  
export default HomePage;