import React, { useRef, useState } from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CommonHeader from './CommonHeader';
import CommonNavBar from './CommonNavBar';
import CommonFooter from './CommonFooter';

const ArticleScreen = () => {
    const navigation = useNavigation();
    const scrollViewRef = useRef(null);
    const [navVisible, setNavVisible] = useState(false);

    const handleToggleNav = () => {
        setNavVisible(!navVisible);
    };

    const handleScrollTo = (section) => {
        let yOffset = 0;
        if (section === 'about') {
            yOffset = 400; // Adjust based on your layout
        } else if (section === 'contact') {
            yOffset = 800; // Adjust based on your layout
        }
        scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
        setNavVisible(false);
    };

    const handleLanguageSwitch = () => {
        // Implement your language switching logic here
    };

    return (
        <>
            <StatusBar backgroundColor="#D21124" barStyle="dark-content" />
            <CommonHeader handleToggleNav={handleToggleNav} />
            <CommonNavBar
                navVisible={navVisible}
                handleScrollTo={handleScrollTo}
                handleLanguageSwitch={handleLanguageSwitch}
            />
            <ScrollView ref={scrollViewRef} contentContainerStyle={styles.container}>
                <Text style={styles.title}>Articles</Text>
                {/* Your articles content here */}
            </ScrollView>
            <CommonFooter />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5dc',
        paddingTop: 70
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20
    },
});

export default ArticleScreen;
