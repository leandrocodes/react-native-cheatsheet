import React from 'react'
import { Text } from 'react-native'

export default props => {
	return (
		<Text>
			O numero gerado é: {Math.random() * (props.max - props.min) + props.min}
		</Text>
	)
}
