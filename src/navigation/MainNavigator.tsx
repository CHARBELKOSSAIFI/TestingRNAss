import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CameraScreen from '../screens/CameraScreen';
import {Button} from 'react-native';

const MainStackNavigator = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator
      initialRouteName="Home"
      //here the screen option for all the pages
      // screenOptions={{
      //     headerStyle:{
      //       backgroundColor:'red',
      //     }
      // }}
    >
      <MainStackNavigator.Screen
        name="Home"
        component={Home}
        //here just for the Home
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
      {/* <MainStackNavigator.Screen /> */}
    </MainStackNavigator.Navigator>
  );
};
export default MainNavigator;
