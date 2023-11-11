import React, { useEffect, useState } from 'react'
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import { clearAllData, getItem, setItem } from '../../services/storageService';
import { useBoundStore } from '../../stores';
import Card from '../../components/Card/Card';
import { CARD_DUMMY_DATA } from '../../constants/DummyData';

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
    const handlePressChange = (price) => {
      console.log("Ahmed", addToCartZustand + price);
      setItem("aojani", addToCartZustand + price);
      setMyCount(price);
      setAddToCartZustand(addToCartZustand + price)
    };
  
    const handlePressClear = () => {
      console.log("Ahmed", null);
      clearAllData()
      setMyCount(0);
      setAddToCartZustand(0)
    };

const handlePressCallBack = (val) => {
    handlePressChange(val?.productPrice)
}
const handlePressRemovedCart = (price) => {
    console.log("Ahmed", addToCartZustand - price);
    if(addToCartZustand < price){
        setItem("aojani", 0);
        setMyCount(0);
        setAddToCartZustand(0)
    }
    else{
        setItem("aojani", addToCartZustand - price);
    setMyCount(price);
    setAddToCartZustand(addToCartZustand - price)
    }
    
  };
const handlePressRemoveCart = (val) => {
    handlePressRemovedCart(val?.productPrice)
}

const renderItem = ({item}) => {
    return(
        <Card item={item} cb={handlePressCallBack} cbRemoveCart = {handlePressRemoveCart}/>
    )
}

  return (
    <View style={styles.root}>
          <TouchableOpacity onPress={handlePressClear}>
        <Text>Clear</Text>
      </TouchableOpacity> 
        <FlatList 
        data={CARD_DUMMY_DATA}
        renderItem={renderItem}
        />
    {/* <Text>This is Ahmed{myCount}</Text>
      <TouchableOpacity onPress={handlePressChange}>
        <Text>Change</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressClear}>
        <Text>Clear</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    root: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
      }
})