// CommonNavBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CommonNavBar = ({ navVisible, handleScrollTo, handleLanguageSwitch }) => {
    const navigation = useNavigation();

    const handleNavigate = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <>
            {navVisible && (
               <View style={styles.sideNav}>
               <TouchableOpacity onPress={() => handleNavigate('home')}>
                   <Text style={styles.navItem}>Home</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => handleNavigate('Articles')}>
                   <Text style={styles.navItem}>Articles</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => handleNavigate('News')}>
                   <Text style={styles.navItem}>News</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => handleNavigate('Videos')}>
                   <Text style={styles.navItem}>Videos</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => handleNavigate('AIBot')}>
                   <Text style={styles.navItem}>Chat with our AI Nurse</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => handleNavigate('home', { scrollTo: 'about' })}>
                   <Text style={styles.navItem}>About</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => handleNavigate('home', { scrollTo: 'contact' })}>
                   <Text style={styles.navItem}>Contact Us</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={handleLanguageSwitch}>
                   <Text style={styles.navItem}>Switch Language</Text>
               </TouchableOpacity>
           </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    sideNav: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '60%',
        height: '100%',
        backgroundColor: '#D21124',
        paddingTop: 70,
        padding: 20,
        zIndex: 100,
    },
    navItem: {
        fontSize: 18,
        marginTop: 15,
        marginBottom: 30,
        fontWeight: 'bold',
        color: '#ebe6c1',
        marginVertical: 15,
    },
});

export default CommonNavBar;
