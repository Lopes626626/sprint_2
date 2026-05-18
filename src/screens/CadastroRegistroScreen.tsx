import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function CadastroRegistroScreen({ navigation }: any) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  function salvarRegistro() {
    alert("Registro criado com sucesso!");

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Descrição"
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
      />

      <Button title="Salvar Registro" onPress={salvarRegistro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
});