import React from 'react'
import { Platform, Text } from 'react-native'
import Style from './style'

export default () => {
  if (Platform.OS === 'android') return <Text style={Style.text}>Android</Text>
  else if (Platform.OS === 'ios') return <Text style={Style.text}>IOS</Text>
  else return <Text style={Style.text}>Vish</Text>
}
