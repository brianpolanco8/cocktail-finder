import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Search} from '../screens';

const AppStack = createStackNavigator();

const StackNavigator = () => (
  <AppStack.Navigator initialRouteName="Home" headerMode="none">
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Search" component={Search} />
  </AppStack.Navigator>
);

export default StackNavigator;
