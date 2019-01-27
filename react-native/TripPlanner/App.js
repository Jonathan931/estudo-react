import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return ( 
      <View style={{flex: 1}}> 
        <HomeScreen />
     </View>
    );
  }
}