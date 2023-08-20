import React from 'react';
import { View, Text, Image } from 'react-native';

function EmptyList({message}) {
    return (
        <View className="flex justify-center items-center my-5 space-y-3">
            <Image source={require('../assets/images/empty.png')} className="w-36 h-36"/>
            <Text className="font-bold text-gray-400">{message || `Data Not Found`}</Text>
        </View>
    );
}

export default EmptyList;