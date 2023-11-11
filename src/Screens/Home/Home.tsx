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
import { STORAGE_KEYS } from '../../constants/QureyKeys';

const Home = () => {
    const storedValue = getItem(STORAGE_KEYS.CART_ITEM);
    const {
        setAddToCartZustand,
        addToCartZustand
    } = useBoundStore();

    useEffect(() => {
        setAddToCartZustand(storedValue)
    }, [])

    const handlePressChange = (price) => {
        setItem(STORAGE_KEYS.CART_ITEM, addToCartZustand + price);
        setAddToCartZustand(addToCartZustand + price)
    };

    const handlePressClear = () => {
        clearAllData()
        setAddToCartZustand(0)
    };

    const handlePressCallBack = (val) => {
        handlePressChange(val?.productPrice)
    }
    const handlePressRemovedCart = (price) => {
        if (addToCartZustand < price) {
            setItem(STORAGE_KEYS.CART_ITEM, 0);
            setAddToCartZustand(0)
        }
        else {
            setItem(STORAGE_KEYS.CART_ITEM, addToCartZustand - price);
            setAddToCartZustand(addToCartZustand - price)
        }
    };
    const handlePressRemoveCart = (val) => {
        handlePressRemovedCart(val?.productPrice)
    }

    const renderItem = ({ item }) => {
        return (
            <Card item={item} cb={handlePressCallBack} cbRemoveCart={handlePressRemoveCart} />
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
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    root: {
        flex: 1,
    }
})