import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from 'react';
import styles from './styles.js'

function SignUpScreen() {
    return (
        <View style={[{ backgroundColor: '#50A162', width: '100%', height: '100%' }]}>
            <Text style={styles.Text1}>torba</Text>
            <Text style={styles.Text2}>torbada fırsat var</Text>
            <View style={[{ alignSelf: 'center', width: 324, marginTop: '15%', }]}>
                <TouchableOpacity style={styles.Button}>
                    <Text style={[{ color: '#fff', fontSize: 18, marginTop: '9%' }]}>Kaydol</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.Text3}>Zaten bir hesabın var mı? Giriş Yap.</Text>
            <Image source={{ uri: 'https://seeklogo.com/images/F/facebook-icon-logo-03865A9BA2-seeklogo.com.png' }}
                style={{ width: '4%', height: '4%', marginLeft: '31%', marginTop: '6%', }} />
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' }}
                style={{ width: '4%', height: '4%', marginLeft: '31%', marginTop: '3%', }} />
            <Image source={{ uri: 'https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png' }}
                style={{ width: '4%', height: '4%', marginLeft: '31%', marginTop: '3%', }} />
            <Text style={styles.Text4}>Sosyal medyada Torba</Text>
            <Image source={{ uri: 'https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png' }}
                style={{ width: '5%', height: '4%', marginLeft: '40%', marginTop: '2%', }} />
        </View>
    );
}
export default SignUpScreen;