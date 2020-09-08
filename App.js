import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigators/StackNavigator';

// Redux

import {Provider} from 'react-redux';

import {store} from './store';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
