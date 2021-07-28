import React, { useState } from 'react';
import { View, Button, TextInput } from "react-native";
import firebase from 'firebase';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSignIn = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
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
