import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function LogonOng() {
    const [id, setId] = useState('');

    const navigation = useNavigation();

    function navigateToRegister() {
        navigation.navigate('Register', {});
    }

    function navigateToHome(id) {
        navigation.navigate('Home', { id });
        
    }

    function navigateBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#2D0073"></Feather>
                </TouchableOpacity>
            </View>
            <View style={styles.event}>
                <Text style={styles.text}>Digite o ID para realizar Seu Login</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => setId(e)}
                ></TextInput>

                <View style={styles.actions}>
                    <TouchableOpacity
                        style={styles.action}
                        onPress={() => navigateToHome(id)}>
                        <Text style={styles.actionText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={() => navigateToRegister()}
                >
                    <Text style={styles.detailsButtonText}>Não possui conta? Clique para cadastrar</Text>
                    <Feather name="arrow-right" size={16} color="#2D0073" />
                </TouchableOpacity>
            </View>
        </View>
    );
}