import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Home() {
    const [events, setEvents] = useState([]);

    const navigation = useNavigation();

    const route = useRoute();

    const id = route.params.id;

    function navigateToDetail(event) {
        navigation.navigate('Detail', { event });
    }

    function navigateToEventRegister(id) {
        navigation.navigate('NewEvent', { id });
    }

    function navigateBack() {
        navigation.goBack()
    }

    useEffect(() => {
        api.get('events', {
            headers: {
                Authorization: id,
            }
        }).then(response => {
            setEvents(response.data)
        })
    }, [id]);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#2D0073"></Feather>
                </TouchableOpacity>
                
            </View>

            <View style={styles.actions}>
                    <TouchableOpacity
                        style={styles.action}
                        onPress={() => navigateToEventRegister(id)}>
                        <Text style={styles.actionText}>Criar evento</Text>
                    </TouchableOpacity>
                </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            {/*<Text style={styles.description}>Escolha um dos eventos para participar.</Text>*/}

            <FlatList
                data={events.filter(function (item) {
                    return item.ong_id === id;
                })}
                style={styles.eventList}
                keyExtractor={event => String(event.id)}
                showsVerticalScrollIndicator={false}

                renderItem={({ item: event }) => (
                    <View style={styles.event}>
                        <Text style={styles.eventProperty}>ONG:</Text>
                        <Text style={styles.eventValue}>{event.name}</Text>

                        <Text style={styles.eventProperty}>EVENTO:</Text>
                        <Text style={styles.eventValue}>{event.title}</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(event)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#2D0073" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}