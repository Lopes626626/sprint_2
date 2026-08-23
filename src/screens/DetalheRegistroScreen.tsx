import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { ocorrenciaService } from '../services/ocorrenciaService';
import { RegistroIndustrial } from '../types/RegistroIndustrial';

export default function DetalheRegistroScreen({ route }: any) {
    const { id } = route.params;
    const [registro, setRegistro] = useState<RegistroIndustrial | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        const carregarDetalhes = async () => {
            try {
                setLoading(true);
                const dados = await ocorrenciaService.buscarPorId(id);
                setRegistro(dados);
            } catch (error) {
                setErro("Erro ao carregar detalhes. Verifique o servidor.");
            } finally {
                setLoading(false);
            }
        };

        carregarDetalhes();
    }, [id]);

    if (loading) return <ActivityIndicator size="large" color="#0000ff" style={styles.center} />;
    if (erro) return <Text style={styles.erroText}>{erro}</Text>;
    if (!registro) return <Text style={styles.center}>Registro não encontrado.</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Detalhes da Ocorrência {registro.id}</Text>
            
            {/* SUBSTITUA OS CAMPOS ABAIXO PELOS SEUS REAIS */}
            <Text style={styles.texto}>Campo 1: (Coloque sua variável)</Text>
            <Text style={styles.texto}>Campo 2: (Coloque sua variável)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    erroText: { color: 'red', textAlign: 'center', margin: 16 },
    titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
    texto: { fontSize: 18, marginBottom: 8 }
});