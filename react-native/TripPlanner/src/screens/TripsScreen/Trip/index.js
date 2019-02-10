import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Trip = props =>{
  return(
    <TouchableOpacity onPress={props.onPress} style={styles.wrapperTrip}>
      <View>
          <Text style={styles.image}>Image</Text>
          <Text>{props.title}</Text>
          <Text style={styles.price}>R$ {props.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default Trip;
