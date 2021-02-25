import React from 'react'
import { Text } from 'react-native'
import Style from '../style'

import products from './products'

export default (props) => {

  function list() {
     return products.map (product => {
        return (
          <Text key={product.id}>
            ({product.id}) - {product.name} - R$: {product.price.toFixed(2)}
          </Text>
        )
     }) 
  }

  return (
    <>
      <Text style={Style.text}>Lista de Produtos</Text>
      {list()}
    </>
  )
}
