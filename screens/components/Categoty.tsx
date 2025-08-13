import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Categoty = {
    tile: String
}

const Categoty = ({ tile }: Categoty) => {
    return (<>
        <View style={styles.container}>
            <View>
                <Text style={styles.tileLets}>{tile}</Text>
            </View>
            <View>
                <Text>Xem Thêm</Text>
            </View>
        </View>
    </>);
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30
    },
    tileLets: {
        color: '#FF0000',
        fontWeight: '700',
        fontSize: 16,
    }, tileRight: {
        fontWeight: '700',
        fontSize: 16,
    }
});
export default Categoty;