/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { clearAllData, getItem, setItem } from './src/services/storageService';

function App(): JSX.Element {
  const storedValue = getItem("aojani");
  const [myCount, setMyCount] = useState(storedValue);

  const handlePressChange = () => {
    const newRandomValue = Math.random() * 4;
    console.log("Ahmed", newRandomValue);
    setItem("aojani", newRandomValue);
    setMyCount(newRandomValue);
  };

  const handlePressClear = () => {
    const newRandomValue = 0;
    console.log("Ahmed", newRandomValue);
    clearAllData()
    setMyCount(newRandomValue);
  };

  return (
    <View style={styles.root}>
      <Text>This is Ahmed{myCount}</Text>
      <TouchableOpacity onPress={handlePressChange}>
        <Text>Change</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressClear}>
        <Text>Clear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
