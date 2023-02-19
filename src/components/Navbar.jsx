import React, { useState } from "react";

import Logo from "./Logo";
import ContactBtn from "./ContactBtn";
import { StyleSheet, View } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Logo />
      <ContactBtn />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    marginBottom: 30,

    paddingHorizontal: 20,
  },
});

export default Navbar;
