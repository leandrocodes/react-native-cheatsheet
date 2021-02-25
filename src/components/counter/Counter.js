import React, { useState } from 'react'
import { Text } from 'react-native'
import Style from '../style'

import CounterDisplay from './CounterDisplay'
import CounterButtons from './CounterButtons'

export default _ => {
	const [num, setNum] = useState(0)

	const inc = () => setNum(num + 1)
	const dec = () => setNum(num - 1)

	return (
		<>
			<Text style={Style.text}>Contador V2</Text>
			<CounterDisplay num={num}></CounterDisplay>
			<CounterButtons inc={inc} dec={dec}></CounterButtons>
		</>
	)
}
