import { Text, View } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firebase from '../data/firebaseConfig'

function Screen5({ navigation }) {

    const [state, setState] = useState({
        Adı: '',
        TelefonNumarası: '',
        Fotoğrafı: '',
    });
    const changeText = (Adı, value) => {
        setState({ ...state, [Adı]: value })
    }

    const addData = () => {
        if (state.Adı == '') {
            alert('Lütfen adınızı giriniz')
        } else if (state.TelefonNumarası == '') {
            alert('Lütfen Telefon Numaranızı giriniz')
        } else if (state.Fotoğrafı == '') {
            alert('Lütfen Fotoğrafınızı yükleyiniz')
        } else {
            firebase.db.collection('users').add({
                Adı: state.Adı,
                TelefonNumarası: state.TelefonNumarası,
                Fotoğrafı: state.Fotoğrafı,

            })
            navigation.navigate('Sixth Screen')
        }
    }
    return (
        <View style={styles.Screen}>
            <Text style={styles.Text1}>torba</Text>

            <TextInput style={styles.TextInput} placeholder="Adınız" onChangeText={(value) => changeText('Adı', value)} />
            <TextInput style={styles.TextInput} placeholder="Telefon Numaranız" keyboardType="numeric" maxLength={11} onChangeText={(value) => changeText('TelefonNumarası', value)} />
            <TextInput style={styles.TextInput} placeholder="Eklemek İstediğiniz Fotoğraf" onChangeText={(value) => changeText('Fotoğrafı', value)} />
            <TouchableOpacity onPress={() => addData()} style={styles.AddButton}>
                <Text style={styles.Add}>Ekle</Text>
            </TouchableOpacity>
        </View >
    );

}

export default Screen5;