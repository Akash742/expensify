import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../theme';

function Loading(props) {
    return (
        <View className="flex-1 justify-center items-center py-8">
            <ActivityIndicator size="large" color={colors.button}/>
        </View>
    );
}

export default Loading;