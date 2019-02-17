import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import isIphoneX from '../../utils/isIphoneX';
import MapView, {Marker} from 'react-native-maps';
import Trip from './Trip';
import TripCad from '../AddTripScreen/tripCad';
import assets from './assets';
import styles from './style';

export default class TripScreen extends Component {
  
  static navigationOptions = {
    header: null,
  }

  state ={
    trips: null,
    isViewTrip: true,
    markers: []
  }

  render() {
    const { trips, isViewTrip, markers } = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapperMap}>
          <MapView 
            style={styles.wrapperMap}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.922,
              longitudeDelta: 0.0421,
            }}
            onPress={() => this.setState({ isViewTrip: true })}
            ref = {ref => this.map = ref}
            >
            { markers.map(markerU => (
              <Marker
                title={markerU.title}
                image={assets.flagPinkImg}
                key={markerU.key}
                coordinate={markerU.coordinate}
              />
          ))}
          </MapView>
            <TouchableOpacity 
              //onPress={ () => this.props.navigation.navigate('AddTrip', { refresh: this.loadData }) }
              onPress={ () => this.setState({ isViewTrip: false })}
              style={styles.addTrip}>
              <Image source={assets.addImage} />
            </TouchableOpacity>
        </View>
        { !isViewTrip && <TripCad refresh={this.loadData} />}
        { !!isViewTrip && <View style={styles.backgroundColor}>
          <FlatList 
            data={trips} 
            renderItem={this.renderItem} 
            horizontal 
            pagingEnabled 
            keyExtractor={ item => item.id }
            style={[
              isIphoneX() ?  styles.marginPhoneX : null
            ]}
            onViewableItemsChanged={this.handleItemChange}
           />
        </View> }
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
    this.setState({ trips, isViewTrip: true });
  }

  renderItem = ({item}) =>{
    return <Trip onPress={() => this.props.navigation.navigate('Trip', { trip: item, refresh: this.loadData })} title={item.name} price={item.price} image={{uri: item.image}}/>
  }

  handleItemChange = ( info ) =>{
    const { viewableItems } = info;
    if ( viewableItems && viewableItems.length > 0 ){
      const [item] = viewableItems;
      if (item.item.places && item.item.places.length > 0){
        const markers = item.item.places.map( (place, i) => { 
          const latitude = place.position.latitude;
          const longitude = place.position.longitude;
          return ( 
            { key: i, coordinate: {latitude, longitude }, title: place.pointName}
          );
        });
        this.setState({ markers });
        this.map.animateToRegion(
          this.regionFrom(item.item.places[0].position.latitude, item.item.places[0].position.longitude, 1000 ),
          3000
        )
      }   
    }
  }

  regionFrom = (lat, lon, distance) => {
    distance = distance/2
    const circumference = 40075
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000
    const angularDistance = distance/circumference
    
    const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
    const longitudeDelta = Math.abs(Math.atan2(
        Math.sin(angularDistance)*Math.cos(lat),
        Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)))
    
    return  {
        latitude: lat,
        longitude: lon,
        latitudeDelta,
        longitudeDelta,
    }
  }

}
