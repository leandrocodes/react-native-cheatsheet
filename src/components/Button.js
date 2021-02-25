import React from 'react'
import { Button } from 'react-native'

export default () => {
	function executar() {
		console.warn('exec!')
	}
	return (
		<>
			<Button title='Executar' onPress={executar} />
			<Button title='Executar' onPress={() => console.warn('exec2')} />
		</>
	)
}
