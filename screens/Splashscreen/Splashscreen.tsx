import React from "react";
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const screenHeight = Dimensions.get('screen').height;
// alert(screenHeight);

const Splashscreen = () => {

    return (
        <ImageBackground style={styles.imgBackground} source={require('../../assets/images/Splashscreen/imgeBackgroud.png')} >
            <View style={styles.box}>
                <Image style={styles.imgLogo1} source={require('../../assets/images/Splashscreen/imglogo.png')} />
                <Text style={styles.textH1}>CEREBRO</Text>
                <Text style={styles.textH2}>All Your Crypto in One Place</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imgBackground: {
        flex: 1,
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgLogo1: {
        width: screenHeight > 640 ? 102 : 82,
        height: screenHeight > 640 ? 100 : 80,
    },
    // imgLogo2: {
    //     width: 82,
    //     height: 80,
    // },
    textH1: {
        fontWeight: 400,
        fontSize: screenHeight > 640 ? 36 : 29,
        lineHeight: screenHeight > 640 ? 45 : 30,
        textAlign: "center",
        color: "#FFFFFF",
        marginTop: screenHeight > 640 ? 20 : 10
    },
    textH2: {
        fontWeight: 500,
        fontSize: screenHeight > 640 ? 20 : 17,
        lineHeight: screenHeight > 640 ? 32 : 15,
        textAlign: "center",
        color: "#FFFFFF",
    }
});

export default Splashscreen;