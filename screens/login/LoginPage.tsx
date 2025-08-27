import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FromSinup from "./FromSinup";
import FromLogin from "./fromLogin";
const { width, height } = Dimensions.get("window");
const baseWidth = 375;
const scale = width / baseWidth;

const LoginPage = () => {
  const [sumitFrom, setSumitFrom] = useState(true);

  const from = sumitFrom == true ? <FromLogin/> :<FromSinup/>;


  return (
    <KeyboardAwareScrollView enableOnAndroid style={styles.imgBackground}>
      <ImageBackground
        style={styles.imgBackground}
        source={require("../../assets/images/Splashscreen/imgeBackgroud.png")}
      >
        {/* Logo */}
        <View style={styles.box}>
          <Image
            style={styles.imgLogo1}
            source={require("../../assets/images/Splashscreen/imglogo.png")}
          />
          <Text style={styles.textH1}>CEREBRO</Text>

        </View>
        {/* Form */}
        <View style={styles.box1}>
          {/* Tab */}
          <View style={styles.tab}>
            <TouchableOpacity onPress={() => setSumitFrom(true)} style={sumitFrom == true ? styles.btnLoginClick : styles.btnLogin}>
              <Text style={sumitFrom == true ? styles.textbtnLoginClick : styles.textbtnLogin}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSumitFrom(false)} style={sumitFrom == false ? styles.btnLoginClick : styles.btnLogin}>
              <Text style={sumitFrom == false ? styles.textbtnLoginClick : styles.textbtnLogin}>Sign up</Text>
            </TouchableOpacity>
          </View>

          <View>
              {from}
            {/* Or login with */}
            <View style={styles.ActionsText}>
              <View style={styles.lineHigth}></View>
              <Text
                style={{
                  color: "#344054",
                  fontSize: 12 * scale,
                  lineHeight: 18 * scale,
                  fontWeight: "400",
                  marginHorizontal: 10 * scale,
                }}
              >
                Or login with
              </Text>
              <View style={styles.lineHigth}></View>
            </View>

            {/* Social login */}
            <View style={styles.socialLogin}>
              <TouchableOpacity style={styles.btnbase}>
                <Image
                  source={require("../../assets/images/icon/x 1.png")}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnbase}>
                <Image
                  source={require("../../assets/images/icon/Social icon.png")}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnbase}>
                <Image
                  source={require("../../assets/images/icon/Social icon (1).png")}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

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

export default LoginPage;
