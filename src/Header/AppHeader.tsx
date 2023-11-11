import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useBoundStore } from '../stores'

const AppHeader = () => {
    const{addToCartZustand} = useBoundStore()
  return (
    <View>
      <Text>AppHeader {addToCartZustand}</Text>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({})