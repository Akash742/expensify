import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../theme";
import BackButton from "../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { categories } from "../constants/index";

function AddExpenseScreen(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const navigation = useNavigation();

  const handleAddExpense = () => {
    if (title && amount && category) {
      //Good to Go
      console.log("Item: ", title);
      console.log("Amount: ", amount);
      console.log("Category:", category);

      navigation.goBack();
    } else {
      //Show Error
    }
  };
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View className="relative mt-2">
          <View className="absolute top-0 left-0">
            <BackButton />
          </View>
          <Text className={`${colors.heading} text-xl font-bold text-center`}>
            Add Expense
          </Text>
          <View className="flex-row justify-center items-center my-3 mt-5">
            <Image
              className="w-72 h-72"
              source={require("../assets/images/4.png")}
            />
          </View>
          <View classsName="space-y-2 mx-2">
            <Text className={`${colors.heading} font-bold text-lg`}>
              For what?
            </Text>
            <TextInput
              value={title}
              onChangeText={(value) => setTitle(value)}
              className="p-2 bg-white rounded-full mb-3"
            />
            <Text className={`${colors.heading} font-bold text-lg`}>
              How much?
            </Text>
            <TextInput
              value={amount}
              onChangeText={(value) => setAmount(value)}
              className="p-2 bg-white rounded-full mb-3"
            />
          </View>
          <View className="mx-2 space-x-2">
            <Text className="text-lg font-bold">Category</Text>
            <View className="flex-row items-center flex-wrap">
              {categories.map((cat) => {
                let bgColor = "bg-white";
                if(cat.value === category)
                {
                    bgColor = "bg-green-200";
                }
                return (
                  <TouchableOpacity onPress={() => setCategory(cat.value)} key={cat.value} className={`rounded-full ${bgColor} p-3 px-4 mb-2 mr-2`}>
                    <Text>{cat.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleAddExpense}
            style={{ backgroundColor: colors.button }}
            className="rounded-full p-3 my-6 mx-2 shadow-sm"
          >
            <Text
              className={`${colors.heading} font-bold text-xl text-white text-center`}
            >
              Add Expense
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default AddExpenseScreen;
