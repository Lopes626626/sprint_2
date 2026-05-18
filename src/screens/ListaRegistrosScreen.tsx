import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useState } from "react";

import RegistroCard from "../components/RegistroCard";
import { registrosMock } from "../data/registrosMock";
import { RegistroIndustrial } from "../types/RegistroIndustrial";

export default function ListaRegistrosScreen({ navigation }: any) {
  const [registros] = useState<RegistroIndustrial[]>(registrosMock);

  return (
    <View style={styles.container}>
      <Button
        title="Novo Registro"
        onPress={() => navigation.navigate("Cadastro")}
      />

      <FlatList
        data={registros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RegistroCard
            registro={item}
            onPress={() =>
              navigation.navigate("Detalhe", {
                registro: item,
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});