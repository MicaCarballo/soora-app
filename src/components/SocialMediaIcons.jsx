import React from "react";
import {
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const SocialMediaIcons = () => {
  return (
    <View style={styles.iconsContainer}>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "https://www.facebook.com/people/SooraBeta/100086249187059/"
          )
        }
      >
        <View style={styles.icon}>
          <Image
            style={styles.imgIcon}
            source={require("../../assets/facebook.png")}
          ></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://twitter.com/SooraTheApp")}
      >
        <View style={styles.icon}>
          <Image
            style={styles.imgIcon}
            source={require("../../assets/twitter.png")}
          ></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://www.sooratheapp.com/")}
      >
        <View style={styles.icon}>
          <Image
            style={styles.imgIcon}
            source={require("../../assets/instagram.png")}
          ></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://www.sooratheapp.com/")}
      >
        <View style={styles.icon}>
          <Image
            style={styles.imgIcon}
            source={require("../../assets/tiktok.png")}
          ></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "https://www.youtube.com/channel/UCS2_jKjdg5KTLo-1zFXDO8A"
          )
        }
      >
        <View style={styles.icon}>
          <Image
            style={styles.imgIcon}
            source={require("../../assets/youtube.png")}
          ></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 60,
    paddingHorizontal: 50,
  },
  icon: {
    width: 24,
    height: 24,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    padding: 20,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    margin: 15,
  },
  imgIcon: {
    width: 24,
    height: 24,
  },
});

export default SocialMediaIcons;
