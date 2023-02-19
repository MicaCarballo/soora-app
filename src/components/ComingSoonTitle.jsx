import React from "react";
import { StyleSheet, Text } from "react-native";

const ComingSoonTitle = () => {
  return <Text style={styles.title2}> - Coming Soon</Text>;
};
const styles = StyleSheet.create({
  title2: {
    fontSize: 16,
    fontWeight: "500",
  },
});
export default ComingSoonTitle;
