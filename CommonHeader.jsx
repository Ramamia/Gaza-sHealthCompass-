import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faGlobe, faBars } from '@fortawesome/free-solid-svg-icons';

const CommonHeader = ({ handleToggleNav }) => {
    return (
        <View style={styles.stickyHeader}>
            <Text style={styles.title}>Gaza's Health Compass</Text>
            <View style={styles.icons}>
                <TouchableOpacity onPress={() => alert("Home icon pressed")}>
                    <FontAwesomeIcon icon={faHouse} size={24} style={styles.icon} color="#ebe6c1" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert("Globe icon pressed")}>
                    <FontAwesomeIcon icon={faGlobe} size={24} style={styles.icon} color="#ebe6c1" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleToggleNav}>
                    <FontAwesomeIcon icon={faBars} size={24} style={styles.icon} color="#8b9e8b" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    stickyHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#D21124',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
    },
    title: {
        color: '#023C40',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    icons: {
        marginLeft: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    icon: {
        marginHorizontal: 10,
    },
});

export default CommonHeader;
