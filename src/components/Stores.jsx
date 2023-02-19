import React from "react";
import {
  Image,
  Linking,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Stores = () => {
  return (
    <View style={styles.storesContainer}>
      <TouchableWithoutFeedback
        onPress={() =>
          Linking.openURL("https://play.google.com/store/games?hl=es_AR&gl=US")
        }
      >
        <Image
          source={require("../../assets/google-play.png")}
          style={styles.playStoreImg}
        ></Image>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => Linking.openURL("https://www.apple.com/la/app-store/")}
      >
        <Image
          source={require("../../assets/apple-store.png")}
          style={styles.storesImg}
        ></Image>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  storesContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    margin: 25,
    justifyContent: "center",
  },
  storesImg: {
    width: 118,
    height: 38,
  },
  playStoreImg: {
    width: 134,
    marginRight: 13,
    height: 38,
  },
});

export default Stores;
