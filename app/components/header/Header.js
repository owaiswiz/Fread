import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

export default class CustomHeader extends React.Component {
  
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    return (
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
    );
  }
}
