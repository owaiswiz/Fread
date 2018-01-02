import { Body, List, ListItem, Text, Thumbnail } from 'native-base';
import { StyleSheet } from 'react-native';
import React from 'react';

const data = [
  {
    image: 'http://notusedrn.com/assets/wdg.png',
    title: '/wdg/ - Web Development General',
    description: '>The #1 archived general on /g/\nMultiline text\nline #3\nline#4\nline#5\nine#6'
  },
  {
    image: 'http://notusedrn.com/assets/dpt.png',
    title: '/dpt/ - Daily Programming General',
    description: 'What are you working on today /g/ ?'
  }
];

export default class Threads extends React.Component {

  _renderRow = (thread) => {
    return (
      <ListItem style={styles.temp} >
        <Thumbnail square style={styles.thumbnailSize} source={require('../../assets/spoiler.png')} />
        <Body>
          <Text>{thread.title}</Text>
          <Text note>{thread.description}</Text>
        </Body>
      </ListItem>
    );
  }

  render() {
    return (
      <List dataArray={data} renderRow={ (thread) => this._renderRow(thread) } />
    );
  }
}

const styles = StyleSheet.create({
  temp: {
    alignItems: 'flex-start',
    backgroundColor: 'red',
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  thumbnailSize: {
    width: 70,
    height: 70,
  }
});
