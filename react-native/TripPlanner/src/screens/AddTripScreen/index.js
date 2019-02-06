import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';

export default class AddTripScreen extends Component {

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
    const trip = {
      name: 'EuroTrip 2019',
      price: 'R$ 5000',
      places: [
        {id: '1', name: 'Amsterdan', description: 'Chegada', price: 100, lat: 0, long: 0},
        {id: '2', name: 'Bruxelas', description: 'Hospedagem', price: 100, lat: 0, long: 0},
        {id: '3', name: 'Amsterdan', description: 'Chegada', price: 100, lat: 0, long: 0},
        {id: '4', name: 'Bruxelas', description: 'Hospedagem', price: 100, lat: 0, long: 0},
        {id: '5', name: 'Amsterdan', description: 'Chegada', price: 100, lat: 0, long: 0},
        {id: '6', name: 'Bruxelas', description: 'Hospedagem', price: 100, lat: 0, long: 0},
        {id: '7', name: 'Amsterdan', description: 'Chegada', price: 100, lat: 0, long: 0},
        {id: '8', name: 'Bruxelas', description: 'Hospedagem', price: 100, lat: 0, long: 0},
      ]
    }

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
          <Text style={styles.tripName}>{trip.name}</Text>
          <Text style={styles.tripPrice}>{trip.price}</Text>
        </View>
        <TextInput style={styles.input} placeholder="Nome do ponto" onChangeText={txt => this.setState({pointName: txt})} />
        <TextInput style={styles.input} placeholder="Descrição" onChangeText={txt => this.setState({description: txt})} />
        <TextInput style={styles.input} placeholder="Preço" onChangeText={txt => this.setState({price: txt})} />
        
        <TouchableOpacity style={styles.btn}>
              <Text style={{textAlign: 'center'}}> Salvar Ponto </Text>
        </TouchableOpacity>

      </View>
    )
  }
  renderItem = ({item}) =>{
    return(
      <View style={styles.item}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.wrapperItemPrice}>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>  
      </View>
    )
  }
}
