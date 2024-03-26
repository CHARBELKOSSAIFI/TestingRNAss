import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CameraScreen from '../screens/CameraScreen';
import {Button} from 'react-native';
import MapScreen from '../screens/MapScreen';

const MainStackNavigator = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator initialRouteName="Home">
      <MainStackNavigator.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'blue',
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: '900',
            color: 'black',
          },
          headerTitleAlign: 'center',
          headerShown: true,
        }}
      />
      <MainStackNavigator.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          headerSearchBarOptions: {
            placeholder: 'Enter your text',
            headerIconColor: 'red',
            hintTextColor: 'red',
          },
        }}
      />
      <MainStackNavigator.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerSearchBarOptions: {
            placeholder: 'Enter your text',
            headerIconColor: 'red',
            hintTextColor: 'red',
          },
        }}
      />
    </MainStackNavigator.Navigator>
  );
};
export default MainNavigator;
