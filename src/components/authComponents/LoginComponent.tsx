import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { width } from "@/src/constants";
import CustomTextInput from "../CustomTextInput/CustomTextInput";

const LoginComponent = () => {
  const router = useRouter();
  const navigateToSignUp = () => {
    router.navigate("/(auth)/signUp");
  };
  const loginBtnClick = () => {
    router.navigate("/(home)/homeScreen");
  };

  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center">
      <KeyboardAvoidingView>
        <View className="h-[40%] justify-end pb-[3rem] px-5" style={{ width }}>
          <Text className="text-4xl capitalize mb-1 font-semibold">hello,</Text>
          <Text className="text-2xl font-medium">
            Welcome back to taskify login
          </Text>
        </View>
        <View className="h-[70%] px-5 py-5 gap-y-5 " style={{ width }}>
          <CustomTextInput placeholder="Email" keyboardType="email-address" />
          <CustomTextInput
            placeholder="Password"
            maxLength={8}
            rightIcon="eye"
          />
          {false && (
            <View className="">
              <Text className="capitalize text-red-500 text-sm font-medium">
                invalid email or password no user found with this email.
              </Text>
            </View>
          )}
          <View className="flex-row justify-between mb-2 mt-2">
            <TouchableOpacity className="border w-[48%] py-5 items-center rounded-lg">
              <Text className="capitalize font-semibold">clear</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-blue-500 w-[48%] py-5 items-center rounded-lg"
              onPress={loginBtnClick}
            >
              <Text className="capitalize text-white font-semibold">login</Text>
            </TouchableOpacity>
          </View>
          <View className="items-center">
            <Text className="capitalize">
              don't have an account?{" "}
              <Text
                className="text-blue-500 underline font-bold"
                onPress={navigateToSignUp}
              >
                sign up{" "}
              </Text>
              in seconds!
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginComponent;
