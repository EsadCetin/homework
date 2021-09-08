import { View, Text, TouchableOpacity, } from "react-native";
import React from 'react';
import styles from './styles.js'
import { FontAwesome } from '@expo/vector-icons';

function SignUpScreen() {
    return (
        <View style={[{ backgroundColor: '#50A162', width: '100%', height: '100%' }]}>
            <Text style={styles.Text1}>torba</Text>
            <Text style={styles.Text2}>torbada fırsat var</Text>
            <View style={[{ marginTop: '15%', marginLeft: '15%', marginRight: '15%', height: '8%', }]}>
                <TouchableOpacity style={styles.Button}>
                    <Text style={[{ color: '#fff', fontSize: 18, marginTop: '7%' }]}>Kaydol</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.Text3}>Zaten bir hesabın var mı? Giriş Yap.</Text>
            <FontAwesome name="facebook" size={35} color="black"
                style={{ width: '8%', height: '5%', marginLeft: '20%', marginTop: '7%', }} />
            <FontAwesome name="google" size={35} color="black"
                style={{ width: '8%', height: '5%', marginLeft: '20%', marginTop: '4%', }} />
            <FontAwesome name="apple" size={35} color="black"
                style={{ width: '8%', height: '5%', marginLeft: '20%', marginTop: '4%', }} />
            <Text style={styles.Text4}>Sosyal medyada Torba</Text>
            <FontAwesome name="twitter" size={24} color="black"
                style={{ width: '8%', height: '5%', marginLeft: '30%', marginTop: '4%', }} />
        </View>
    );
}
export default SignUpScreen;