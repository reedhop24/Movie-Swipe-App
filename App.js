  
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';
import Swipe from './components/swipe';
import MovieDetails from './components/movieDetails';
import LikedMovies from './components/likedMovies';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Swipe,
    navigationOptions: {
      title: 'Movies',
      headerStyle: {
        backgroundColor: '#FF652F',
      },
      headerTitleStyle: {
        fontFamily: 'Verdana-Bold',
        color: 'white',
        fontSize: 30
      }
    },
  },
  Details: {
    screen: MovieDetails,
    navigationOptions: {
      title: 'Details',
      headerStyle: {
        backgroundColor: '#FF652F',
      },
      headerTitleStyle: {
        fontFamily: 'Verdana-Bold',
        color: 'white',
        fontSize: 30
      }
    },
  },
  LikedMovies: {
    screen: LikedMovies,
    navigationOptions: {
      title: 'Movie Queue',
      headerStyle: {
        backgroundColor: '#FF652F',
      },
      headerTitleStyle: {
        fontFamily: 'Verdana-Bold',
        color: 'white',
        fontSize: 30
      }
    },
  }
}
);

export default createAppContainer(AppNavigator);