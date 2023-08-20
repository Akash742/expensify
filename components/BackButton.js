import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { colors } from '../theme';
import { useNavigation } from '@react-navigation/native';

function BackButton() {
    const navigation = useNavigation();

    return (    
        <TouchableOpacity onPress={() => navigation.goBack()} className="bg-white rounded-full w-9 h-9">
            <ChevronLeftIcon size={35} color={colors.button}/>
        </TouchableOpacity>
    );
}

export default BackButton;