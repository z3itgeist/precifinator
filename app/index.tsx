import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";
import {Camera} from '../components/cameraComponent';
import {NomeDaCarta} from '../components/textComponents';

const styles = StyleSheet.create({
  container: {
    width: undefined,
    height: '70%',
    resizeMode: 'contain',
},
text: {
  color: 'black',
},
button: {
  fontSize: 20,
  textDecorationLine: 'underline',
  color: 'black',
},
});


export default function App () {
  return (
    <SafeAreaProvider>
    <View style={{backgroundColor: 'white'}}>
        <NomeDaCarta />
        
        <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
    <View>
    <Camera/>
    </View>
    </SafeAreaProvider>
  )
};



