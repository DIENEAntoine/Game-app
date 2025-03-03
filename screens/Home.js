import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableHighlight, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { 
    GestureHandlerRootView,
    LongPressGestureHandler,
    TapGestureHandler,
    State
} from "react-native-gesture-handler";


export default function Home() {
    const navigation = useNavigation();

    function onLongPress(e) {
        if (e.nativeEvent.State === State.ACTIVE) {
            navigation.navigate('Game');
        }
    }

    function onTap(e) {
        if (e.nativeEvent.State === State.ACTIVE) {
            Alert.alert('Long press to start the game');
        }
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TapGestureHandler onHandlerStateChange={onTap}>
                    <LongPressGestureHandler onHandlerStateChange={onLongPress} minDurationMs={600}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Sart game!</Text>
                        </View>
                    </LongPressGestureHandler>
                </TapGestureHandler>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: 300,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 150,
        backgroundColor: 'purple',
    },
    buttonText: {
        color: 'white',
        fontSize: 48,
    }
})