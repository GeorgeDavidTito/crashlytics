import Routes from '../constants/routes';
import { blue, white } from '../constants/colors';

import I18n from './i18n';

// Default nav options for all screens
const defaultNavOptions = ({ navigation }) => ({
  // Change screen title from i18n traslates files
  title: I18n.t(`app:${navigation.state.routeName}`),

  // TODO: The following options are examples. Change them to your need
  headerStyle: {
    backgroundColor: blue
  },
  headerBackTitleStyle: {
    color: white
  },
  headerTitleStyle: {
    color: white
    // TODO: If you want to change the header font, apply these options
    // Replace the font with the need
    // See: https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e
    // fontWeight: 'normal',
    // fontFamily: 'Lato-Bold'
  },
  headerTintColor: white
});

export const screensNavOptions = {
  // TODO: Add here the screens nav options that changes with respect to
  // the default ones defined in defaultNavOptions, for example...
  /*
  [Routes.Home]: {
    title: 'Home'
  },
  [Routes.Login]: {
    header: null
  }
  */
  [Routes.InitialLoading]: {
    header: null,
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0
    }
  }
};

export const stackNavConfig = {
  navigationOptions: defaultNavOptions
  // TODO: Change other options for the router to your need:
  // See: https://reactnavigation.org/docs/stack-navigator.html#stacknavigatorconfig
};
