import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';

export default class AddPointScreen extends Component {

  static navigationOptions = {
    header: null,
  }
  
  state = {
    position:{
      latitude: 37.78825,
      longitude: -122.4324,
    },
    pointName: '',
    description: '',
    price: 0,
  }

  render() {
    //1549625896380
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <MapView style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.922,
              longitudeDelta: 0.0421,
            }}>
            <Marker 
              draggable
              onDragEnd={
                (evt) => this.setState({ position: evt.nativeEvent.coordinate }) 
              }
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }} />
          </MapView>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={()=>{ this.props.navigation.goBack()}}>
              <Image source={require('../../../assets/row-left.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput style={styles.input} placeholder="Nome do ponto" onChangeText={txt => this.setState({pointName: txt})} />
        <TextInput style={styles.input} placeholder="Descrição" onChangeText={txt => this.setState({description: txt})} />
        <TextInput style={styles.input} placeholder="Preço" onChangeText={txt => this.setState({price: parseFloat(txt)})} />
        
        <TouchableOpacity style={styles.btn} onPress={this.handleSave}>
              <Text style={{textAlign: 'center'}}> Salvar Ponto </Text>
        </TouchableOpacity>

      </View>
    )
  }

  handleSave = async () =>{
    //console.log(this.props.navigation.state.params.id)
    const id = 1549635398353 + '';
    const pointAs = await AsyncStorage.getItem('trip');
    let points = JSON.parse(pointAs);
    console.log(pointAs)
    /*const trip = points.map( trip => {
      if (trip.id === id){
        trip.places.push(this.state);
        let total = 0.00;
        trip.places.forEach(p => {
          total += p.price
        });
        trip.price = total;
      } 
      return trip;
    })*/

    //await AsyncStorage.setItem('trip', JSON.stringify(trip));
  
  }
}
