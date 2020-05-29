import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
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

    function navigateToDetail(event) {
        navigation.navigate('Detail', { event });
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
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} eventos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos eventos para participar.</Text>

            <FlatList 
                data={events}
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