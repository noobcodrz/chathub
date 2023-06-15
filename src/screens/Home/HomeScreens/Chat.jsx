import React from 'react';
import { View, Text, Image } from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import SI from 'react-native-vector-icons/dist/SimpleLineIcons';

export default function Chat() {
    return (
        <>
            <View className='py-4 px-3 border-b-[0.5px] border-[#DEDEDE] flex flex-row justify-between items-center'>

                <View className='flex-row items-center'>
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
        </>
    )
}