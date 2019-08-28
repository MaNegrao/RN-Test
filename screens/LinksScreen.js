import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Counter from '../components/Counter';
import { isNullLiteralTypeAnnotation, isPipelineBareFunction } from '@babel/types';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <Counter />
      <Counter />
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Counter',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#b5f7e8',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
