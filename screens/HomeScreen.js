import React, { useState, useEffect } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../theme";
import randomImage from "../assets/images/randomImage";
import EmptyList from "../components/EmptyList";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth, tripsRef } from '../config/firebase'
import { useSelector } from "react-redux";
import { getDocs, query, where } from "firebase/firestore";

const items = [
    {
      id: 1, 
      place: 'Gujarat', 
      country: 'India'
    },
    {
      id: 2, 
      place: 'London Eye',
      country: 'England',
    },
    {
      id: 3, 
      place: 'Kolkata',
      country: 'India',
    },
    {
      id: 4, 
      place: 'New york',
      country: 'America'
    }
  ]

function HomeScreen(props) {
  const navigation = useNavigation();
  const {user} = useSelector(state => state.user);

  const [ trips, setTrips ] = useState(items);

  const isFocused = useIsFocused();

  const fetchTrips = async() => {
    const q = query(tripsRef, where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    let data = [];

    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), id: doc.id});
    })

    setTrips(data);
  }

  useEffect(() => {
    if(isFocused)
    {
      fetchTrips();
    }
  }, [isFocused])

  const handleLogout = async() => {
    await signOut(auth);
  };

  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row items-center justify-between p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity onPress={handleLogout} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require("../assets/images/banner.png")}
          className="w-60 h-60"
        />
      </View>
      <View className="px-4 space-y-3">
        <View className="flex-row justify-between items-center">
            <Text className={`${colors.heading} font-bold text-xl`}>Recent Trips</Text>
            <TouchableOpacity onPress={() => navigation.navigate("AddTrip")} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
                <Text className={colors.heading}>Add Trips</Text>
            </TouchableOpacity>
        </View>
        <View style={{
            height: 430,
        }}>
            <FlatList
                data={trips}
                numColumns={2}
                ListEmptyComponent={<EmptyList message={"You haven't added any trips yet"}/>}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={
                    {
                        justifyContent: 'space-between'
                    }
                }
                className="mx-1"
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("TripExpenses", {...item})} className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
                        <View>
                            <Image source={randomImage()} className="w-36 h-36"/>
                            <Text className={`${colors.heading} font-bold`}>{item.place}</Text>
                            <Text className={`${colors.heading} text-xs`}>{item.country}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default HomeScreen;