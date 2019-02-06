import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import isIphoneX from '../../utils/isIphoneX';
import MapView from 'react-native-maps';
import Trip from './Trip';

export default class TripScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    console.log(isIphoneX())
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
          <MapView 
            style={{flex: 1}}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.922,
              longitudeDelta: 0.0421,
            }}/>
            <TouchableOpacity 
              onPress={ () => this.props.navigation.navigate('AddTrip') }
              style={{ 
                position: 'absolute', 
                bottom: 0,
                right: 20,
                padding: 10
              }}>
              <Image source={require('../../../assets/add.png')} />
            </TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'white'}}>
          <FlatList 
            data={trips} 
            renderItem={this.renderItem} 
            horizontal 
            pagingEnabled 
            keyExtractor={ item => item.id }
            style={[
              isIphoneX() ? { marginBottom: 20} : { marginBottom: 10}
            ]}/>
        </View>
      </View>
    )
  }

  renderItem = ({item}) =>{
    return <Trip onPress={() => this.props.navigation.navigate('Trip')} title={item.name} price={item.price}/>
  }
}
