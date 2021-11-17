import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator}from "@react-navigation/stack";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Home from "./Screens/Home";
import  ProductDetails  from './Screens/ProductDetails';
import  Cart  from './Screens/Cart';
import  CartCount  from './Constants/CartCount';
import  CartContext  from './Constants/CartContext'; 

export default function App(){
  const MainNavigator = createStackNavigator ();    

return(     
  <View style={{ flex: 1}} >       
    <NavigationContainer>         
      <MainNavigator.Navigator initailRouteName="Login">           
      <MainNavigator.Screen name="Login" component={Login}/>           
      <MainNavigator.Screen name="Home" component={Home}/>           
      <MainNavigator.Screen name="SignUp" component={SignUp}/>
      <MainNavigator.Screen name="ProductDetails" component={ProductDetails}/>
      <MainNavigator.Screen name="Cart" component={Cart}/>
      <MainNavigator.Screen name="CartCount" component={CartCount}/> 
      <MainNavigator.Screen name="CartContext" component={CartContext}/>    
      </MainNavigator.Navigator>           
      </NavigationContainer>
      </View>
);
}
