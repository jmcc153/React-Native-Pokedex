import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Account from '../screens/Account'

const stack = createNativeStackNavigator()

export default function AccountNavigation() {
  return (
    <stack.Navigator>
      <stack.Screen name="Account" component={Account} options={{title: 'Mi Cuenta'}} />
    </stack.Navigator>
  )
}