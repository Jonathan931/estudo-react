import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './styles';


export default class AddTripScreen extends Component {

  static navigationOptions = {
    header: null,
  }
  
  state = {
   name: '',
  }

  render() {

    return (
      <View style={styles.wrapper}>
        <TextInput style={styles.input} placeholder="Nome da Viagem" onChangeText={txt => this.setState({name: txt})} />
        <TouchableOpacity style={styles.btn} onPress={this.handleSave}>
              <Text style={{textAlign: 'center'}}> Salvar Viagem </Text>
        </TouchableOpacity>
      </View>
    )
  }

  handleSave = async () =>{
    //AsyncStorage.removeItem( 'trips' );
    const newTrip = {
      id: new Date().getTime(),
      trip: this.state.name,
      price: 0,
      latitude: 0,
      longitude: 0,
    };
    
    const tripsAS = await AsyncStorage.getItem('trips');
    let trips = [];          
    if ( tripsAS ){
      trips = JSON.parse(tripsAS);
    }
    trips.push(newTrip);
    //trips
    //AsyncStorage.removeItem( 'trips' );
    //trips.push(newTrip)
    await AsyncStorage.setItem('trips', JSON.stringify(trips))
    console.log('trips', trips)
    //this.props.navigation.navigate('AddPoint', { id: newTrip.id })
    const { navigation } = this.props;
    navigation.state.params.refresh();
    navigation.goBack();
  }

}
