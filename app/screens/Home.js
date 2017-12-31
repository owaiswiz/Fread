import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base';
import { StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <Container> 
        <Header>
          <Left>
            <Button transparent onPress={ () => this.props.navigation.navigate('DrawerOpen') }>
            <Icon android='md-menu' ios='ios-menu' style={{fontSize:30}} />
          </Button>
        </Left> 
        <Body>
          <Title>
            Browse
          </Title>
        </Body>
        <Right />
      </Header>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  redBg: {
    backgroundColor: 'red',
  }
});
