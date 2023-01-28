import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App() {
  const ui = (
    <SafeAreaView style={styles.main}>
      <View style={styles.sub}>
        <Text>My First saritha</Text>
       
      </View>
    </SafeAreaView>
  );
  return ui;
}

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'red',
  },
  sub: {
    flex: 1,
    // backgroundColor: 'blue',
  },
});