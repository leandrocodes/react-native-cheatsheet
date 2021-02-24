import React from 'react'
import { View } from 'react-native'

import First from './components/First'
import Comp1, { Comp2, Comp3 } from './components/Multi'
export default () => (
	<View>
		<First></First>
		<Comp1></Comp1>
		<Comp2></Comp2>
		<Comp3></Comp3>
	</View>
)
