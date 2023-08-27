import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../theme';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';

function SignInScreen(props) {
    const[ email, setEmail ] = useState('');
    const[ password, setPassword ] = useState('');

    const navigation = useNavigation();

    const handleSubmit = () => {
        if(email && password)
        {
            //Good to Go
            console.log("Email: ", email);
            console.log("Password: ", password);
            
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
                <View className="relative">
                    <View className="absolute top-0 left-0">
                        <BackButton/>
                    </View>
                    <Text className={`${colors.heading} text-xl font-bold text-center`}>Sign In</Text>
                    <View className="flex-row justify-center items-center my-3 mt-5">
                        <Image className="w-72 h-72" source={require('../assets/images/login.png')}/>
                    </View>
                    <View classsName="space-y-2 mx-2">
                        <Text className={`${colors.heading} font-bold text-lg`}>Email</Text>
                        <TextInput value={email} onChangeText={value => setEmail(value)} className="p-2 bg-white rounded-full mb-3"/>
                        <Text className={`${colors.heading} font-bold text-lg`}>Password</Text>
                        <TextInput value={password} secureTextEntry onChangeText={value => setPassword(value)} className="p-2 bg-white rounded-full mb-3"/>
                        <TouchableOpacity className="flex-row justify-end">
                            <Text>Forget Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: colors.button}} className="rounded-full p-3 my-6 mx-2 shadow-sm">
                        <Text className={`${colors.heading} font-bold text-xl text-white text-center`}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    );
}

export default SignInScreen;