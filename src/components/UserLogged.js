import React from 'react'
import { Text } from 'react-native'
import Style from './style'
import If from './If'

export default ({ user = {} }) => {
  return (
    <>
      <If test={user && user.name && user.email}>
        <Text style={Style.text}>Usuario Logado:</Text>
        <Text style={Style.text}>{user.name} - {user.email}</Text>
      </If>
    </>
   )
}