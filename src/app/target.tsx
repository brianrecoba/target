import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Target() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#000" }}>Target Component</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
