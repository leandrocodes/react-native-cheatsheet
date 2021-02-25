import React from 'react'
import { View } from 'react-native'
// import Style from './style'

export default ({ color }) => {
  return <View style={{ height: 50, width: 50, backgroundColor: color || '#000' }}></View>
}
