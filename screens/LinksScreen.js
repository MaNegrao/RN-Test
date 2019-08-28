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
    flex: 2,
    flexDirection:'row',
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
