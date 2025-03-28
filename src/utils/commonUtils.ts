import { Platform } from "react-native";

export const colorBasedOnPriority = {
  high: "rgba(244, 67, 54, 0.50)",
  medium: "rgba(255, 235, 59, 0.50)",
  low: "rgba(76, 175, 80, 0.50)",
};

export const isIos = () => (Platform.OS === "ios" ? true : false);

export const taskPriorityData = ["high", "medium", "low"];
export const taskStatusData = ["pending", "in progress", "completed"];
