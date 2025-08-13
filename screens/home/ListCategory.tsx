import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Categoty from "../components/Categoty";
const ListCategory = () => {
    return (
        <>
            <Categoty tile="Danh mục" />
            <View style={styles.container}>
                <View>
                    <Image style={styles.logoCategory} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png' }}></Image>
                </View>
                <View>
                    <Image style={styles.logoCategory} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' }}></Image>
                </View>
                <View>
                    <Image style={styles.logoCategory} source={{ uri: 'https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-php-software-develop-command-language-512.png' }}></Image>
                </View>
                <View>
                    <Image style={styles.logoCategory} source={{ uri: 'https://www.csestack.org/wp-content/uploads/2023/08/java-logo.webp' }}></Image>
                </View>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 12
    },
    logoCategory: {
        width: 80,
        height: 80,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'blue',
    }
});

export default ListCategory;