import React from "react";
import CustomButton from "../components/customButton";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Animated,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

const LoginScreen = ({ navigation }) => {
  const windowDimensions = Dimensions.get("window");
  const screenDimensions = Dimensions.get("screen");
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  return (
    <View style={[styles.container, { width: screenDimensions.width }]}>
      <View style={styles.signupHeadingBox}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image source={require("../assets/backBlack.png")} />
        </TouchableOpacity>
        <Text style={styles.signup}>Login</Text>
      </View>
      <View style={styles.inputBox}>
        <View style={[styles.inputOuter]}>
          <TextInput
            style={styles.input}
            keyboardType="email"
            placeholder="Email"
          />
        </View>
        <View style={[styles.inputOuter, styles.passwordInputBox]}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Password"
          />
          <Image source={require("../assets/passwordVisible.png")} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ForgotPassword");
        }}
      >
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.termsBox}>
        <CustomButton
          navigation={navigation}
          navi={"Recent"}
          marginBottom={8}
          title={"Login"}
          buttonColor="rgba(137, 138, 141, 1)"
          textColor="white"
          paddingVertical={16}
          paddingHorizontal={24}
          borderRadius={8}
        />
      </View>

      <View style={styles.bottomHeader}>
        <Image source={require("../assets/bottomHeaderBlack.png")} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 251, 239, 1)",
    position: "relative",
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  bottomHeader: {
    width: "100%",
    position: "absolute",
    bottom: 10,
    right:"10%",
    // borderWidth:1,
    // borderStyle: "solid",
    // borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: 20,
  },
  signupHeadingBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  signup: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 80,
  },
  inputOuter: {
    backgroundColor: "white",
    borderRadius: 8,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10, // Elevation is not applicable in this format
  },
  inputBox: {
    display: "flex",
    gap: 16,
    marginTop: 20,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    padding: 16,
    borderRadius: 8,
  },
  passwordInputBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingRight: 10,
  },
  passwordInput: {
    width: "90%",
  },
  passwordVisible: {
    width: "30%",
  },
  terms: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
  termsBox: {
    // display: "flex",
    // gap: 12,
    marginTop: 16,
  },
  hoverButton: {
    backgroundColor: "lightblue",
  },
  forgotText: {
    fontSize: 16,
    fontWeight: "700",
    // backgroundColor: "white",
    width: "100%",
    padding: 16,
    // borderRadius: 8,
    marginTop: 16,
    color: "rgba(236, 50, 55, 1)",
    textAlign: "center",
  },
});
