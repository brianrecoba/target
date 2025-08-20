import { Button, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { fontFamily } from "@/theme/fontFamily";

export default function Transaction() {
  const params = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{ color: "#000", fontFamily: fontFamily.bold, fontSize: 60 }}
      >
        ID: {params.id}
      </Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
