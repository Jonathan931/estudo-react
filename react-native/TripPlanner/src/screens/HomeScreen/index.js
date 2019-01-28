import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import assets from './assets';
import style from './styles';

class HomeScreen extends Component{

  state={
    show: true
  }

  handleButton = () =>{
    this.setState({
      show: !this.state.show
    })
  }

  render(){
    return(
      <ImageBackground
        source={assets.background}
        imageStyle={{ resizeMode: 'stretch' }}
        style={style.background}>
        <View style={style.wrapperLogo}>
          <Image 
            source={assets.logo} />
        </View>

        <View style={style.textWelcome}>
          <Text style={{fontSize: 24}}>Seja bem vindo!</Text>
        </View>       
        { !this.state.show ?
          <TouchableWithoutFeedback onPress={this.handleButton}>
            <View style={style.button}>
              <Text style={{textAlign: 'center', fontSize: 18}}>COMEÇAR</Text>
            </View>
          </TouchableWithoutFeedback>
          : 
          <TouchableWithoutFeedback onPress={this.handleButton}>
            <View style={style.button}>
              <Image source={assets.pin} />
              <Text style={{textAlign: 'center', fontSize: 18}}>Vamos planejar sua
              primeira viagem? </Text>
              <Image source={assets.arrow} />
            </View>
          </TouchableWithoutFeedback>
        }
      </ImageBackground>
    )
  }
}
export default HomeScreen;