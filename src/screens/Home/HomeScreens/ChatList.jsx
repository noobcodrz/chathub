import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function ChatList() {
    return (
        <View className="flex mt-2 p-3">
            <View className="flex flex-row justify-between m-2">
                <Text className="text-lg">Messages</Text>
                <Text className="text-lg">Icons</Text>
            </View>
            <View>
                <TextInput className="border-2 border-red-400">
                    <Text className="flex flex-row ">Hello</Text>
                </TextInput>
            </View>
        </View>
    )
}