import { Redirect, useNavigation, useRouter } from "expo-router";
import { Text, View } from "react-native";
import "../../global.css";
import { PaperProvider } from "react-native-paper";

export default function Index() {
  return (
    <PaperProvider>
      <Redirect href={"/(auth)/login"} />
    </PaperProvider>
  );
}
