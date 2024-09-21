import React, { useRef, useState } from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CommonHeader from './CommonHeader';
import CommonNavBar from './CommonNavBar';
import CommonFooter from './CommonFooter';

const AIBotprototypeScreen = () => {
    const navigation = useNavigation();
    const scrollViewRef = useRef(null);
    const [navVisible, setNavVisible] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

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

    const handleSend = () => {
        if (inputMessage.trim()) {
            const newMessages = [...messages, { text: inputMessage, sender: 'user' }];
            setMessages(newMessages);
            setInputMessage('');

            // Simulate AI response after a delay
            setTimeout(() => {
                const aiMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."; // AI response
                setMessages((prevMessages) => [...prevMessages, { text: aiMessage, sender: 'ai' }]);
            }, 1000);

            // Dismiss the keyboard
            Keyboard.dismiss();
        }
    };

    return (
        <>
        <View backgroundColor="#EBE6C1">
            <StatusBar backgroundColor="#D21124" barStyle="dark-content" />
            <CommonHeader handleToggleNav={handleToggleNav} />
            <CommonNavBar
                navVisible={navVisible}
                handleScrollTo={handleScrollTo}
                handleLanguageSwitch={handleLanguageSwitch}
            />
            <ScrollView ref={scrollViewRef} contentContainerStyle={styles.container} style={styles.ScrollView}>
                <ScrollView contentContainerStyle={styles.messageContainer} style={styles.ScrollView}>
                    {messages.map((msg, index) => (
                        <View key={index} style={msg.sender === 'user' ? styles.userMessage : styles.aiMessage}>
                            <Text style={msg.sender === 'user' ? styles.userText : styles.aiText}>{msg.text}</Text>
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type your message..."
                        placeholderTextColor="#023C40"
                        value={inputMessage}
                        onChangeText={setInputMessage}
                    />
                    <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                        <Text style={styles.sendButtonText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <CommonFooter />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#EBE6C1',
        paddingTop: 70
    },
    scrollView: {
        backgroundColor: '#EBE6C1',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20
    },
    messageContainer: {
        padding: 10,
        flexGrow: 1,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#D21124',
        borderRadius: 10,
        color: '#023C40',
        padding: 10,
        marginVertical: 5,
        maxWidth: '70%',
    },
    aiMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#8B9E8B',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        maxWidth: '70%',
    },
    userText: {
        color: '#EBE6C1',
        fontWeight: 'bold',
    },
    aiText: {
        color: '023C40',
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#8B9E8B',
        borderTopWidth: 1,
        borderTopColor: '#023C40',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#023C40',
        borderRadius: 5,
        padding: 10,
    },
    sendButton: {
        backgroundColor: '#D21124',
        borderRadius: 5,
        padding: 10,
        marginLeft: 10,
    },
    sendButtonText: {
        color: '#EBE6C1',
        fontWeight: 'bold',
    },
});

export default AIBotprototypeScreen;
