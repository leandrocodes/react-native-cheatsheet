import React from 'react'
import { Text } from 'react-native'
import Style from '../style'

import products from './products'

export default (props) => {
  return (
    <>
      <Text style={Style.text}>Lista de Produtos</Text>
      {products.map((product) => {
        return (
          <Text>
            ({product.id}) - {product.name} - R$: {product.price.toFixed(2)}
          </Text>
        )
      })}
    </>
  )
}
