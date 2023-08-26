import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../theme";
import EmptyList from "../components/EmptyList";
import BackButton from "../components/BackButton";
import ExpenseCard from "../components/ExpenseCard";

const items = [
    {
        id: 1,
        title: 'ate sandwitch',
        amount: 4,
        category: 'food'
      },
      {
        id: 2,
        title: 'bought a jacket',
        amount: 50,
        category: 'shopping'
      },
      {
        id: 3,
        title: 'watched a movie',
        amount: 100,
        category: 'entertainment'
      }
];

function TripExpensesScreen(props) {
  const navigation = useNavigation();
  const { id, place, country } = props.route.params;

  return (
    <ScreenWrapper className="flex-1">
      <View className="px-4">
        <View className="relative mt-5">
          <View className="absolute top-2 left-0 z-10">
            <BackButton />
          </View>
        </View>
        <View>
            <Text className={`${colors.heading} text-2xl font-bold text-center`}>{place}</Text>
            <Text className={`${colors.heading} text-sm text-center`}>{country}</Text>
        </View>
        <View className="flex-row justify-center items-center rounded-xl mb-4">
          <Image
            source={require("../assets/images/7.png")}
            className="w-80 h-80"
          />
        </View>
        <View className="space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className={`${colors.heading} font-bold text-xl`}>
              Expenses
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddExpense")}
              className="p-2 px-3 bg-white border border-gray-200 rounded-full"
            >
              <Text className={colors.heading}>Add Expenses</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 430,
            }}
          >
            <FlatList
              data={items}
              ListEmptyComponent={
                <EmptyList message={"You haven't recorded any expenses yet"} />
              }
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              className="mx-1"
              renderItem={({ item }) => (
                <ExpenseCard item={item}/>
              )}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default TripExpensesScreen;
