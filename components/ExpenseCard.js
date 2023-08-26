import React from 'react';
import { View, Text } from 'react-native';
import { categoryBG, colors } from '../theme';

function ExpenseCard({item}) {
    return (
        <View style={{backgroundColor: categoryBG[item.category]}} className="flex-row justify-between items-center p-3 px-5 mb-3 bg-red-400 rounded-2xl">
            <View>
                <Text className={`${colors.heading} font-bold text-xl`}>{item.title}</Text>
                <Text className={`${colors.heading} text-sm`}>{item.category}</Text>
            </View>
            <View>
                <Text>{item.amount}</Text>
            </View>
        </View>
    );
}

export default ExpenseCard;