import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { TextInput } from "react-native";



export default function Register({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(user.email);
    })
    .catch(error => alert(error.message))
  }

  const pressHandler = () => {
   
    navigation.push('Home_Audio');
  }

  
    return (
      <View style={styles.container}>
        <Text>Register here</Text>
        <TextInput placeholder="Enter email"  value={email} onChangeText={text => setEmail(text)} />
        <TextInput placeholder="Entee password" value={password} onChangeText={text => setPassword(text) }  secureTextEntry />
        <TouchableOpacity onPress={handleSignUp}
        >
          <Text>Register</Text>
          </TouchableOpacity>
        <Button title='For Loginin' onPress={pressHandler} />
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
