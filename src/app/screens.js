// https://github.com/react-community/react-navigation/issues/458
// once that issue is resolved, the initial loading screen is no longer needed and should be removed
//  in favour of setting the initialRoute as a prop of the navigator

import { createStackNavigator } from 'react-navigation';

import Routes from '../constants/routes';
import { stackNavConfig, screensNavOptions  } from '../config/navigation';

import InitialLoading from './screens/InitialLoading';
import Login from './screens/Login';
import Home from './screens/Home';

export default createStackNavigator(
  {
    [Routes.InitialLoading]: {
      screen: InitialLoading,
      navigationOptions: screensNavOptions[Routes.InitialLoading]
    },
    [Routes.Login]: {
      screen: Login,
      navigationOptions: screensNavOptions[Routes.Login]
    },
    [Routes.Home]: {
      screen: Home,
      navigationOptions: screensNavOptions[Routes.Home]
    }
  },
  stackNavConfig
);
