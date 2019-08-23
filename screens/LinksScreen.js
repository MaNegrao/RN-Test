import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Counter from '../components/Counter';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
