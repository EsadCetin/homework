import { Text, View } from "react-native";
import styles from "../../homework/screens/styles";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firebase from '../../homework/data/firebaseConfig';
import auth from "@react-native-firebase/auth"

function Screen5({ navigation }) {

    const [state, setState] = useState({
        Adı: '',
        Email: '',
        Parola: '',
        Fotoğrafı: '',
    });
    const changeText = (Adı, value) => {
        setState({ ...state, [Adı]: value })
    }
    const doCreateUser = async () => {
        try {
            let response = await auth().createUserWithEmailAndPassword(UserEmail, UserPassword)
            if (response) {
                console.log(response)
                Alert.alert('Welcome Message', 'Welcome the App');
            }
        } catch (e) {
            console.error(e.message)
        }
    }
    const addData = () => {
        if (state.Email == '') {
            alert('Lütfen E-mail Adresinizi giriniz')
        } else if (state.Parola == '') {
            alert('Lütfen Parolanızı giriniz')
        } else if (state.Adı == '') {
            alert('Lütfen Adınızı giriniz')
        } else if (state.Fotoğrafı == '') {
            alert('Lütfen Fotoğrafınızı yükleyiniz')
        } else {
            firebase.db.collection('users').add({
                Email: state.Email,
                Parola: state.Parola,
                Adı: state.Adı,
                Fotoğrafı: state.Fotoğrafı,

            })
            navigation.navigate('Sixth Screen')
            doCreateUser();
        }
    }
    return (
        <View style={styles.Screen}>
            <Text style={styles.Text1}>torba</Text>

            <TextInput style={styles.TextInput} placeholder="E-mail Adresiniz" onChangeText={(value) => changeText('Email', value)} keyboardType={"email-address"} />
            <TextInput style={styles.TextInput} placeholder="Parola" onChangeText={(value) => changeText('Parola', value)} keyboardType={"number-pad"} />
            <TextInput style={styles.TextInput} placeholder="Adınız" onChangeText={(value) => changeText('Adı', value)} />
            <TextInput style={styles.TextInput} placeholder="Eklemek İstediğiniz Fotoğraf" onChangeText={(value) => changeText('Fotoğrafı', value)} />
            <TouchableOpacity onPress={() => addData()} style={styles.AddButton}>
                <Text style={styles.Add}>Ekle</Text>
            </TouchableOpacity>
        </View >
    );

}

export default Screen5;