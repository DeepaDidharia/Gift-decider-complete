import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
} from 'react-native';

export default class Help extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'yellow' }}>
        <Text style={{ backgroundColor: 'red' }}> Help</Text>
        <Text> You need help to work with this app. Alright!!!  Here we go</Text>
        <Text> First, thinkof any two things as gift bax 1 and gift box 2 . Then, go to any person and ask them to choose any one . That's it. You found the thing you needed </Text>
      </View>
    );
  }
}
