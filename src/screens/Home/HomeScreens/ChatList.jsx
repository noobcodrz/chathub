import { View, Text, TextInput,Image } from 'react-native'
import React from 'react'

const Card = ({time,name})=> {
    return (
        <View className="flex">
            <View>
                <Image source={{uri: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=80'}}
                className="w-5 h-5" /> 
            </View>
            <View className="flex flex-row justify-between">
                <Text >{name}</Text>
                <Text>{time}</Text>
            </View>
        </View>
    )
}

export default function ChatList() {
    return (
        <View className="flex m-4 ">
            <View className="flex flex-row justify-between m-2">
                <Text className="text-lg text-[#262D25]">Messages</Text>
                <Text className="text-lg text-[#262D25]">Icons</Text>
            </View>
            <View>
                <TextInput className="bg-[#F6F6F6] mx-3 mt-2" placeholder='Search' />
            </View>

            <View>
                <Card time="1hr ago" name="Pranjal" />
            </View>
        </View>
    )
}