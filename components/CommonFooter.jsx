import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CommonFooter = () => {
    return (
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
    );
};

const styles = StyleSheet.create({
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
});


export default CommonFooter;
