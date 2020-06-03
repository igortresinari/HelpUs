import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Header } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, TextInput, Alert, Picker, KeyboardAvoidingView } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function NewEvent() {
    const navigation = useNavigation();

    const route = useRoute();

    const id = route.params.id;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    function navigateBack() {
        navigation.goBack()
    }

    async function handleNewEvent(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            address,
            city
        };

        if ((title && description && address && city) !== '') {
            await api.post('events', data, {
                headers: {
                    Authorization: id,
                }
            })

            navigation.navigate('Home', { id });;
        } else {
            Alert.alert('Favor preencher todos os campos', [
                { text: 'OK', onPress: () => { } }
            ].message);
        }

    }

    return (
        <KeyboardAvoidingView 
        style={styles.container}
        >
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#2D0073"></Feather>
                </TouchableOpacity>
            </View>
            <View style={styles.event}>
                <Text style={styles.text}>Título do evento</Text>
                <TextInput style={styles.input}
                    onChangeText={(e) => setTitle(e)}
                ></TextInput>

                <Text style={styles.text}>Descrição</Text>
                <TextInput style={styles.input}
                    multiline
                    onChangeText={(e) => setDescription(e)}
                ></TextInput>

                <Text style={styles.text}>Endereço</Text>
                <TextInput style={styles.input}
                    onChangeText={(e) => setAddress(e)}
                ></TextInput>

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

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={handleNewEvent}>
                        <Text style={styles.actionText}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}