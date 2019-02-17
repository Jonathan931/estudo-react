import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';

export default class AddPointScreen extends Component {

  static navigationOptions = {
    header: null,
  }

  state = {
    position: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    pointName: '',
    description: '',
    price: 0,
    initialRegion:{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    }
  }

  render() {
    const {position, initialRegion} = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <MapView style={{ flex: 1 }}
            provider={MapView.PROVIDER_GOOGLE}
            initialRegion={initialRegion}
            region={initialRegion}>

            <Marker
              draggable
              onDragEnd={
                (evt) => this.setState({ position: evt.nativeEvent.coordinate })
              }
              centerOffset={{ x: -18, y: -60 }}
              anchor={{ x: 0.69, y: 1 }}
              coordinate={position} />
          </MapView>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
              <Image source={require('../../../assets/row-left.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <TextInput style={styles.input} placeholder="Nome do ponto" onChangeText={txt => this.setState({ pointName: txt })} />
        <TextInput style={styles.input} placeholder="Descrição" onChangeText={txt => this.setState({ description: txt })} />
        <TextInput style={styles.input} placeholder="Preço" onChangeText={txt => this.setState({ price: parseFloat(txt) })} />

        <TouchableOpacity style={styles.btn} onPress={this.handleSave}>
          <Text style={{ textAlign: 'center' }}> Salvar Ponto </Text>
        </TouchableOpacity>

      </View>
    )
  } 
  
  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      positionR => {
        const location = positionR;
        const position = { latitude: location.coords.latitude, longitude: location.coords.longitude  };
        const initialRegion={
          latitude:  location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }
        this.setState({position, initialRegion});

      },
      error => console.log(error.message),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
    );
  };

  componentWillMount(){
    this.findCoordinates()
  }

  handleSave = async () => {
    if (!this.state.pointName) {
      alert("Digite o nome do Ponto");
      return;
    }
    if (!this.state.description) {
      alert("Digite a descrição do Ponto.");
      return;
    }
    if (!this.state.price) {
      alert("Digite o Preço.")
      return;
    }
    const id = this.props.navigation.state.params.id;
    const pointAs = await AsyncStorage.getItem('trips');
    let points = [];
    if (pointAs) {
      points = JSON.parse(pointAs);
    }
    //let points = JSON.parse(pointAs);
    //console.log(points)
    const trip = points.map(trip => {
      if (trip.id === id) {
        trip.places.push({ id: new Date().getTime() + '', ...this.state });
        let total = 0.00;
        trip.places.forEach(p => {
          total += p.price
        });
        trip.price = total;
      }
      return trip;
    })
    await AsyncStorage.setItem('trips', JSON.stringify(trip));
    this.refresh();
  }

  refresh = () => {
    const { navigation } = this.props;
    navigation.state.params.refresh();
    navigation.goBack();
  }
}
