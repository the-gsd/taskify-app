import {
  View,
  Text,
  Button,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import { tasks } from "@/src/utils/dummyData";
import { colorBasedOnPriority, isIos } from "@/src/utils/commonUtils";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { height } from "@/src/constants";
import { tasksType } from "@/src/types/TaskDataTypes";
import { AnimatedFAB } from "react-native-paper";

const HomeScreenComponent = () => {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [isExtended, setIsExtended] = useState(true);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  };

  const onScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  const onTaskItemPress = (item: tasksType) => {
    router.push({
      pathname: "/(tasks)/[id]",
      params: { id: item._id },
    });
  };

  const onAddTaskBtnPress = () => {
    router.navigate("/(tasks)/addTask");
  };

  // const fabStyle = { [animateFrom]: 16 };

  return (
    <View className="flex-1 px-3 bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <View className="min-h-[8%] bg-white px-3 border-b border-b-gray-500 flex-row items-center justify-between">
              <Text className="capitalize font-semibold text-xl">home</Text>
              <TouchableOpacity className="px-3 py-2">
                <MaterialIcons name="logout" size={height / 34} color="black" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => item._id?.toString()}
        showsVerticalScrollIndicator={false}
        className="mt-2"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onScroll={onScroll}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              className={`bg-white border border-gray-400 my-2 gap-y-2 p-3 rounded-xl ${
                isIos() ? "shadow-sm" : "shadow-lg"
              }`}
              activeOpacity={0.6}
              onPress={() => onTaskItemPress(item)}
            >
              <View className="flex-row items-center justify-between">
                <Text
                  className="w-[80%] capitalize font-semibold text-lg py-1"
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
                <Text
                  className={`capitalize font-semibold text-[0.9rem] p-2 rounded-md`}
                  style={{
                    backgroundColor: colorBasedOnPriority[item.priority],
                  }}
                >
                  {item.status}
                </Text>
              </View>
              <Text
                className={`capitalize font-md text-[1rem] tracking-wide`}
                numberOfLines={3}
              >
                {item.description}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <AnimatedFAB
        icon={"plus"}
        label={"Add task"}
        extended={isExtended}
        onPress={onAddTaskBtnPress}
        visible={true}
        animateFrom={"right"}
        iconMode={"dynamic"}
        style={[styles.fabStyle]}
      />
    </View>
  );
};

export default HomeScreenComponent;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 20,
    right: 16,
    position: "absolute",
  },
});
