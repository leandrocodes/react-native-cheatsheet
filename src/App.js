import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import FlexboxV1 from './components/layout/FlexboxV1'

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
// import UserLogged from './components/UserLogged'
// import ProductList from './components/products/ProductList'
// import ProductListV2 from './components/products/ProductListV2'
// import TypeYourName from './components/TypeYourName'
// import Flexbox from './components/layout/FlexboxV1'
// import FlexboxV2 from './components/layout/FlexboxV2'
import FlexboxV3 from './components/layout/FlexboxV3'


export default () => (
  <SafeAreaView style={style.App}>
		<FlexboxV3></FlexboxV3>
    {/* 
		<FlexboxV2></FlexboxV2>
		<FlexboxV1></FlexboxV1>
		<TypeYourName />
		<First></First>
		<Comp1></Comp1>
		<Comp2></Comp2>
		<Comp3></Comp3>
		<MinMax min={3} max={4}></MinMax> 
		<RandomMinMax min={10} max={20}></RandomMinMax> 
		<Title main='title' sub='subtitle'></Title> 
		<Button />
		<Counter inicial={500} step={10}></Counter>
		<Parent></Parent>
		<Counter></Counter>
		<Diference></Diference>
		<EvenOrOdd></EvenOrOdd>
		<EvenOrOdd num={5}></EvenOrOdd>
		<EvenOrOdd num={13}></EvenOrOdd>
		<Parent>
			<Child nome="Bia" sobrenome="Pereira"></Child>
			<Child nome="Ana" sobrenome="Pereira"></Child>
		</Parent>
		<Parent>
			<Child nome="Julia" sobrenome="Silva"></Child>
		</Parent>
			<UserLogged user={ {name: 'Leandro', email: 'leandroviana@gmail.com'} }></UserLogged>
			<UserLogged user={ {name: 'Leandro'} }></UserLogged>
			<ProductList></ProductList>
			<ProductListV2></ProductListV2>
		*/}
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
