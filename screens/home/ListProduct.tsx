import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Categoty from "../components/Categoty";

const ListProduct = () => {
    return (
        <>
            <Categoty tile="Sản phẩm" />
            <View style={styles.container}>
                <View style={styles.itemProduct}>
                    <View style={styles.sale}>
                        <Text style={styles.saleText}>SALE 99%</Text>
                    </View>
                    <Image
                        source={{ uri: 'https://cdn2.fptshop.com.vn/unsafe/800x0/meme_cho_1_e568e5b1a5.jpg' }}
                        style={styles.imgProduct}
                    />
                    <Text style={styles.productName}>Sản phẩm 1</Text>
                </View>

                <View style={styles.itemProduct}>
                    <Image
                        source={{ uri: 'https://cdn2.fptshop.com.vn/unsafe/800x0/meme_cho_1_e568e5b1a5.jpg' }}
                        style={styles.imgProduct}
                    />
                    <Text style={styles.productName}>Sản phẩm 2</Text>
                </View>

                <View style={styles.itemProduct}>
                    <Image
                        source={{ uri: 'https://cdn2.fptshop.com.vn/unsafe/800x0/meme_cho_1_e568e5b1a5.jpg' }}
                        style={styles.imgProduct}
                    />
                    <Text style={styles.productName}>Sản phẩm 3</Text>
                </View>

                <View style={styles.itemProduct}>
                    <Image
                        source={{ uri: 'https://cdn2.fptshop.com.vn/unsafe/800x0/meme_cho_1_e568e5b1a5.jpg' }}
                        style={styles.imgProduct}
                    />
                    <Text style={styles.productName}>Sản phẩm 4</Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        flexWrap: 'wrap',
        marginTop: 12,
    },
    itemProduct: {
        width: "48%",
        marginBottom: 12,
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        elevation: 3,
    },
    imgProduct: {
        width: "100%",
        height: 160,
        resizeMode: "cover",
    },
    productName: {
        padding: 10,
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
    },
    sale: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#ff4d4f',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        zIndex: 10,
    },
    saleText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    }
});

export default ListProduct;
