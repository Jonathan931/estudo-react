import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';

const Trip = props =>{
  return( 
    <TouchableOpacity onPress={props.onPress} style={styles.wrapperTrip}>
      <View>
        <ImageBackground 
            style={styles.image} 
            source={props.image}>
            {/* imageStyle={{ resizeMode: 'stretch' }}>  */}
          <Text style={styles.name}>{props.title}</Text>
          <Text style={styles.price}>R$ {props.price.toFixed(2)}</Text>
         </ImageBackground> 
      </View>
    </TouchableOpacity>
  )
}
export default Trip;
