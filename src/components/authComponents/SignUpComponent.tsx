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

const SignUpComponent = () => {
  const router = useRouter();
  const signUpBtnClicked = () => {
    router.navigate("/(home)/homeScreen");
  };
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center">
      <KeyboardAvoidingView>
        <View className="h-[40%] justify-end pb-[3rem] px-5" style={{ width }}>
          <Text className="text-4xl capitalize mb-1 font-semibold">
            Welcome!
          </Text>
          <Text className="text-2xl font-medium">
            Join Taskify and get started!
          </Text>
        </View>
        <View className="h-[70%] px-5 py-5 gap-y-5 " style={{ width }}>
          <CustomTextInput placeholder="Name" />
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
              onPress={signUpBtnClicked}
            >
              <Text className="capitalize text-white font-semibold">
                signup
              </Text>
            </TouchableOpacity>
          </View>
          <View className="items-center">
            <Text className="capitalize text-sm w-[100%] text-center">
              by creating an account, you accept our{" "}
              <Text
                className="text-blue-500 underline font-bold text-sm normal-case"
                onPress={() => {}}
              >
                t & c policies.
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpComponent;
