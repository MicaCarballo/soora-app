import React from "react";
import { Image, StyleSheet, Text } from "react-native";

const LandingImg2 = () => {
  return (
    <Image
      source={require("../../assets/landing-image-2.png")}
      style={styles.landingImg}
    />
  );
};
const styles = StyleSheet.create({
  landingImg: {
    width: 350,
    height: 380,
    marginBottom: 40,
    alignSelf: "center",
  },
});

export default LandingImg2;
