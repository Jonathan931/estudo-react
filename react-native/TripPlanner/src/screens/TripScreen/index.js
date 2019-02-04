import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

export default class TripScreen extends Component {

  static navigationOptions = {
    header: null,
  }
  
  render() {
    const trip = {
      name: 'EuroTrip 2019',
      price: 'R$ 5000',
      places: [
        {id: '1', name: 'Amsterdan', description: 'Chegada', price: 100, lat: 0, long: 0},
        {id: '2', name: 'Bruxelas', description: 'Hospedagem', price: 100, lat: 0, long: 0}
      ]
    }
    return (
      <View style={{flex: 1}}>
        <View style={{
          height: 192, 
          backgroundColor: 'grey'}}>
          <View style={{
            position: 'absolute',
            top: 26,
            left: 16,
            padding: 10
          }}>
          <TouchableOpacity onPress={()=>{ this.props.navigation.goBack()}}>
            <Image source={require('../../../assets/row-left.png')}/>
          </TouchableOpacity>
        </View>
          <Text style={{
            position: 'absolute',
            left: 16,
            bottom: 16
          }}>{trip.name}</Text>
          <Text style={{
           position: 'absolute', 
           bottom: 16, 
           right: 32, 
           textAlign: 'right',
           backgroundColor: '#180079', 
           padding: 4, 
           color: 'white'
          }}>{trip.price}</Text>
        </View>
        <FlatList
          style={{flex: 1}} 
          contentContainerStyle={{
            paddingTop: 16,
            paddingLeft: 16,
          }}
          data={trip.places}
          renderItem={this.renderItem}
          keyExtractor={ item => item.id }/>
      </View>
    )
  }
  renderItem = ({item}) =>{
    return(
      <View style={{flex: 1}}>

        <View style={{flex: 1}}>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>

        <View style={{textAlign: 'center'}}>
          <Text>{item.price}</Text>
        </View>  
        
      </View>
    )
  }
}
