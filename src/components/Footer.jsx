import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>Copyright © 2022 Soora. All rights reserved</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    height: 60,
    textAlign: "center",
    borderTopColor: "black",
    borderTopWidth: 1,
    borderStyle: "solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Footer;
