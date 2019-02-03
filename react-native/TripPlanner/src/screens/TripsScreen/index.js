import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Trip from './Trip';

export default class TripScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    const trips= [
      { id: '1', name: 'EuroTrip2019', price: 'R$ 5000'},
      { id: '2', name: 'Expedição Atacama', price: 'R$ 3000'},
    ];
    return (
      <View style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',}}>
        <View style={{backgroundColor: 'red', flex: 1}}>
          <Text>Mapa</Text>
        </View>
        <View style={{backgroundColor: 'pink'}}>
          <FlatList 
            data={trips} 
            renderItem={this.renderItem} 
            horizontal 
            pagingEnabled 
            keyExtractor={ item => item.id }/>
          
        </View>
      </View>
    )
  }

  renderItem = ({item}) =>{
    return <Trip title={item.name} price={item.price}/>
  }
}
