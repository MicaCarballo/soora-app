import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <Image
      source={require("../../assets/logo.png")}
      style={styles.logo}
    ></Image>
  );
};
const styles = StyleSheet.create({
  logo: {
    height: 17,
    width: 80,
  },
});

export default Logo;
