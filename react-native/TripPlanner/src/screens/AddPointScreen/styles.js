import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
  },
  header:{ 
    height: 192, 
    backgroundColor: 'grey'
  },
  backButton:{
    position: 'absolute',
    top: 26,
    left: 16,
    padding: 10
  },
  tripName:{
    position: 'absolute',
    left: 16,
    bottom: 16
  },
  tripPrice:{
    position: 'absolute', 
    bottom: 16, 
    right: 32, 
    textAlign: 'right',
    backgroundColor: '#180079', 
    padding: 4, 
    color: 'white'
  },
  item:{
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 16
  },
  itemName:{
    fontWeight: 'bold',
    fontSize: 18,
  },
  wrapperItemPrice:{ 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingRight: 16
  },
  itemPrice:{
    textAlign: 'right', 
    color: '#24C6DC', 
    fontWeight: 'bold'
  },
  itemInfo: {
    flex: 1
  },
  input:{
    backgroundColor: '#EFE9E9',
    padding: 20,
    marginTop: 16
  },
  btn:{
    backgroundColor: '#EFE9E9',
    padding: 20,
    marginTop: 16,
  }
})

export default styles;