import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { StackNavigator } from "react-navigation";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import Home from "./screen/Home";

const RouteStack = StackNavigator(
  {
    LoginPage: {
      screen: Login,
      headerMode: "none",
      header: null,
      navigationOptions: {
        header: null
      }
    },
    SignupPage: {
      screen: Signup,
      headerMode: "none",
      header: null,
      navigationOptions: {
        header: null
      }
    },
    HomePage: {
      screen: Home,
      headerMode: "none",
      header: null,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "HomePage"
  }
);

export default RouteStack;
