import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../theme';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';

function AddTripScreen(props) {
    const[ place, setPlace ] = useState('');
    const[ country, setCountry ] = useState('');

    const navigation = useNavigation();

    const handleAddTrip = () => {
        if(place && country)
        {
            //Good to Go
            console.log("Place: ", place);
            console.log("Country: ", country);
            
            navigation.navigate('Home');
        }
        else
        {
            //Show Error
        }
    }
    return (
        <ScreenWrapper>
            <View className="flex justify-between h-full mx-4">
                <View className="relative mt-2">
                    <View className="absolute top-0 left-0">
                        <BackButton/>
                    </View>
                    <Text className={`${colors.heading} text-xl font-bold text-center`}>Add Trips</Text>
                    <View className="flex-row justify-center items-center my-3 mt-5">
                        <Image className="w-72 h-72" source={require('../assets/images/4.png')}/>
                    </View>
                    <View classsName="space-y-2 mx-2">
                        <Text className={`${colors.heading} font-bold text-lg`}>Where on Earth?</Text>
                        <TextInput value={place} onChangeText={value => setPlace(value)} className="p-2 bg-white rounded-full mb-3"/>
                        <Text className={`${colors.heading} font-bold text-lg`}>Which Country?</Text>
                        <TextInput value={country} onChangeText={value => setCountry(value)} className="p-2 bg-white rounded-full mb-3"/>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={handleAddTrip} style={{backgroundColor: colors.button}} className="rounded-full p-3 my-6 mx-2 shadow-sm">
                        <Text className={`${colors.heading} font-bold text-xl text-white text-center`}>Add Trip</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    );
}

export default AddTripScreen;