import { View, Text, StyleSheet } from "react-native";

export default function DetalheRegistroScreen({ route }: any) {
  const { registro } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{registro.nome}</Text>

      <Text>Descrição: {registro.descricao}</Text>

      <Text>Status: {registro.status}</Text>

      <Text>Data: {registro.data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});