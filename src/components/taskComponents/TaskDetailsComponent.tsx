import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { height, width } from "@/src/constants";
import { singleTask } from "@/src/utils/dummyData";
import { colorBasedOnPriority } from "@/src/utils/commonUtils";

const TaskDetailsComponent = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const task = singleTask;

  const onDltBtnPress = () => {};

  const onEditBtnPress = () => {
    router.push({ pathname: "/(tasks)/updateTask", params: { ...task } });
  };

  return (
    <View className="flex-1 bg-white px-3">
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
                task details
              </Text>
            </View>
          ),
        }}
      />
      <View className="flex-1 my-2 gap-y-3">
        <View className="">
          <Text className="text-2xl capitalize font-semibold">
            {task.title}
          </Text>
        </View>
        <View className="flex-row gap-x-2" style={{ marginVertical: 10 }}>
          <Text
            className={`capitalize font-semibold text-[0.9rem] p-2 rounded-md`}
            style={{
              backgroundColor: "lightgray",
            }}
          >
            {task.status}
          </Text>
          <Text
            className={`capitalize font-semibold text-[0.9rem] p-2 rounded-md`}
            style={{
              backgroundColor:
                colorBasedOnPriority[
                  task.priority as "high" | "low" | "medium"
                ],
            }}
          >
            {task.priority}
          </Text>
        </View>
        <View className="">
          <Text className="capitalize text-lg font-medium">
            {task.description}
          </Text>
        </View>
        <View
          className="flex-row justify-between mb-2 mt-2"
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <TouchableOpacity
            className="border w-[48%] py-5 items-center rounded-lg"
            onPress={onDltBtnPress}
          >
            <Text className="capitalize font-semibold text-red-500">
              delete
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-blue-500 w-[48%] py-5 items-center rounded-lg"
            onPress={onEditBtnPress}
          >
            <Text className="capitalize text-white font-semibold">
              edit task
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaskDetailsComponent;
