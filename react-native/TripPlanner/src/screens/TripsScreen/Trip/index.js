import React from 'react'
import { View, Text, Dimensions } from 'react-native';
import styles from './style';

const Trip = props =>{
  return(
    <View style={styles.wrapperTrip}>
      <View>
          <Text style={styles.image}>Image</Text>
          <Text>{props.title}</Text>
          <Text style={styles.price}>{props.price}</Text>
      </View>
    </View>
  )
}
export default Trip;
