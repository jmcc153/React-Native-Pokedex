import { View, Text, TextInput, Button,Keyboard, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import {user, userDetails} from '../../utils/userDB'
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
  console.log(useAuth().user)
  const [error, setError]= useState(null)
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      userName: '',
      password: '',
    }
  });
  const {login} = useAuth()
  const onSubmit = (data) => {
    const {userName, password} = data

    if(userName !== user.username || password !== user.password){
      setError("El usuario o la contraseña no son correctos")
    }
    else{
      login(userDetails)
    }
  }

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput placeholder="Usuario" onBlur={onBlur} onChangeText={onChange} value={value} style={styles.input} autoCapitalize='none' />
        )}
        name="userName"
        />
        {errors.userName && <Text style={styles.error}>Este campo es requerido</Text>}
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput placeholder="Contraseña" style={styles.input} autoCapitalize='none' secureTextEntry={true} onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.error}>Este campo es requerido</Text>}
        <Button title="Iniciar sesión" onPress={handleSubmit(onSubmit)} />
        <Text style={styles.error}>{error}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input:{
    height: 40,
    margin:12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error:{
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  }
})
