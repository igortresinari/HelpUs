import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Events() {
    const [events, setEvents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    const route = useRoute();

    const city = route.params.city;

    function navigateToDetail(event) {
        navigation.navigate('Detail', { event });
    }

    function navigateBack() {
        navigation.goBack()
    }

    async function loadEvents() {
        if (loading) {
            return;
        }

        if (total > 0 && events.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('events', {
            params: {page}
        });

        setEvents([...events, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadEvents();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#2D0073"></Feather>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos eventos para participar.</Text>

            <FlatList 
                data={events.filter(function (item){
                    return item.city === city;
                })}
                style={styles.eventList}
                keyExtractor={event => String(event.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadEvents}
                onEndReachedThreshold={0.2}
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