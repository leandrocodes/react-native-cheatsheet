import React from 'react'
import { FlatList, Text } from 'react-native'
import Style from '../style'

import products from './products'

export default (props) => {
  return (
    <>
      <Text style={Style.text}>Lista de Produtos 2</Text>

      <FlatList
        data={products}
        keyExtractor={(i) => `${i.id}`}
        renderItem={({ item: product }) => {
          return (
            <Text>
              {product.id} - {product.name}
            </Text>
          )
        }}
      />
    </>
  )
}
