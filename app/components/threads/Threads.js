import {
  Badge,
  Body,
  List,
  ListItem,
  Text,
  Thumbnail,
  View,
} from 'native-base';
import { StyleSheet } from 'react-native';
import React from 'react';

import { getThreads } from '../../api/Threads';
import { parseText  } from '../../support/TextParser';

export default class Threads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async getThreads() {
    const threads = await getThreads("g");
    this.setState({threads});
  }

  _renderRow = (thread) => {
    return (
      <ListItem style={styles.temp} >
        <Thumbnail square style={styles.thumbnailSize} source={{uri: thread.thumbnailURL}} />
        <Body>
          <View style={styles.textContainer} >
            <Text style={styles.title} >{thread.title}</Text>
            <Text note style={styles.no} >No.{thread.no} Created {thread.createdAt}</Text>
            <Text>{parseText(thread.text)}</Text>   
            <View style={styles.badgesContainer} >
              <Badge primary style={styles.badges}>
                <Text>{thread.noOfReplies} replies</Text>
              </Badge>
              <Badge success style={styles.badges}>
                <Text>{thread.noOfImages} images</Text>
              </Badge>
            </View>
          </View>
        </Body>
      </ListItem>
    );
  }

  render() {
    if(this.state.threads)
      return (
        <List dataArray={this.state.threads} renderRow={ (thread) => this._renderRow(thread) } />
      );
    else {
      this.getThreads();
      return null;
    }
  }
}

const styles = StyleSheet.create({
  temp: {
    alignItems: 'flex-start',
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  thumbnailSize: {
    width: 70,
    height: 70,
  },
  textContainer: {
    padding: 5,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
  flexRow: {
    flexDirection: 'row',
  },
  no: {
    fontSize: 9,
    paddingBottom: 5,
  },
  badgesContainer: {
    padding: 5,
    flexDirection: 'row',
  },
  badges: {
    marginRight: 10,
  }
});
