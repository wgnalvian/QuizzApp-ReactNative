import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './pages/route';
import {store} from './redux/store';
import {Provider} from 'react-redux';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Route />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
