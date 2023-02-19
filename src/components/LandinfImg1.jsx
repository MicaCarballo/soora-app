import React from "react";
import { Image, StyleSheet } from "react-native";

const LandinfImg1 = () => {
  return (
    <Image
      source={require("../../assets/landing-image-1.png")}
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
export default LandinfImg1;
