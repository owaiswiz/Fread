import { DrawerNavigator } from 'react-navigation';

import Home from '../../screens/Home';
import Settings from '../../screens/Settings';

const RootDrawerNavigator = DrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Settings: {
      screen: Settings,
    },
  }
);


export default RootDrawerNavigator; 
