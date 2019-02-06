import {StyleSheet} from 'react-native';
import {  Dimensions } from 'react-native';

const dim = Dimensions.get('window');

export default style = StyleSheet.create({
  wrapperTrip:{
    paddingTop: 16,
    paddingLeft: 16, 
    paddingRight: 16,
    backgroundColor: 'white',
    paddingBottom: 16,
  },
  image:{
    backgroundColor: 'green', 
    width: dim.width-32, 
    height: 144, 
    marginBottom: 6,
  },
  price:{
    position: 'absolute', 
    top: 110, 
    right: 32, 
    textAlign: 'right',
    backgroundColor: '#180079', 
    padding: 4, 
    color: 'white'
  }
})