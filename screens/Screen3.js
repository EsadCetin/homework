import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../screens/styles'
import { FontAwesome } from '@expo/vector-icons';

export default class Screen3 extends Component {

    state = {
        icon: "lock",
        icon2: "unlock",
        pressed: false,
        pressed2: false,
        backgroundcolor: 'white',
        backgroundcolor2: 'yellow',
        backgroundcolor3: 'white',
        backgroundcolor4: 'yellow',
    };

    onPress() {
        if (!this.state.pressed) {
            this.setState({ pressed: true, icon: "unlock", icon2: "lock" });
        }
        else {
            this.setState({ pressed: false, icon: "lock", icon2: "unlock" });
        }
    }
    changeBackgroundColor() {
        if (!this.state.pressed) {
            this.setState({ pressed: true, backgroundcolor: 'yellow', backgroundcolor2: 'white' });
        }
        else {
            this.setState({ pressed: false, backgroundcolor: 'white', backgroundcolor2: 'yellow' });
        }
    }
    changeBackgroundColor2() {
        if (!this.state.pressed2) {
            this.setState({ pressed2: true, backgroundcolor3: 'yellow', backgroundcolor4: 'white' });
        }
        else {
            this.setState({ pressed2: false, backgroundcolor3: 'white', backgroundcolor4: 'yellow' });
        }
    }

    render() {
        return (
            <View style={styles.Screen3}>
                <View style={styles.LockButton} >
                    <TouchableOpacity onPress={() => this.onPress()} >

                        <FontAwesome name={this.state.icon} size={150} color='white' />

                    </TouchableOpacity>
                </View>
                <View style={styles.ChangeButtonView}>
                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        flex: 1,
                        minWidth: '35%',
                        backgroundColor: this.state.backgroundcolor,
                    }}
                        onPress={() => this.changeBackgroundColor()}>
                        <Text style={{ fontSize: 40 }}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        flex: 1,
                        minWidth: '35%',
                        backgroundColor: this.state.backgroundcolor3,
                    }}
                        onPress={() => this.changeBackgroundColor2()}>
                        <Text style={{ fontSize: 40 }}>2</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}
