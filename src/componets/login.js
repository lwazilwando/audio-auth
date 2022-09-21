import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TextInput } from "react-native";
import { auth } from "../../firebase";



export default function Login({navigation}) {

  

 

  const pressHandler = () => {
   
    navigation.push('Register_Audio');
  }

    return (
      <View style={styles.container}>
        <Text>Login here</Text>
        <TextInput placeholder="Enter email" value={email} onChangeText={text => setEmail(text)} />
        <TextInput placeholder="Entee password" value={password} onChangeText={text => setPassword(text) } secureTextEntry />
        <TouchableOpacity //</View>onPress={() => {}}
        >
          <Text>Login</Text>
          </TouchableOpacity>
        <Button title='For Registering' onPress={pressHandler} />
        <StatusBar style="auto" />
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
