import React from 'react'
import LoginForm from '../components/Auth/LoginForm'
import UserData from '../components/Auth/UserData'
import { View } from 'react-native'
import useAuth from '../hooks/useAuth'
const Account = () => {
  const {user} = useAuth()
  return (
    <View>
      {user ? <UserData/> : <LoginForm/>}
    </View>
  )
}

export default Account
