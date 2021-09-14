import { Text, View } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

function Screen5({ navigation }) {

    const [url, setUrl] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Eo_circle_light-blue_white_checkmark.svg/1024px-Eo_circle_light-blue_white_checkmark.svg.png');
    const [name, setName] = useState('');

    return (
        <View style={styles.Screen}>
            <Text style={styles.Text1}>torba</Text>

            <TextInput style={styles.TextInput} placeholder="Adınız" onChangeText={name => setName(name)} />
            <TextInput style={styles.TextInput} placeholder="Telefon Numaranız" keyboardType="numeric" maxLength={5} />
            <TextInput style={styles.TextInput} placeholder="Eklemek İstediğiniz Fotoğraf" onChangeText={url => setUrl(url)} />
            <TouchableOpacity onPress={() => navigation.navigate('Sixth Screen', { image: url, text: name })} style={styles.AddButton}>
                <Text style={styles.Add}>Ekle</Text>
            </TouchableOpacity>
        </View>
    );

}

export default Screen5;