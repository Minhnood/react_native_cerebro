import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import ButtonLogin from "./ButtonLogin";


const { width, height } = Dimensions.get("window");
const baseWidth = 375;
const scale = width / baseWidth;
export default function Form({ currentPage, setForgotPasswor }: { currentPage: string , setForgotPasswor: (value: boolean) => void}) {
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
        } else if (formPassword.length < 8) {
            seterrPassWord('Password must be more than 8 characters.')
            check = true;
        } else {
            seterrPassWord('');
        }
        setCheckErr(check)
    }, [formEmail, formPassword])

    function forgotPassword() {
        
    }

    return (
        <>
            {/* Email */}
            <View >
                <Text
                    style={styles.textForm}
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
            <View style={styles.viewPassword}>
                <Text
                    style={styles.textForm}
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
            </View>
            {currentPage == "LOGIN" ? <Text
                style={styles.textLinkPassword}
                onPress={()=> setForgotPasswor(true) }
            >
                Forgot password
            </Text> :
                <Text
                    style={styles.textRequest}
                >
                    Must be at least 8 characters.
                </Text>}
            <ButtonLogin tile={currentPage == "LOGIN" ? "Sign in" : "Create account"} checkErr={checkErr} formPassword={formPassword} formEmail={formEmail} />
        </>
    )
}

const styles = StyleSheet.create({
    TextInputEmail: {
        borderRadius: 8 * scale,
        borderWidth: 1,
        borderColor: "#323539",
        paddingHorizontal: 14 * scale,
        paddingVertical: 10 * scale,
        color: "#FFFFFF",
        fontSize: 14 * scale,
    },
    textForm: {
        color: "#FFFFFF",
        fontSize: 14 * scale,
        lineHeight: 20 * scale,
        fontWeight: "500",
    },
    viewPassword: {
        marginTop: 20 * scale
    },
    textLinkPassword: {
        marginTop: 6 * scale,
        color: "#FFFFFF",
        fontSize: 14 * scale,
        lineHeight: 20 * scale,
        fontWeight: "500",
        textAlign: "right",
        textDecorationLine: "underline",
    },
    textRequest: {
        marginTop: 6 * scale,
        color: "#D0D5DD",
        fontSize: 14 * scale,
        lineHeight: 20 * scale,
        fontWeight: "500",
    }
});