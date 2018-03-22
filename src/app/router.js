import { StackNavigator } from 'react-navigation';

// components
import Splash from '../components/splash';
import Home from '../components/home';

const AppNavigator = StackNavigator({
    Splash: { screen: Splash },
    Home: { screen: Home },
},
    {
        initialRouteName: 'Splash',
    }
);

export default AppNavigator;
