import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

function ScreenWrapper({children}) {
    let statusBarHeight = StatusBar.currentHeight? StatusBar.currentHeight : 40;
    return (
        <View style={{paddingTop: statusBarHeight}}>
            {children}
        </View>
    );
}

export default ScreenWrapper;