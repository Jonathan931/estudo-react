import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';

class HomeScreen extends Component{
  state={
    counter: 0
  }

  render(){
    return(
      <ImageBackground
        source={require('../../assets/background.png')}
        imageStyle={{ resizeMode: 'stretch' }}
        style={{
          flex: 1, 
          flexDirection: 'column', 
          alignItems: 'stretch', 
          justifyContent: 'space-between'
        }}>

        <View style={{
          flex: 1, 
          alignItems: 'center', 
          justifyContent: 'center',
          paddingBottom: 200,
          }}>
          <Image 
            source={require('../../assets/logo.png')} />
        </View>

        <View style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: 32,
        }}>
          <Text style={{fontSize: 24}}>Seja bem vindo!</Text>
        </View>       
        
        <TouchableWithoutFeedback>
          <View style={{
            backgroundColor: 'white',
            paddingBottom: 16,
            paddingTop: 16
          }}>
            <Text style={{textAlign: 'center', fontSize: 18}}>COMEÇAR</Text>
          </View>
        </TouchableWithoutFeedback>

      </ImageBackground>
    )
  }
}
export default HomeScreen;