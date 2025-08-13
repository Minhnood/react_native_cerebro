import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Minhhehe</Text>
            </View>
            <View>
                <Image
                    source={{
                        uri: 'https://inkythuatso.com/uploads/thumbnails/800/2022/03/4a7f73035bb4743ee57c0e351b3c8bed-29-13-53-17.jpg'
                    }}
                    style={styles.logoHome}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    logoHome: {
        width: 80,
        height: 80,
        borderRadius: 100
    },
    title: {
        color: '#FF0000',
        fontWeight: '700',
        fontSize: 16,
        textTransform: "uppercase"
    }
});

export default Header;