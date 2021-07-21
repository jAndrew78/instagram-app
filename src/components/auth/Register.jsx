import React, { useState } from 'react';
import { View, Button, TextInput } from "react-native";

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSignUp = () => {}

  return (
    <View>

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
        // onPress={() => onSignUp()}
        title="Sign Up"
      />

    </View>
  )
}
