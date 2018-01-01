import { Container } from 'native-base';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Header from '../components/header/Header';

export default class HomeScreen extends Component {

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <Container> 
        <Header navigation={this.props.navigation} />
        <Threads />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  redBg: {
    backgroundColor: 'red',
  }
});
