import { AppRegistry } from 'react-native-web';
import App from './App';

const rootTag = document.getElementById('root');

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag });
