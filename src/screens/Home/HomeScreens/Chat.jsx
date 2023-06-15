import React from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import SI from 'react-native-vector-icons/dist/SimpleLineIcons';
import Io from 'react-native-vector-icons/dist/Ionicons';
import FA from 'react-native-vector-icons/dist/FontAwesome';

export default function Chat() {
    return (
        <View className='bg-white flex-1'>
            <Navbar />

            <ScrollView>
                <MessageLeft name={'Keshav'} message={'Hello'} image={require('../../../../assets/images/avatar.png')} />
                <MessageRight name={'Keshav'} message={'Hello'} image={require('../../../../assets/images/avatar.png')} />
            </ScrollView>
            <MessageBar />

        </View>
    )
}


const MessageBar = () => {
    return (
        <View className='absolute bottom-0 w-[100%] bg-white'>
            <View className='pb-2 py-2'>
                <View className='px-3 mx-4 rounded-lg bg-[#F6F6F6]'>
                    <View className='flex-row items-center'>
                        <Io name='add-circle-outline' size={37} />
                        <TextInput className='p-[10px] text-lg flex-1' placeholder="Type a message" autoCapitalize='none' />
                        <FA name='send' size={25} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const MessageRight = ({ name, message, time, image }) => {
    return (
        <View className='flex-row-reverse justify-between items-center my-3 mx-2'>
            <View className='flex flex-row items-start'>
                <View className='mx-1'>
                    <Text className='font-semibold text-lg text-black'>{name}</Text>
                    <View className='p-3 px-4 rounded-r-xl rounded-bl-xl bg-[#F6F6F6]'><Text className='text-black font-[Aeonik-Regular]'>{message}</Text></View>
                </View>
                <View className=''><Image className='w-16 h-16' source={image} /></View>
            </View>
        </View>
    )
}

const MessageLeft = ({ name, message, time, image }) => {
    return (
        <View className='flex-row justify-between items-center my-3 mx-2'>
            <View className='flex flex-row items-start'>
                <View className=''><Image className='w-16 h-16' source={image} /></View>
                <View className='mx-1'>
                    <Text className='font-semibold text-lg text-black'>{name}</Text>
                    <View className='p-3 px-4 rounded-r-xl rounded-bl-xl bg-[#F6F6F6]'><Text className='text-black font-[Aeonik-Regular]'>{message}</Text></View>
                </View>
            </View>
        </View>
    )
}


const Navbar = () => {
    return (
        <View className='py-[5px] px-3 border-b-[0.5px] border-[#DEDEDE] flex flex-row justify-between items-center'>


            <View className='flex-row items-center'>
                <View><Io name='arrow-back' size={29} /></View>
                <View className=''><Image className='w-14 h-14' source={require('../../../../assets/images/avatar.png')} /></View>
                <View>
                    <Text className='font-bold text-lg text-black'>Design Team</Text>
                    <Text className='text-[#B2B2B2] font-[Aeonik-Regular]'>12 members</Text>
                </View>
            </View>

            <View className='flex flex-row justify-between items-center'>
                <View className='mx-1'><Feather name='search' size={29} /></View>
                <View className='ml-1'><SI name='options-vertical' size={23} /></View>
            </View>

        </View>
    )
}