import React from 'react'
import { Button } from 'react-native'

export default props => {
	function generateN(min, max) {
		return parseInt(Math.random() * (max - min + 1) + min)
	}

	return (
		<Button
			title='Executar'
			onPress={() => {
				const n = generateN(props.min, props.max)
				props.func(n, 'O valor é: ')
			}}
		/>
	)
}
