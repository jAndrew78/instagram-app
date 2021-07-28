import React, { useState, useContext } from 'react';
import { View, Button, TextInput } from "react-native";
// import firebase from 'firebase';

import { FirebaseContext } from '../../context/FirebaseContext';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const firebase = useContext(FirebaseContext);

  const onSignIn = () => {
    try {
      firebase.logIn(email, password);
    } catch (error) {
      console.log("Error @onSignUp: ", error);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      
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
        onPress={() => onSignIn()}
        title="Sign In"
      />

    </View>
  )
}
