import React from 'react'
import { View, Button, Text, TextInput } from 'react-native'
import style from '../style'

import Number from './Number'
export default class Mega extends React.Component {
  state = {
    qty: this.props.qty,
    numbers: []
  }

  changeQty = (qty) => {
    this.setState({ qty: +qty })
  }


  // Dá pra melhorar o desempenho disso daqui 
  gerateNumber = (nums) => {
    const newN = parseInt(Math.random() * 60 + 1)
    return nums.includes(newN) ? this.gerateNumber(nums) : newN
  }

  generateNumbers = () => {

    const { qty } = this.state
    const numbers = []

    for (let i = 0; i < qty; i++) {
      numbers.push(this.gerateNumber(numbers))
    }
    
    this.setState({ numbers })    
  }

  showNumbers = () => {
    const nums = this.state.numbers

    return nums.map(num => {
      return (
        <Number key={num} num={num} />
      )
    })
  }
  // generateNumbers = () => {
  //   const numbers = Array(this.state.qty)
  //     .fill()
  //     .reduce((n) => [...n, this.gerateNumber(n)], [])
  //     .sort((a, b) => a - b)

  //   console.log(numbers)

  //   this.setState({ numbers })
  // }

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     qty: props.qty
  //   }
  // }

  render() {
    return (
      <>
        <Text style={style.text}> Gerador de números da Mega-Sena!</Text>

        <TextInput
          keyboardType={'numeric'}
          style={{ borderBottomWidth: 1 }}
          placeholder='Digite quantos numeros vc quer gerar'
          value={`${this.state.qty}`}
          onChangeText={this.changeQty}
        />
        <Button title='Gerar numeros' onPress={this.generateNumbers}></Button>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.showNumbers()}
        </View>
      </>
    )
  }
}
