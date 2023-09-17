import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AddTripScreen from "../screens/AddTripScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import TripExpensesScreen from "../screens/TripExpensesScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../config/firebase";
import { useEffect } from "react";
import { setUser } from '../redux/slices/user';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Got user: ", user);
      dispatch(setUser(user));
    });
  
    // Clean up the listener when the component unmounts
    return unsubscribe;
  }, []);

  if(user)
  {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AddTrip"
            component={AddTripScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AddExpense"
            component={AddExpenseScreen}
          />
          <Stack.Screen
            options={{ headerShown: false}}
            name="TripExpenses"
            component={TripExpensesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

  }
  else
  {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen
            options={{ headerShown: false}}
            name="WelcomeScreen"
            component={WelcomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false, presentation: 'modal'}}
            name="SignIn"
            component={SignInScreen}
          />
          <Stack.Screen
            options={{ headerShown: false, presentation: 'modal'}}
            name="SignUp"
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
