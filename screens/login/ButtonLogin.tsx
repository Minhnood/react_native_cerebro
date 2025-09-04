import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");
const baseWidth = 375;
const scale = width / baseWidth;

function ButtonLogin({ checkErr, formPassword, formEmail }: { checkErr: boolean, formPassword: string, formEmail: string }) {

    function handleLogin() {
        console.log("email", formEmail, "password", formPassword);
    }

    return (
        <>
            <Text
                style={{
                    marginTop: 6 * scale,
                    color: "#FFFFFF",
                    fontSize: 14 * scale,
                    lineHeight: 20 * scale,
                    fontWeight: "500",
                    textAlign: "right",
                    textDecorationLine: "underline",
                }}
            >
                Forgot password
            </Text>

            {/* Button Sign In */}
            <TouchableOpacity style={{
                width: "100%",
                paddingVertical: 10 * scale,
                alignItems: "center",
                backgroundColor: checkErr ? '#281e43ff' : '#6938EF',
                borderRadius: 8 * scale,
                marginTop: 24 * scale,
            }} onPress={handleLogin} disabled={checkErr} >
                <Text style={styles.textbtnSign}>Sign in</Text>
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

export default ButtonLogin;