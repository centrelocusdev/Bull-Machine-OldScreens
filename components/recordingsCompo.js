import React from "react";
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
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Dimensions } from "react-native";
import { useState, useEffect } from "react";
import Gradient from "../components/Gradient";

const RecordingsCompo = ({ navigation }) => {
  const windowDimensions = Dimensions.get("window");
  const screenDimensions = Dimensions.get("screen");
  const [activePage, setActivePage] = useState("recent");
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });
  const items = Array.from({ length: 14 }, (v, i) => i);
  return (
    <View style={[styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.recentBox}>
          {items.map((item, index) => (
            <View key={index} style={styles.recentListItem}>
              <View style={styles.boxLeft}>
                <Image source={require("../assets/play.png")} />
                <View style={styles.recentListItemNameBox}>
                  <View style={styles.recordingData}>
                    <Text style={styles.name}>Ark Wiebe</Text>
                    <Text style={styles.number}> +972 76 264 861 6</Text>
                  </View>
                  <Text style={styles.number}>01:08</Text>
                </View>
              </View>
              <View style={styles.boxRight}>
                <View style={styles.recentListItemCallBox}>
                  <Image source={require("../assets/outgoingGreen.png")} />
                  <Text style={styles.time}>02:45 PM</Text>
                </View>
                
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RecordingsCompo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 251, 239, 1)",
    width: "100%",
    // position: "relative",
    // paddingHorizontal: 24,
    // paddingTop: 40,
    // borderWidth: 1,
    // borderStyle: "solid",
  },

  callButtonsBox: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    marginTop: 20,
    // borderWidth: 1,
    // borderStyle: "solid",
  },
  callButtonsOuter: {
    width: "30%",
  },
  callButtons: {
    // borderWidth: 1,
    // borderStyle: "solid",
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  recentBox: {
    paddingVertical: 20,
    gap: 16,
  },
  recentListItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxLeft: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  boxRight: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  recentListItemNameBox: {
    alignItems: "start",
    // borderWidth: 1,
    // borderStyle: "solid",
    gap: 4,
  },
  recentListItemCallBox: {
    // justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderStyle: "solid",
    gap: 4,
  },
  recordingData: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2
  },
  name: {
    fontSize: 17,
    fontWeight: "500",
  },
  number: {
    fontSize: 10,
    fontWeight: "400",
  },
  time: {
    fontSize: 10,
    fontWeight: "400",
  },
  bottomHeaderBoxMain: {
    backgroundColor: "rgba(255, 251, 239, 1)",
    zIndex: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,

    width: "100%",
    position: "fixed",
    bottom: 0,
    right: 0,
    // borderWidth:1,
    // borderStyle: "solid",
    // borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: 20,
    paddingBottom: 8,
  },
  bottomHeaderBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
 
});
