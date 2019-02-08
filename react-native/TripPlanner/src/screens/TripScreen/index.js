import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import styles from './styles';

export default class TripScreen extends Component {

  static navigationOptions = {
    header: null,
  }
  
  state={
    trips: [],
    points: [],
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
    const { points } = this.state;
    //console.log(points)
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.backButton}>
          <TouchableOpacity onPress={()=>{ this.props.navigation.goBack()}}>
            <Image source={require('../../../assets/row-left.png')}/>
          </TouchableOpacity>
        </View>
          <Text style={styles.tripName}>{trip.name}</Text>
          <Text style={styles.tripPrice}>{trip.price}</Text>
        </View>
        <FlatList
          style={{flex: 1}} 
          contentContainerStyle={{
            paddingTop: 16,
            paddingLeft: 16,
          }}
          data={points}
          renderItem={this.renderItem}
          keyExtractor={ item => item.id }/>
      </View>
    )
  }

  componentDidMount(){
    this.loadData();
  }

  loadData = async() =>{
    const id = 1549628001911;
    const tripsAS = await AsyncStorage.getItem('trips');
    let trips = [];
    if (tripsAS){
      trips = JSON.parse(tripsAS);
    }
    //console.log('trips', tripsAS)
    const pointsAS = await AsyncStorage.getItem('trips-' + id);
    //console.log('points', pointsAS)
    let points = [];
  
    if (pointsAS){
      points = JSON.parse(pointsAS);
    }
    this.setState({ trips, points })
  }

  renderItem = ({item}) =>{
    return(
      <View style={styles.item}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.pointName}</Text>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.wrapperItemPrice}>
          <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
        </View>  
      </View>
    )
  }
}
