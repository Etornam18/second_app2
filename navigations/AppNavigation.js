import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splashscreen from '../screens/Splashscreen';
import Welcome from '../screens/Welcome';
import Intro from '../screens/Intro';
import Chat from '../screens/Chat';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2300); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <Splashscreen />
      ) : (
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Main" component={BottomTabNavigation} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
