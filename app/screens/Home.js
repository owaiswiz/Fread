import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Header from '../components/header/Header';
import Threads from '../components/threads/Threads';

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
        <Content>
          <Threads />
        </Content>
      </Container>
    );
  }
}
