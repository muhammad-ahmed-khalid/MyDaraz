import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Card = ({item , cb,cbRemoveCart}) => {
    const {productImage, productName, productPrice} = item || {}
  return (
    <View style={styles.mainWrapper}>
           <TouchableOpacity onPress={() => cbRemoveCart(item)}>
        <Text>Remove To Cart</Text>
        </TouchableOpacity>
      <Image 
        source={{
            uri: productImage
          }}
     style={styles.image}/>
     <View style={styles.textWrapper}>
        <Text>{productName}</Text>
        <TouchableOpacity onPress={() => cb(item)}>
        <Text>${productPrice}</Text>
        <Text>Add To Cart</Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    mainWrapper:{
        width: '100%',
        padding: 20
    },
    image:{
        width: '100%',
        height: 150
    },
    textWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})