import React from 'react';
import {Text}from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen';
import TripsScreen from './src/screens/TripsScreen';


const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Trips: TripsScreen,
},{ initialRouteName: 'Trips' })

export default createAppContainer(AppNavigator);