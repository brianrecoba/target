import { View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target";
import { List } from "@/components/List";

const summary = {
  total: "R$ 2.680,00",
  input: { label: "Entradas", value: "R$ 6.184,90" },
  output: { label: "Saídas", value: "- R$ 883.65" },
};

const targets = [
  {
    id: "1",
    name: "Comprar uma cadeira ergonomica",
    current: "R$ 900,00",
    percentage: "75%",
    target: "R$ 1.200,00",
  },
  {
    id: "2",
    name: "AppleWatch",
    current: "R$ 580,00",
    percentage: "50%",
    target: "R$ 1.790,00",
  },
  {
    id: "3",
    name: "Fazer uma viagem para o RJ",
    current: "R$ 1.200,00",
    percentage: "75%",
    target: "R$ 3.000,00",
  },
];
export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />

      <List
        title="Metas"
        keyExtractor={(item) => item.id}
        data={targets}
        renderItem={(item) => <Target data={targets[0]} />}
        emptyMessage="Nenhuma meta. Clique em criar nova meta."
        containerStyle={{ paddingHorizontal: 24 }}
      />
    </View>
  );
}
