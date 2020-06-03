import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    event: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    input: {
        borderWidth: 1,
        height: 60,
        color: '#333',
        borderRadius: 8,
        borderColor: "#20232a",
        marginTop: 8,
    },

    text: {
        fontSize: 16,
        color: '#41414d',
        fontWeight: 'bold'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#2D0073',
        marginTop: 15,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    action: {
        backgroundColor: '#2D0073',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
});