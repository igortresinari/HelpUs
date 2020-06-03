import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, TextInput, Alert} from 'react-native';
import { Formik } from 'formik';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Register() {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    function navigateBack() {
        navigation.goBack()
    }

    async function handleRegister(e) {
        e.preventDefault();

        const data = ({
            name,
            email,
            whatsapp
        })

        if((name && email && whatsapp) !== '') {
            const response = await api.post('ongs', data);

            Alert.alert(`Sua ID de acesso: ${response.data.id}`, [
                {text: 'OK', onPress: () =>{}}
            ].message);
            
            navigateBack();
        } else  {
            Alert.alert('Favor preencher todos os campos', [
                {text: 'OK', onPress: () =>{}}
            ].message);
        }
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
                <Text style={styles.text}>Insira o nome da ONG</Text>
                <TextInput style={styles.input}
                onChangeText={(e) => setName(e)}
                ></TextInput>

                <Text style={styles.text}>Insira o Email</Text>
                <TextInput style={styles.input}
                onChangeText={(e) => setEmail(e)}
                ></TextInput>

                <Text style={styles.text}>Insira o Whats App</Text>
                <TextInput style={styles.input}
                keyboardType = "numeric"
                onChangeText={(e) => setWhatsapp(e)}
                ></TextInput>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={handleRegister}>
                        <Text style={styles.actionText}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}