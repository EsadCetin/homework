import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

function Screen6({ route }) {
    const { image, text } = route.params;
    return (
        <View style={styles.Screen}>
            <Image style={styles.Check} source={{ uri: image }} />
            <Text style={styles.Success}>Hoşgeldin {text} </Text>
            <Text style={styles.Success}>Kayıt Başarılı!</Text>
        </View>
    );

}

export default Screen6;