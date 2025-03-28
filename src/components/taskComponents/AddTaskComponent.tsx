import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import CustomTextInput from "../CustomTextInput/CustomTextInput";
import { height, width } from "@/src/constants";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
  isIos,
  taskPriorityData,
  taskStatusData,
} from "@/src/utils/commonUtils";
import { Divider, List } from "react-native-paper";

const AddTaskComponent = () => {
  const router = useRouter();
  const [dropDownValue, setDropDownValue] = useState<boolean>(false);
  const [dropDown, setDropDown] = useState<{
    priorityDropDown: boolean;
    statusDropDown: boolean;
  }>({ priorityDropDown: false, statusDropDown: false });

  const onDropDownPress = (
    dropDownKey: "priorityDropDown" | "statusDropDown"
  ) => {
    setDropDown({ ...dropDown, [dropDownKey]: !dropDown[dropDownKey] });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <View className="min-h-[8%] bg-white px-3 border-b border-b-gray-500 flex-row items-center gap-x-2">
              <TouchableOpacity
                className="px-3 py-2"
                onPress={() => router.back()}
              >
                <FontAwesome6
                  name="arrow-left"
                  size={height / 34}
                  color="black"
                />
              </TouchableOpacity>
              <Text className="w-[80%] text-center capitalize font-semibold text-xl">
                add task
              </Text>
            </View>
          ),
        }}
      />
      <KeyboardAvoidingView
        behavior={isIos() ? "padding" : "height"}
        className="flex-1 px-5 justify-between"
        style={{ width }}
      >
        <View className="flex-1 gap-y-5">
          <CustomTextInput placeholder="Task Title" />
          <CustomTextInput placeholder="Task Description" />
          <View
            className={`${
              dropDown.priorityDropDown && "border border-black rounded-b-md"
            }`}
          >
            <List.Accordion
              title="Select Priority"
              expanded={dropDown.priorityDropDown}
              titleStyle={{ color: "black" }}
              style={[
                dropDown.priorityDropDown
                  ? {
                      borderBottomWidth: 0.5,
                      borderBottomColor: "black",
                    }
                  : { borderWidth: 1, borderColor: "black", borderRadius: 8 },
                { backgroundColor: "white" },
              ]}
              onPress={() => onDropDownPress("priorityDropDown")}
            >
              {taskPriorityData.map((item: string, index: number) => {
                return (
                  <View key={index}>
                    <List.Item
                      title={item}
                      titleStyle={{ textTransform: "capitalize" }}
                    />
                    {index < taskPriorityData.length - 1 && <Divider />}
                  </View>
                );
              })}
            </List.Accordion>
          </View>
          <View
            className={`${
              dropDown.statusDropDown && "border border-black rounded-b-md"
            }`}
          >
            <List.Accordion
              title="Select Status"
              expanded={dropDown.statusDropDown}
              titleStyle={{ color: "black" }}
              style={[
                dropDown.statusDropDown
                  ? {
                      borderBottomWidth: 0.5,
                      borderBottomColor: "black",
                    }
                  : { borderWidth: 1, borderColor: "black", borderRadius: 8 },
                { backgroundColor: "white" },
              ]}
              onPress={() => onDropDownPress("statusDropDown")}
            >
              {taskStatusData.map((item: string, index: number) => {
                return (
                  <View key={index}>
                    <List.Item
                      title={item}
                      titleStyle={{ textTransform: "capitalize" }}
                    />
                    {index < taskStatusData.length - 1 && <Divider />}
                  </View>
                );
              })}
            </List.Accordion>
          </View>

          {false && (
            <View className="">
              <Text className="capitalize text-red-500 text-sm font-medium">
                invalid email or password no user found with this email.
              </Text>
            </View>
          )}
        </View>
        <View className="flex-row justify-between mb-2 mt-2">
          <TouchableOpacity className="border w-[48%] py-5 items-center rounded-lg">
            <Text className="capitalize font-semibold">clear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-blue-500 w-[48%] py-5 items-center rounded-lg"
            // onPress={signUpBtnClicked}
          >
            <Text className="capitalize text-white font-semibold">
              create task
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddTaskComponent;
