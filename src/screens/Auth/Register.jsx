import { View, TextInput, Button, Text } from 'react-native';
import React, { useState } from 'react';
import Login from './Login';
  const Register = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = () => {
      // Handle registration logic here
      console.log('Registering...');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
    };
    return (
        <View className='bg-green flex-1 justify-center align-cente'r>ß <View className=' flex-1 justify-center items-center bg-white p-6'>
      <Text className='text-3xl font-semibold  mb-4 text-green-700'>Register</Text>
      <TextInput
        className='w-full h-10 bg-gray-100 mb-2 px-2 hover:border-green-800 '
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />
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
      {/* <Button title="Register" onPress={handleRegister}/> */}
        <View className="flex-13 flex-row gap-2">
          <Button color="#17594A" title="Register" onPress={handleRegister} />
          <Text onPress={()=>{navigation.navigate('Login')}} className="text-dGreen cursor-pointer">Login?</Text>
        </View>
        </View>
    </View>
    )
    }
    export default Register;