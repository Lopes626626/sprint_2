import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import { ocorrenciaService } from '../services/ocorrenciaService';

export default function CadastroRegistroScreen({ navigation }: any) {
    // ATENÇÃO: Crie os estados de acordo com os atributos do seu RegistroIndustrial
    const [campoExemplo1, setCampoExemplo1] = useState('');
    const [campoExemplo2, setCampoExemplo2] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSalvar = async () => {
        try {
            setLoading(true);
            
            // Monta o objeto Omit<RegistroIndustrial, 'id'>
            const novaOcorrencia = {
                // substitua pelas suas variaveis reais aqui:
                atributo1: campoExemplo1,
                atributo2: campoExemplo2
            };

            await ocorrenciaService.criar(novaOcorrencia as any);
            Alert.alert("Sucesso", "Registro criado com sucesso!");
            navigation.goBack(); // Volta para a lista
        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar o registro no backend.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Campo 1 (Altere o nome):</Text>
            <TextInput 
                style={styles.input} 
                value={campoExemplo1} 
                onChangeText={setCampoExemplo1} 
            />

            <Text style={styles.label}>Campo 2 (Altere o nome):</Text>
            <TextInput 
                style={styles.input} 
                value={campoExemplo2} 
                onChangeText={setCampoExemplo2} 
            />

            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <Button title="Salvar Ocorrência" onPress={handleSalvar} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    label: { fontSize: 16, marginBottom: 8, fontWeight: 'bold' },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 16, borderRadius: 4 }
});