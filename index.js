/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RootRoute from './src/navigation/RootRoute';

AppRegistry.registerComponent(appName, () => RootRoute);
