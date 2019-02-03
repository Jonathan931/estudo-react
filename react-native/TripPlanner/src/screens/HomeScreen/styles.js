import {StyleSheet} from 'react-native';

export default style = StyleSheet.create({
  background: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: 'stretch', 
    justifyContent: 'space-between'
  },
  wrapperLogo: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingBottom: 100,
  },
  textWelcome:{
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  textSizeWelcome:{
    fontSize: 24,
  },
  button: {
    backgroundColor: 'white',
    paddingBottom: 16,
    paddingTop: 16
  },
  buttonText: {
    textAlign: 'center', 
    fontSize: 18,
  },
  pin:{
    marginBottom: 16,
    marginTop: 16,
  },
  arrow: {
    marginTop: 16
  },
  buttonEmpty: {
    backgroundColor: 'white',
    paddingBottom: 16,
    paddingTop: 16,
    alignItems: 'center',
  },
  buttonTextEmpty: {
    textAlign: 'center', 
    fontSize: 18,
    width: 200
  }
})