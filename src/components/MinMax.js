import React from 'react'
import { Text } from 'react-native'

import Style from './style'

export default props => {
	console.warn(props)
	return (
		<Text style={Style.text}>
			O valor {props.max} é maior que o valor {props.min}
		</Text>
	)
}
