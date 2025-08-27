import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get("window");
const baseWidth = 375;
const scale = width / baseWidth;

function FromSinup() {

    const [formEmail, setFormEmail] = useState('');
    const [formPassword, setFormPassword] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errPassWord, seterrPassWord] = useState('');
    const [checkErr, setCheckErr] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    useEffect(() => {
        let check = false;
        if (formEmail.length === 0) {
            setErrEmail("");
            check = true;
        } else if (!emailRegex.test(formEmail)) {
            setErrEmail("Your email is incorrect");
            check = true;
        } else {
            setErrEmail("");
        }
        if (formPassword.length === 0) {
            seterrPassWord("");
            check = true;
        } else if (formPassword.length < 6) {
            seterrPassWord('Password must be more than 6 characters.')
            check = true;
        } else {
            seterrPassWord('');
        }
        setCheckErr(check)
    }, [formEmail, formPassword])


    function handleLogin() {
        console.log("email", formEmail, "password", formPassword);
    }

    return (
        <>
            {/* Email */}
            <View >
                <Text
                    style={{
                        color: "#FFFFFF",
                        fontSize: 14 * scale,
                        lineHeight: 20 * scale,
                        fontWeight: "500",
                    }}
                >
                    Email
                </Text>
                <Text
                    style={{
                        display: errEmail.length > 0 ? "flex" : "none",
                        marginTop: 6 * scale,
                        color: "red",
                        fontSize: 14 * scale,
                        lineHeight: 20 * scale,
                        fontWeight: "500",
                    }}
                >
                    {errEmail}
                </Text>
                <TextInput
                    style={styles.TextInputEmail}
                    placeholder="Enter your email"
                    placeholderTextColor="#98A2B3"
                    onChangeText={newText => setFormEmail(newText)}
                />
            </View>

            {/* Password */}
            <View style={{ marginTop: 20 * scale }}>
                <Text
                    style={{
                        color: "#FFFFFF",
                        fontSize: 14 * scale,
                        lineHeight: 20 * scale,
                        fontWeight: "500",
                    }}
                >
                    Password
                </Text>
                <Text
                    style={{
                        display: errPassWord.length > 0 ? "flex" : "none",
                        marginTop: 6 * scale,
                        color: "red",
                        fontSize: 14 * scale,
                        lineHeight: 20 * scale,
                        fontWeight: "500",
                    }}
                >
                    {errPassWord}
                </Text>
                <TextInput
                    style={styles.TextInputEmail}
                    secureTextEntry={true}
                    placeholder="*********"
                    placeholderTextColor="#98A2B3"
                    onChangeText={newText => setFormPassword(newText)}
                />
                <Text
                    style={{
                        marginTop: 6 * scale,
                        color: "#D0D5DD",
                        fontSize: 14 * scale,
                        lineHeight: 20 * scale,
                        fontWeight: "500",
                    }}
                >
                    Must be at least 8 characters.
                </Text>
            </View>

            {/* Button Sign In */}
            <TouchableOpacity style={{
                width: "100%",
                paddingVertical: 10 * scale,
                alignItems: "center",
                backgroundColor: checkErr ? '#281e43ff' : '#6938EF',
                borderRadius: 8 * scale,
                marginTop: 24 * scale,
            }} onPress={handleLogin} disabled={checkErr} >
                <Text style={styles.textbtnSign}>Create account</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    imgBackground: {
        flex: 1,
    },
    box: {
        height: "20%",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: height > 640 ? 80 * scale : 30 * scale,
    },
    box1: {
        height: "80%",
        justifyContent: "flex-start",
        paddingTop: height > 640 ? 24 * scale : 16 * scale,
        paddingBottom: 64 * scale,
        paddingHorizontal: 16 * scale,
        backgroundColor: "#161618",
        borderTopLeftRadius: 16 * scale,
        borderTopRightRadius: 16 * scale,
    },
    tab: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 52 * scale,
        backgroundColor: "#000000",
        borderRadius: 12 * scale,
        padding: 4 * scale,
        marginBottom: 32 * scale,
    },
    btnLoginClick: {
        width: "50%",
        height: "100%",
        backgroundColor: "#161618",
        borderRadius: 8 * scale,
        justifyContent: "center",
        alignItems: "center",
    },
    btnLogin: {
        width: "50%",
        height: "100%",
        backgroundColor: "#000000",
        borderRadius: 8 * scale,
        justifyContent: "center",
        alignItems: "center",
    },
    textbtnLoginClick: {
        color: "#FFFFFF",
        fontSize: 16 * scale,
        lineHeight: 24 * scale,
        fontWeight: "500",
    },
    textbtnLogin: {
        color: "#475467",
        fontSize: 16 * scale,
        lineHeight: 24 * scale,
        fontWeight: "500",
    },
    imgLogo1: {
        width: height > 640 ? 102 * scale : 82 * scale,
        height: height > 640 ? 100 * scale : 80 * scale,
    },
    textH1: {
        fontWeight: "400",
        fontSize: height > 640 ? 36 * scale : 29 * scale,
        lineHeight: height > 640 ? 45 * scale : 30 * scale,
        textAlign: "center",
        color: "#FFFFFF",
        marginTop: height > 640 ? 20 * scale : 10 * scale,
    },
    TextInputEmail: {
        borderRadius: 8 * scale,
        borderWidth: 1,
        borderColor: "#323539",
        paddingHorizontal: 14 * scale,
        paddingVertical: 10 * scale,
        color: "#FFFFFF",
        fontSize: 14 * scale,
    },
    btnSign: {
        width: "100%",
        paddingVertical: 10 * scale,
        alignItems: "center",
        backgroundColor: "#291e4aff",
        borderRadius: 8 * scale,
        marginTop: 24 * scale,
    },
    textbtnSign: {
        color: "#FFFF",
        fontSize: 16 * scale,
        lineHeight: 24 * scale,
        fontWeight: "500",
    },
    ActionsText: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 18 * scale,
    },
    lineHigth: {
        flex: 1,
        height: 1,
        backgroundColor: "#344054",
    },
    socialLogin: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 10 * scale,
    },
    btnbase: {
        paddingVertical: 12 * scale,
        alignItems: "center",
        backgroundColor: "#EAECF024",
        borderRadius: 8 * scale,
        flex: 1,
    },
});

export default FromSinup;