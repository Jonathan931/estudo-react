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
    paddingBottom: 200,
  },
  textWelcome:{
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 32,
  },
  button: {
    backgroundColor: 'white',
    paddingBottom: 16,
    paddingTop: 16
  }
})