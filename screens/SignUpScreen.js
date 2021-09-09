import { View, Text, TouchableOpacity, } from "react-native";
import React from 'react';
import styles from './styles.js'
import { FontAwesome } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts, Yellowtail_400Regular, Poppins_500Medium, Poppins_400Regular, Moul_400Regular } from '@expo-google-fonts/dev';

function SignUpScreen() {
    let [fontsLoaded] = useFonts({
        Yellowtail_400Regular,
        Poppins_400Regular,
        Moul_400Regular,
        Poppins_500Medium
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={[{ backgroundColor: '#50A162', width: '100%', height: '100%' }]}>
                <Text style={styles.Text1}>torba</Text>
                <Text style={styles.Text2}>torbada fırsat var</Text>
                <View style={[{ marginTop: '15%', marginLeft: '15%', marginRight: '15%', height: '8%', }]}>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={[{ fontFamily: 'Poppins_400Regular', color: '#fff', fontSize: 18, marginTop: '7%' }]}>Kaydol</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.Text3}>Zaten bir hesabın var mı? Giriş Yap.</Text>
                <View style={[{ marginTop: '10%', marginLeft: '15%', marginRight: '15%', height: '8%', }]}>
                    <TouchableOpacity style={styles.Facebook}>
                        <FontAwesome name="facebook" size={35} color="white"
                            style={{ marginLeft: '4%' }} />
                        <Text style={styles.FacebookText}>Facebook ile giriş yap</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Google}>
                        <FontAwesome name="google" size={35} color="#EA4335"
                            style={{ marginLeft: '4%' }} />
                        <Text style={styles.GoogleText}>Google ile giriş yap</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Apple}>
                        <FontAwesome name="apple" size={35} color="white"
                            style={{ marginLeft: '4%' }} />
                        <Text style={styles.AppleText}>Apple ile giriş yap</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.Text4}>Sosyal medyada Torba</Text>
                <View style={[{ marginLeft: '30%', width: '40%', justifyContent: 'center', flexDirection: 'row', }]}>
                    <FontAwesome name="twitter" size={32} color="#55ACEE"
                        style={{ marginTop: '4%', }} />
                    <FontAwesome name="instagram" size={30} color="white"
                        style={{ marginLeft: '40%', marginTop: '4%', }} />
                </View>
            </View>

        );
    }
}
export default SignUpScreen;
