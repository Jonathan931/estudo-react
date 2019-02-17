import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, AsyncStorage, ImageBackground } from 'react-native';
import styles from './styles';

export default class TripScreen extends Component {

  static navigationOptions = {
    header: null,
  }
  
  state={
    trip: {},
  }

  render() {
    const { trip } = this.state; 
    if (!trip) return;
    const points = trip.places;
    //console.log(trip)
    return (
      <View style={styles.wrapper}>
        <ImageBackground 
          style={styles.header}
          source={{uri: trip.image }}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={()=>{ 
              this.props.navigation.state.params.refresh(); 
              this.props.navigation.goBack()
              }}>
              <Image source={require('../../../assets/row-left.png')}/>
            </TouchableOpacity>
          </View>
            <TouchableOpacity 
              onPress={ () => this.props.navigation.navigate('AddPoint', { id: trip.id ,refresh: this.loadData }) }
              style={styles.addPoint}>
              <Image source={require('../../../assets/add.png')} />
            </TouchableOpacity>
          <Text style={styles.tripName}>{trip.name}</Text>
          <Text style={styles.tripPrice}>R$ {(trip.price || 0.00).toFixed(2)}</Text>
        </ImageBackground>
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
    const tripsAS = await AsyncStorage.getItem('trips');
    let trips = [];
    if (tripsAS){
      trips = JSON.parse(tripsAS);
    }
    //console.log( this.props.navigation.state.params.trip.id )
    const trip = trips.filter( f => f.id === this.props.navigation.state.params.trip.id )[0]; 
    //console.log('encontrado', trip)
    this.setState({ trip })
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
