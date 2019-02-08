import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import isIphoneX from '../../utils/isIphoneX';
import MapView from 'react-native-maps';
import Trip from './Trip';

export default class TripScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  state ={
    trips: [],
  }

  render() {
    const { trips } = this.state;
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
              onPress={ () => this.props.navigation.navigate('AddTrip', { refresh: this.loadData }) }
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
              isIphoneX() ? { marginBottom: 20} : null
            ]}/>
        </View>
      </View>
    )
  }

  componentDidMount(){
    this.loadData();
  }
  
  loadData = async() =>{
    const tripsAS = await AsyncStorage.getItem('trips');
    console.log(tripsAS);
    let trips = [];
    if (tripsAS){
      trips = JSON.parse(tripsAS);
    }
    this.setState({ trips })
  }

  renderItem = ({item}) =>{
    return <Trip onPress={() => this.props.navigation.navigate('Trip', { trip: item })} title={item.name} price={item.price}/>
  }
}
