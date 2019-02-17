import React, { Component } from "react";
import { Content, Form, Item, Input, Button } from "native-base";
import {
  AsyncStorage, Image, Text, TouchableOpacity
}
  from 'react-native';
import { ImagePicker } from 'expo';
import styles from './styles';

export default class CardItemButton extends Component {

  state = {
    name: '',
    image: null,
  }

  render() {

    const { image } = this.state;
    return (
      <Content style={styles.wrapper}>
         <Form 
          style={{ 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            flexDirection: 'column', 
            alignItems: 'stretch', 
            }}>
          <Item style={{ margin: 5 }}> 
            <Input placeholder="Digite o nome da Viagem" onChangeText={txt => this.setState({ name: txt })} />
          </Item>
          { image && <Item>
              <Image onPress={this._pickImage} source={{ uri: image }} style={{ width: 300, height: 100 }} />
          </Item>}
        </Form>
        { !image && <TouchableOpacity style={styles.btn} onPress={this._pickImage}>
          <Text style={{ textAlign: 'center' }}>Selecione a Imagem</Text>
        </TouchableOpacity> }
        <TouchableOpacity style={styles.btn} onPress={this.handleSave}>
          <Text style={{ textAlign: 'center' }}> Salvar Viagem </Text>
        </TouchableOpacity>
      </Content>
    );
  }

  handleSave = async () => {
    //AsyncStorage.removeItem( 'trips' );
    if (!this.state.name) {
      alert("Digite o nome da Viagem");
      return;
    }
    if (!this.state.image) {
      alert("Selecione uma foto para o cadastro da Viagem.");
      return;
    }
    const newTrip = {
      id: new Date().getTime() + '',
      name: this.state.name,
      image: this.state.image,
      price: 0,
      places: [],
    };

    const tripsAS = await AsyncStorage.getItem('trips');
    let trips = [];
    if (tripsAS) {
      trips = JSON.parse(tripsAS);
    }
    trips.push(newTrip);
    await AsyncStorage.setItem('trips', JSON.stringify(trips))
    this.refresh();
  }

  refresh = () => {
    const { refresh } = this.props;
    refresh();
    //navigation.goBack();
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
    });
    
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };



}