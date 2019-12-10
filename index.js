import React from 'react';
import { SafeAreaView } from 'react-native';
import FlatListDemo from './src';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <FlatListDemo />
      </SafeAreaView>
    );
  }
}