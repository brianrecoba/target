import { Button, Text, View } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#000" }}>Olá</Text>
      <Button title="Nova Meta" onPress={() => router.navigate("/target")} />
      <Button
        title="Transação"
        onPress={() => router.navigate("/transaction/3234")}
      />
      <Button
        title="Progresso"
        onPress={() => router.navigate("/in-progress/12")}
      />
    </View>
  );
}
