import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import styles from "../screens/styles";
import { DATA } from "../data/const";

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const Screen2 = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <View style={styles.Screen}>
            <Text style={styles.Text1}>torba</Text>
            <SafeAreaView style={{ marginTop: '15%', }}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                />
            </SafeAreaView>
        </View>
    );
}

export default Screen2;