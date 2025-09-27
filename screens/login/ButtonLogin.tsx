import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");
const baseWidth = 375;
const scale = width / baseWidth;

function ButtonLogin({ tile, checkErr, formPassword, formEmail, navigation }: {tile: String, checkErr: boolean, formPassword: string, formEmail: string, navigation: any }) {

    function handleLogin() {
        console.log("email", formEmail, "password", formPassword);
        navigation.navigate('Home');
    }

    return (
            <TouchableOpacity style={{
                width: "100%",
                paddingVertical: 10 * scale,
                alignItems: "center",
                backgroundColor: checkErr ? '#281e43ff' : '#6938EF',
                borderRadius: 8 * scale,
                marginTop: 24 * scale,
            }} onPress={handleLogin} disabled={checkErr} >
                <Text style={styles.textbtnSign}>{tile}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textbtnSign: {
        color: "#FFFF",
        fontSize: 16 * scale,
        lineHeight: 24 * scale,
        fontWeight: "500",
    },
});

export default ButtonLogin;