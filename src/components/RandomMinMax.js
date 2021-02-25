import React from 'react'
import { Text } from 'react-native'
import Style from './style'
export default props => {
	const aleatorio = Math.random() * (props.max - props.min) + props.min

	return <Text style={Style.text}>O numero gerado é: {aleatorio}</Text>
}
