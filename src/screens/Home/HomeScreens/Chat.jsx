import React from 'react';
import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import SI from 'react-native-vector-icons/dist/SimpleLineIcons';

export default function Chat() {
    return (
        <>
            <View className='flex flex-row justify-between'>

                <View>
                    <View></View>
                    <View>
                        <Text className='font-bold text-xl'>Design Team</Text>
                        <Text className='text-[#B2B2B2]'>12 members</Text>
                    </View>
                </View>

                <View className='flex flex-row justify-between'>
                    <Feather name='search' size={29} />
                    <SI name='options-vertical' size={29} />
                </View>

            </View>
        </>
    )
}