import { Text, View, Button } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>In Progress {params.id}</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
