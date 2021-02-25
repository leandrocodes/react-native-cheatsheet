import React from 'react'
import { View, StyleSheet } from 'react-native'

// import First from './components/First'
// import Comp1, { Comp2, Comp3 } from './components/Multi'
// import MinMax from './components/MinMax'
// import RandomMinMax from './components/RandomMinMax'
// import Title from './components/Title'
// import Button from './components/Button'
// import Counter from './components/Counter'

import Parent from './components/undirect/Parent'

export default () => (
	<View style={style.App}>
		{/* <First></First>
		<Comp1></Comp1>
		<Comp2></Comp2>
		<Comp3></Comp3>
		<MinMax min={3} max={4}></MinMax> 
		<RandomMinMax min={10} max={20}></RandomMinMax> 
		<Title main='title' sub='subtitle'></Title> 
		<Button />
		<Counter inicial={500} step={10}></Counter>*/}
		<Parent></Parent>
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
