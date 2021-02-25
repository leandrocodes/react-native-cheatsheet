import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

// import First from './components/First'
// import Comp1, { Comp2, Comp3 } from './components/Multi'
// import MinMax from './components/MinMax'
// import RandomMinMax from './components/RandomMinMax'
// import Title from './components/Title'
// import Button from './components/Button'
// import Counter from './components/Counter'
// import Parent from './components/undirect/Parent'
// import Counter from './components/counter/Counter'
// import Diference from './components/Diference'
// import EvenOrOdd from './components/EvenOrOdd'
// import Parent from './components/relation/Parent'
// import Child from './components/relation/Child'

import UserLogged from './components/UserLogged'

export default () => (
	<SafeAreaView style={style.App}>
		{/* <First></First>
		<Comp1></Comp1>
		<Comp2></Comp2>
		<Comp3></Comp3>
		<MinMax min={3} max={4}></MinMax> 
		<RandomMinMax min={10} max={20}></RandomMinMax> 
		<Title main='title' sub='subtitle'></Title> 
		<Button />
		<Counter inicial={500} step={10}></Counter>
		<Parent></Parent>
		*/}
		{/* <Counter></Counter> */}

		{/* <Diference></Diference> */}

		{/* <EvenOrOdd></EvenOrOdd>
		<EvenOrOdd num={5}></EvenOrOdd>
		<EvenOrOdd num={13}></EvenOrOdd> */}

		{/* <Parent>
			<Child nome="Bia" sobrenome="Pereira"></Child>
			<Child nome="Ana" sobrenome="Pereira"></Child>
		</Parent>
		<Parent>
			<Child nome="Julia" sobrenome="Silva"></Child>
		</Parent> */}

			<UserLogged user={ {name: 'Leandro', email: 'leandroviana@gmail.com'} }></UserLogged>
			<UserLogged user={ {name: 'Leandro'} }></UserLogged>

	</SafeAreaView>
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
