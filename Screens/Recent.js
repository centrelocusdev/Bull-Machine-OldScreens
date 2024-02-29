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
import RecentCompo from "../components/RecentCompo";
import ContactsCompo from "../components/contactsCompo";
import RecordingsCompo from "../components/recordingsCompo";
const Recent = ({ navigation }) => {
  const windowDimensions = Dimensions.get("window");
  const screenDimensions = Dimensions.get("screen");
  const [activeCallType, setActiveCallType] = useState("incoming");
  const [activePage, setActivePage] = useState("recent");
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });
  const items = Array.from({ length: 14 }, (v, i) => i);
  return (
    <View style={[styles.container, { width: screenDimensions.width }]}>
      <View style={styles.header}>
        <Image source={require("../assets/user2.png")} />
        <View style={styles.searchBox}>
          <Image source={require("../assets/search.png")} />
          <TextInput placeholder="Search" />
        </View>
        <Image source={require("../assets/notification.png")} />
      </View>
      {activePage === "recent" && <RecentCompo />}
      {activePage === "contacts" && <ContactsCompo />}
      {activePage === "recordings" && <RecordingsCompo />}

      <View style={[styles.bottomHeaderBoxMain]}>
        <View style={styles.bottomHeaderBox}>
          <TouchableOpacity
            onPress={() => {
              setActivePage("recent");
            }}
          >
            {activePage === "recent" ? (
              <Image source={require("../assets/recentRed.png")} />
            ) : (
              <Image source={require("../assets/recentBlack.png")} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActivePage("contacts");
            }}
          >
            {activePage === "contacts" ? (
              <Image source={require("../assets/contactsRed.png")} />
            ) : (
              <Image source={require("../assets/contactsBlack.png")} />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/diadpad.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActivePage("recordings");
            }}
          >
            {activePage === "recordings" ? (
              <Image source={require("../assets/micRed.png")} />
            ) : (
              <Image source={require("../assets/micBlack.png")} />
            )}
          </TouchableOpacity>
          <Image source={require("../assets/settingBlack.png")} />
        </View>
        <Image source={require("../assets/bottomHeaderBlack.png")} />
      </View>
    </View>
  );
};

export default Recent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 251, 239, 1)",
    position: "relative",
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  header: {
    // borderWidth: 1,
    // borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // gap: 2,
    // paddingHorizontal: 10
    // paddingRight: 10,
    marginBottom: 5,
  },
  searchBox: {
    // borderWidth: 1,
    // borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    width: "75%",
    gap: 10,
    paddingLeft: 10,
    borderRadius: 34,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
