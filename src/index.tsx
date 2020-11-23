import { AppRegistry } from 'react-native';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Itim:300,400,700', 'cursive', 'Muli', 'sans-serif']
  }
});

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });
