import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
  Image,
  StyleSheet
} from 'react-native';
import Result from './Result';
import Help from './help';


export default class Home extends React.Component {
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
      <View style={{ backgroundColor: 'yellow' }}>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 35,
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            Choose any one('-')
          </Text>{' '}



          <Button title="Instructions" 
          onPress={() => this.props.navigation.navigate('Help')}></Button>



          {''}




          <ImageBackground
            source={require('../assets/gift.png')}
            style={{
              width: 200,
              height: 170,
              borderColor: 'tomato',
              borderWidth: 5,
              borderRadius: 18,
              marginLeft: 70,
              marginTop: 30,
            }}>
            {' '}
          </ImageBackground>
          <Button
            onPress={this.incrementCounter}
            title="Gift Box 1"
            color="tomato"></Button>
          <ImageBackground
            source={require('../assets/gift.png')}
            style={{
              width: 200,
              height: 170,
              borderColor: 'tomato',
              borderWidth: 5,
              borderRadius: 18,
              marginLeft: 70,
              marginTop: 30,
            }}>
            {' '}
          </ImageBackground>
          <Button
            onPress={this.incrementCounter}
            title="Gift Box 2"
            color="tomato"
            style={{ marginTop: 30 }}></Button>{' '}
          <Text style={{ marginTop: 30 }}>
            ......................................................................................................
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

