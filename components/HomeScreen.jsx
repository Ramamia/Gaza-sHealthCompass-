import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image, ScrollView, FlatList, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { faHouse, faGlobe, faBars } from '@fortawesome/free-solid-svg-icons';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const data = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
];

const renderCircleItem = ({ item }) => (
    <View style={styles.circleItem}>
        <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.circleImage} />
        <Text style={styles.circleText}>{item}</Text>
    </View>
);

const HomeScreen = () => {
    const { width, height } = useWindowDimensions();
    const navigation = useNavigation();
    const scrollViewRef = useRef(null); 
    const [navVisible, setNavVisible] = useState(false);
    const [isEnglish, setIsEnglish] = useState(true);

    const handleToggleNav = () => {
        setNavVisible(!navVisible);
    };

    const handleNavigate = (screen) => {
        navigation.navigate(screen);
        setNavVisible(false);
    };

    const handleScrollTo = (section) => {
        scrollViewRef.current.scrollTo({
            y: section === 'about' ? 400 : 800, 
            animated: true,
        });
        setNavVisible(false); 
    }
    const handleLanguageSwitch = () => {
        setIsEnglish(prev => !prev);
    };


    return (
        <>
            <StatusBar backgroundColor="#D21124" barStyle="dark-content" />
            <View style={styles.stickyHeader}>
                <Image
                    source={require('../assets/headerLogo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Gaza's Health Compass</Text>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => Alert.alert("Globe icon pressed")}>
                        <FontAwesomeIcon icon={faGlobe} size={24} style={styles.icon} color="#ebe6c1" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleToggleNav}>
                        <FontAwesomeIcon icon={faBars} size={24} style={styles.icon} color="#8b9e8b" />
                    </TouchableOpacity>
                </View>
            </View>
            {/* Side Navigation Bar */}
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
                    <TouchableOpacity onPress={() => handleScrollTo('about')}>
                        <Text style={styles.navItem}>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleScrollTo('contact')}>
                        <Text style={styles.navItem}>Contact Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLanguageSwitch}>
                        <Text style={styles.navItem}>Switch Language</Text>
                    </TouchableOpacity>
                </View>
            )}
            <ScrollView ref={scrollViewRef}
                contentContainerStyle={styles.container}
                style={styles.scrollView}>
                {/* Latest News */}
                <Text style={styles.sectionTitle}>LATEST NEWS</Text>
                <FlatList
                    data={data}
                    renderItem={renderCircleItem}
                    horizontal
                    keyExtractor={(item) => item.toString()}
                    contentContainerStyle={styles.horizontalList}
                />

                {/* Top Health Videos */}
                <Text style={styles.sectionTitle}>TOP HEALTH VIDEOS</Text>
                <FlatList
                    data={data}
                    renderItem={renderCircleItem}
                    horizontal
                    keyExtractor={(item) => item.toString()}
                    contentContainerStyle={styles.horizontalList}
                />

                {/* Top Health Articles */}
                <Text style={styles.sectionTitle}>TOP HEALTH ARTICLES</Text>
                <FlatList
                    data={data}
                    renderItem={renderCircleItem}
                    horizontal
                    keyExtractor={(item) => item.toString()}
                    contentContainerStyle={styles.horizontalList}
                />

                {/* About Us */}
                <View style={styles.aboutSection} id="about">
                    <Text style={styles.sectionTitle}>ABOUT US</Text>
                    <Image source={{ uri: 'about_image_url' }} style={styles.aboutImage} />
                    <Text style={styles.aboutText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('AIBot')}>
                    <View style={styles.bot}>
                        <Image
                            source={require('../assets/nurseIMG.png')}
                            style={styles.nurse}
                            resizeMode="contain"
                        />
                        <Text style={styles.nurseTxt}>Chat with our AI nurse</Text>
                    </View>
                </TouchableOpacity>
                {/*footer*/}
                <View style={styles.footer} id="contact">
                    <Text style={styles.footerTxt}>CONTACT US</Text>
                    <View style={styles.iconsFooter}>
                        <TouchableOpacity onPress={() => console.log('Twitter')}>
                            <FontAwesome name="twitter" size={30} style={styles.iconFooter} color="#ebe6c1" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Instagram')}>
                            <FontAwesome name="instagram" size={30} style={styles.iconFooter} color="#ebe6c1" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Facebook')}>
                            <FontAwesome name="facebook" size={30} style={styles.iconFooter} color="#ebe6c1" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footerBottom}>
                        <Image
                            source={require('../assets/footerLogo.png')}
                            style={styles.footerLogo}
                        />
                        <Text style={styles.copyrightText}>
                            © 2024 Resilient Rebuilders. All rights reserved.
                        </Text>
                    </View>

                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#EBE6C1',
        paddingTop: 70,
    },
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
    logo: {
        width: 50,
        height: 50,
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
    }, scrollView: {
        backgroundColor: '#D21124',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: '#D21124',
    },
    horizontalList: {
        marginVertical: 10,
    },
    circleItem: {
        width: 100,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    circleImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#ccc',
    },
    circleText: {
        marginTop: 5,
        textAlign: 'center',
    },
    aboutSection: {
        marginVertical: 20,
        marginHorizontal: 5,
        padding: 11,
        backgroundColor: '#8B9E8B',
        borderRadius: 8,
    },
    aboutImage: {
        width: '100%',
        height: 150,
        backgroundColor: '#ccc',
        borderRadius: 8,
    },
    aboutText: {
        fontSize: 16,
        textAlign: 'justify',
        marginVertical: 10,
        color: '#023C40',
        fontWeight: 'bold',
    },
    bot: {
        backgroundColor: '#8B9E8B',
        width: '60%',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginRight: 6,
        marginVertical: 10,
        alignSelf: 'flex-end',
    },
    nurse: {
        width: 50,
        height: 50,
    },
    nurseTxt: {
        color: '#023C40',
        fontWeight: 'bold',
    },
    footer: {
        backgroundColor: '#023C40',
        paddingVertical: 20,
        alignItems: 'center',
    }, footerTxt: {
        color: '#D21124',
        fontWeight: 'bold',
        fontSize: 16,
    },
    iconsFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15,
    },
    iconFooter: {
        marginHorizontal: 40,
    }, footerBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    footerLogo: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },
    copyrightText: {
        fontSize: 12,
        color: '#D21124',
        fontWeight: 'bold',
        marginLeft: 10,
    },
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

export default HomeScreen;
