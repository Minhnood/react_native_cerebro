import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
const Splashscreen = () => {

    return (
        <ImageBackground style={styles.imgBackground} source={require('../../assets/images/Splashscreen/09d5bb30cce39582f105e0429249dd30e7103cf0 (1).png')} >

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imgBackground: {
        // width: 100,
        // height: 'auto',
    },
});

export default Splashscreen;