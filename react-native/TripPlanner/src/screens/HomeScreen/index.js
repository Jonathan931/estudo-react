import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import assets from './assets';
import style from './styles';
import isIphoneX from '../../utils/isIphoneX';

class HomeScreen extends Component{

  static navigationOptions = {
    header: null,
  }

  state={
    show: false
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
  
        { !this.state.show ?
          <View>
            <View style={style.textWelcome}>
              <Text style={style.textSizeWelcome}>Seja bem vindo!</Text>
            </View>     
            <TouchableWithoutFeedback onPress={this.handleButton}>
              <View style={[style.button, isIphoneX() ? { paddingBottom: 16 }: null]}>
                <Text style={style.buttonText}>COMEÇAR</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          : 
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Trips')}>
            <View style={style.buttonEmpty}>
              <Image source={assets.pin} style={style.pin} />
              <Text style={style.buttonTextEmpty}>Vamos planejar sua
              primeira viagem? </Text>
              <Image source={assets.arrow} style={[style.arrow, isIphoneX() ? { marginBottom: 16 }: null]} />
            </View>
          </TouchableWithoutFeedback>
        }
      </ImageBackground>
    )
  }
}
export default HomeScreen;