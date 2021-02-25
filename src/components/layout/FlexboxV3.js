import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'


export default props => {
  return (
    <View style={style.flexV3}>
      <Square color={'#281D27'}></Square>
      <Square color={'#EEBE3F'}></Square>
      <Square color={'#F8F3F3'}></Square>
      <Square color={'#713B7C'}></Square>
      <Square color={'#314EAF'}></Square>
    </View>
   )
}

const style = StyleSheet.create({
  flexV3: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 350,
    width: '100%',
    backgroundColor: '#00000030'
  }
})