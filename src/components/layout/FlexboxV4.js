import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'

export default (props) => {
  return (
    <View style={style.flexV4}>
      <View style={style.v0}></View>
      <View style={style.v1}></View>
      <View style={style.v2}></View>
    </View>
  )
}

const style = StyleSheet.create({
  flexV4: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#00000030'
  },
  v0: {
    height: 150,
    backgroundColor: '#ABD2CC'
  },
  v1: {
    flexGrow: 2,
    backgroundColor: '#4D9165'
  },
  v2: { flexGrow: 1, backgroundColor: '#BB3C44' }
})
