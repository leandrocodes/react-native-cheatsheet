import React from 'react'
import { Text } from 'react-native'
import Style from '../style'

export default props => {
	return <Text style={Style.text}>{props.num}</Text>
}
