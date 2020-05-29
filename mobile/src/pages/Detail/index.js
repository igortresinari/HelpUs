import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const event = route.params.event;

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
                <Text style={[styles.eventProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.eventValue}>{event.name}</Text>

                <Text style={styles.eventProperty}>EVENTO:</Text>
                <Text style={styles.eventValue}>{event.title}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.eventDescription}>Entre em contato</Text>
                <View style={styles.actions}>
                    <TouchableOpacity
                        style={styles.action}
                        onPress={() => { }}
                    >
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}