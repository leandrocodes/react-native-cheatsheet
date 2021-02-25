import React, { useState } from 'react'
import { Text } from 'react-native'
// import Style from './style'

import Child from './Child'

export default () => {
	const [num, setNum] = useState(0)
	const [txt, setTxt] = useState('')

	function showN(number, text) {
		setNum(number)
		setTxt(text)
	}
	return (
		<>
			<Text>
				{txt}
				{num}
			</Text>
			<Child min={1} max={60} func={showN} />
		</>
	)
}
