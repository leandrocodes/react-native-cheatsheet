import React from 'react'
import { Text, View } from 'react-native'
import Style from './style'

export default ({ num = 0 }) => {
  return (
    <View>
      <Text style={Style.text}>{num % 2 === 0 ? 'Par' : 'Ímpar'}</Text>
    </View>
  )
}
