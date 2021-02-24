import React from 'react'
import { View, StyleSheet } from 'react-native'

// import First from './components/First'
// import Comp1, { Comp2, Comp3 } from './components/Multi'
import MinMax from './components/MinMax'

export default () => (
	<View style={style.App}>
		{/* <First></First>
		<Comp1></Comp1>
		<Comp2></Comp2>
		<Comp3></Comp3> */}

		<MinMax min={3} max={4}></MinMax>
	</View>
)

const style = StyleSheet.create({
	App: {
		flexGrow: 1,
		backgroundColor: '#aa99ee',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 50
	}
})
