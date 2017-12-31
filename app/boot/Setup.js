import { Platform, StyleSheet, View } from 'react-native';
import Expo, { Constants } from 'expo';
import React, { Component } from "react";

import Main from '../Main';

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <View style={styles.main}>
        <Main />
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  main: {
    ...Platform.select({
      android: {
        marginTop: Constants.statusBarHeight,
      }
    }),
    flex: 1,
  },

});
