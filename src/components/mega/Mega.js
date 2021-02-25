import React from 'react'
import { Text, TextInput } from 'react-native'
import style from '../style'

export default class Mega extends React.Component {
  state = {
    qty: this.props.qty
  }

  changeQty(qty) {
    this.setState({qty})
  }

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
        <Text style={style.text}> Geraremos para você {this.state.qty}</Text>

        <TextInput
          keyboardType={'numeric'}
          style={ {borderBottomWidth: 1} }
          placeholder='Digite quantos numeros vc quer gerar'
          value={this.state.qty}
          onChangeText={qty => this.changeQty(qty)}
        />
      </>
    )
  }
}
