import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import Home from './Home';
export default class Result extends React.Component {
   constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  componentDidMount() {}

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <View style={{ backgroundColor:'yellow'}}>
        <Text
          style={{
            fontSize: 35,
            backgroundColor: 'red',
            textAlign: 'center',
          }}>
          {' '}
          Results
        </Text>
        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 30 }}>
          {' '}
          Hi user .......
        </Text>
        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 10 }}>
          {' '}
          Glad to see you
        </Text>
        <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 10 }}>
          {' '}
          you will see the number of times you have choose a gift box here
        </Text>
        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 30 }}>
          {' '}
          Gift Box 1 : <Text> {this.state.counter}</Text>
        </Text>
        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 30 }}>
          {' '}
          Gift Box 2 :<Text> {this.state.counter}</Text>
        </Text>

        <ImageBackground
          source={require('../assets/gift2.png')}
          style={{
            width: 190,
            height: 160,
            borderColor: 'tomato',
            borderWidth: 5,
            borderRadius: 18,
            marginLeft: 70,
            marginTop: 30,
          }}>
          >
        </ImageBackground>
      </View>
    );
  }
}
