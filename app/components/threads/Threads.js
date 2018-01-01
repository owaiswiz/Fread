import { Body, List, ListItem, Text, Thumbnail } from 'native-base';
import React from 'react';

const data = [
  {
    image: 'http://notusedrn.com/assets/wdg.png',
    title: '/wdg/ - Web Development General',
    description: '>The #1 archived general on /g/'
  },
  {
    image: 'http://notusedrn.com/assets/dpt.png',
    title: '/dpt/ - Daily Programming General',
    description: 'What are you working on /g/ ?'
  }
];

export default class Threads extends React.Component {

  _renderRow = (thread) => {
    return (
      <ListItem>
        <Thumbnail square source={require('../../assets/spoiler.png')} />
        <Body>
          <Text>{thread.title}</Text>
          <Text note>{thread.description}</Text>
        </Body>
      </ListItem>
    );
  }

  render() {
    return (
      <List dataArray={data} renderRow={ (thread) => this._renderRow(thread) } >
      </List>
    );
  }
}
