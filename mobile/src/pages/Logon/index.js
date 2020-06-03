import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Picker } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Logon() {
    const navigation = useNavigation();
    const [city, setCity] = useState('');

    function navigateToEvents(city) {
        navigation.navigate('Events', { city });
    }

    function navigateToLogonOng() {
        navigation.navigate('LogonOng', {});
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

            </View>

            <View style={styles.logonBox}>
                <Picker
                    style={styles.pickerComponent}
                    selectedValue={city}
                    onValueChange={(itemValor, itemIndex) => setCity(itemValor)}>
                    <Picker.Item label="Escolha a cidade" value="" />
                    <Picker.Item label="Belo Horizonte, MG" value="Belo Horizonte, MG" />
                    <Picker.Item label="São Paulo, SP" value="São Paulo, SP" />
                    <Picker.Item label="Rio de Janeiro, RJ" value="Rio de Janeiro, RJ" />
                    <Picker.Item label="Vitória, ES" value="Vitória, ES" />

                </Picker>

                <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={() => navigateToEvents(city)}
                >
                    <Text style={styles.detailsButtonText}>Buscar eventos</Text>
                    <Feather name="arrow-right" size={16} color="#2D0073" />
                </TouchableOpacity>

            </View>

            <View style={styles.logonBox}>
                <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={() => navigateToLogonOng()}
                >
                    <Text style={styles.detailsButtonText}>Clique aqui para fazer login como ONG</Text>
                    <Feather name="arrow-right" size={16} color="#2D0073" />
                </TouchableOpacity>
            </View>
        </View>
    );
}