import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Register';
const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Handle login logic here
      console.log('Logging in...');
      console.log('Email:', email);
      console.log('Password:', password);
    };
    return (
        <View className="bg-green flex-1 justify-center align-center">
        <View className='bg-white p-4 m-4 rounded-lg'>
          <Text className='text-2xl font-bold mb-4 text-dGreen text-center'>Login</Text>
          <TextInput
            className='w-full h-10 bg-gray-100 mb-2 px-2'
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            className='w-full h-10 bg-gray-100 mb-2 px-2'
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          <View>
          <Button color="#17594A" className="bg-dGreen rounded-md" title="Login" onPress={handleLogin} />
          <Text onPress={()=>{navigation.navigate('Register')}} className="text-dGreen cursor-pointer">Register?</Text>
          </View>
        </View>
        </View>
        
      );
    };
    
    export default Login;
