import { View, Text, TextInput,Image } from 'react-native'
import React from 'react'
import SLI from 'react-native-vector-icons/dist/SimpleLineIcons'

const Card = ({time,name,msg})=> {
    return (
        <View className="flex flex-row mt-4 pb-3 mx-1">
            <View>
                <Image source={require("../../../../assets/images/avatar.png")}
                className="w-14 h-14" />
            </View>
            <View className="flex-1 justify-start">
                <View className="flex flex-row justify-between">
                    <Text className="text-lg text-[#262D25] font-medium">{name}</Text>
                    <Text className="mt-[2]">{time}</Text>
                </View>
                <View>
                    <Text>
                        <Text className="font-medium">You: </Text>
                        {msg}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default function ChatList() {
    return (
        <View className="flex-1 bg-[#FFF]">
            <View className="flex m-3  ">
                <View className="flex flex-row justify-between m-2 items-center">
                    <Text className="text-lg text-[#262D25] font-bold ">Messages</Text>
                    <SLI name='options-vertical' size={20} />
                </View>
                <View>
                    <TextInput className="bg-[#F6F6F6] m-2 px-2" placeholder='Search' />
                </View>

                <View className="flex">
                    <Text className="text-[#B2B2B2] mt-2 mx-2">Joined</Text>
                    <Card time="1hr ago" name="Pranjal" msg="hello" />
                    
                    <Card time="1hr ago" name="Pranjal" msg="bye" />
                    <Text className="text-[#B2B2B2] mt-2 mx-2">Recommended</Text>
                    <Card time="1hr ago" name="Pranjal" msg="see you soon" />
                </View>
            </View>
        </View>
    )
}