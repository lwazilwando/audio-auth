import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Register from '../src/componets/register';
import Login from '../src/componets/login';
;
const screens = {
  Home_Audio : {
    screen: Login,
  },
  Register_Audio: {
    screen: Register,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
