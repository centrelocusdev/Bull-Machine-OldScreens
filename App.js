import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Animated } from "react-native";
import Gradient from "./components/Gradient";
import CustomButton from "./components/customButton";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { useState, useEffect } from "react";

const customFonts = {
  "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
};
export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  let [fontsLoaded] = useFonts(customFonts);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // Show text after 3 seconds

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []); // This effect runs only once after the component mounts

  // Animated value to control opacity
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isVisible ? 1 : 0, // Set opacity to 1 if isVisible is true, otherwise 0
      duration: 2000, // Duration of the animation (1000 milliseconds = 1 second)
      useNativeDriver: true,
    }).start(); // Start the animation
  }, [isVisible]); // Re-run this effect whenever isVisible changes

  const handlePress = () => {
    console.log("hello");
  };
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Gradient
          fromColor={"rgba(249, 202, 135, 1)"}
          toColor={"rgba(236, 50, 55, 1)"}
        >
          <Animated.View style={{ opacity: fadeAnim, width: "100%" }}>
            <Text style={styles.heading1}>Welcome to Call Recorder!</Text>
            <Text style={styles.heading2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              suscipit congue lacus a tempor. Fusce.
            </Text>
          </Animated.View>
          <Image style={styles.user} source={require("./assets/user.png")} />
          <Image
            style={styles.bottomHeader}
            source={require("./assets/bottomHeader.png")}
          />
          <Animated.View style={{ opacity: fadeAnim, width: "100%" }}>
            <CustomButton
              marginBottom={8}
              onPress={handlePress}
              title={"Sign Up"}
              buttonColor="rgba(255, 251, 239, 1)"
              textColor="rgba(236, 50, 55, 1)"
              paddingVertical={16}
              paddingHorizontal={24}
              borderRadius={8}
            />

            <CustomButton
              marginBottom={0}
              onPress={handlePress}
              title={"Login"}
              textColor="rgba(255, 251, 239, 1)"
              buttonColor="rgba(236, 50, 55, 1)"
              paddingVertical={16}
              paddingHorizontal={24}
              borderRadius={8}
              borderWidth={2}
              borderColor="rgba(255, 251, 239, 1)"
            />
          </Animated.View>
        </Gradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
    position: "realative",
    paddingHorizontal: 24,
  },
  user: {
    marginTop: 80,
    marginBottom: 96,
  },
  bottomHeader: {
    position: "absolute",
    bottom: 0,
  },
  heading1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontFamily: "Inter-Regular",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  heading2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Inter-Regular",
    textAlign: "center",
  },
});
