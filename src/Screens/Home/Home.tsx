import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import { clearAllData, getItem, setItem } from '../../services/storageService';
import { useBoundStore } from '../../stores';
//   import { clearAllData, getItem, setItem } from './src/services/storageService';

const Home = () => {
    const storedValue = getItem("aojani");
    const [myCount, setMyCount] = useState(storedValue);
    useEffect(() => {
        setAddToCartZustand(storedValue)
    },[])


    const {
        setAddToCartZustand,
        addToCartZustand
      } =useBoundStore()
    const handlePressChange = () => {
      const newRandomValue = Math.random() * 4;
      console.log("Ahmed", newRandomValue);
      setItem("aojani", newRandomValue);
      setMyCount(newRandomValue);
      setAddToCartZustand(newRandomValue)
    };
  
    const handlePressClear = () => {
      const newRandomValue = 0;
      console.log("Ahmed", newRandomValue);
      clearAllData()
      setMyCount(newRandomValue);
      setAddToCartZustand(newRandomValue)
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
  )
}

export default Home

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }
})