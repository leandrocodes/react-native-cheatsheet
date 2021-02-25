import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import Style from './style'

export default ({ inicial, step }) => {
	const [numero, setNumero] = useState(inicial)

	return (
		<>
			<Text style={Style.text}>{numero}</Text>
			<Button title='Inc' onPress={() => setNumero(numero + step)}></Button>
			<Button title='Dec' onPress={() => setNumero(numero - step)}></Button>
		</>
	)
}
