import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View>
        <Text>THIS IS INSIDE Settings screen</Text>
        <Button
          onPress={ () => this.props.navigation.navigate('Home') }
          title="Goto Home" 
        />

      </View>
    );
  }
}
