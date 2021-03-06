import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { FirebaseProvider } from './src/context/FirebaseContext';
import { LandingScreen, RegisterScreen, LoginScreen } from './src/components';

const Stack = createStackNavigator();

export default function App() {
  return (
    <FirebaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRoutName="Landing">

          <Stack.Screen 
            name="Landing" 
            component={LandingScreen} 
            options={{headerShown: false}}
          />

          <Stack.Screen 
            name="Register" 
            component={RegisterScreen}
            // options={{headerShown: false}}
          />
          
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            // options={{headerShown: false}}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </FirebaseProvider>
  );
}
