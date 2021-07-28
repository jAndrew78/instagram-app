import React, { useState, useContext } from 'react';
import { View, Button, TextInput } from "react-native";
// import firebase from 'firebase';

import { FirebaseContext } from '../../context/FirebaseContext';

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const firebase = useContext(FirebaseContext);

  const onSignUp = () => {
    try {
      firebase.createUser(email, password);
    } catch (error) {
      console.log("Error @onSignUp: ", error);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>

      <TextInput
        placeholder="name"
        value={name}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={name => setName(name.trim())}
      />
      
      <TextInput
        placeholder="email"
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={email => setEmail(email.trim())}
      />
      <TextInput
        placeholder="password"
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={password => setPassword(password.trim())}
      />

      <Button 
        onPress={() => onSignUp()}
        title="Sign Up"
      />

    </View>
  )
}
