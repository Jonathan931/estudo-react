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
    const id = 1549628001911;
    const pointAs = await AsyncStorage.getItem('trip'+id);
    let points = [];
    if ( pointAs ){
      points = JSON.parse(pointAs);
    }
    points.push(this.state)
    await AsyncStorage.setItem('trip-'+id, JSON.stringify(points));

    let total = 0;
    points.forEach(p => {
      total += p.price
    });

    const tripsAs = await AsyncStorage.getItem('trips');
    let trips = [];
    if ( tripsAs ){
      trips = JSON.parse(tripsAs)
    }

    trips.forEach( (trip, index) =>{
      if (trip.id === id ){
        trip.price = total
        trip.latitude = points[0].position.latitude;
        trip.longitude = points[0].position.longitude;
      }
    });
    console.log(trips)
    await AsyncStorage.setItem('trips', JSON.stringify(trips));
  }
}
