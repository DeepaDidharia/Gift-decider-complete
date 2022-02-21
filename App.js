import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './screens/Home';
import ResultScreen from './screens/Result';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Result: { screen: ResultScreen },
});

const AppContainer = createAppContainer(TabNavigator);

