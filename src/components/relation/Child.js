import React from 'react'
import { View, Text } from 'react-native'
import Style from '../style'

export default props => {

  return (
    <Text style={Style.text}>{props.nome} {props.sobrenome}</Text>
   )
}