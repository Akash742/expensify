import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { colors } from "../theme";
import ScreenWrapper from "../components/ScreenWrapper";
import { useNavigation } from "@react-navigation/native";

function WelcomeScreen(props) {
    const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View className="h-full flex justify-around">
        <View className="flex-row justify-center mt-10">
          <Image
            source={require("../assets/images/welcome.gif")}
            className="w-96 h-96 shadow"
          />
        </View>
        <View className="mx-5 mb-20">
          <Text
            className={`${colors.heading} text-center text-4xl font-bold mb-10`}
          >
            Expensify
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")} style = {{ backgroundColor: colors.button}} className="rounded-full p-3 mb-5 shadow">
            <Text className="text-center text-lg font-bold text-white">Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style = {{ backgroundColor: colors.button}} className="rounded-full p-3 shadow">
            <Text className="text-center text-lg font-bold text-white">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default WelcomeScreen;
