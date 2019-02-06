import { createAppContainer, createStackNavigator } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen';
import TripsScreen from './src/screens/TripsScreen';
import TripScreen from './src/screens/TripScreen';
import AddTripScreen from './src/screens/AddTripScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Trips: TripsScreen,
  Trip: TripScreen,
  AddTrip: AddTripScreen,
},{ initialRouteName: 'AddTrip' })

export default createAppContainer(AppNavigator);