import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const EmailInput = () => {
  const [emailSent, setemailSent] = useState(false);
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput textContentType="emailAddress" style={styles.input} />
        <TouchableOpacity
          style={styles.inputBtn}
          onPress={() => {
            setemailSent(true);
          }}
        >
          <Text style={styles.btnText}>Notify Me</Text>
        </TouchableOpacity>
      </View>
      {emailSent && (
        <Text style={{ color: "#3B5998", marginTop: 6, alignSelf: "center" }}>
          Your email address has been received.
        </Text>
      )}
      <Text style={{ margin: 10, alignSelf: "center" }}>
        Don’t worry, we won’t spam you :)
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "70%",
    padding: 8,
  },
  inputContainer: {
    width: "100%",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "white",
    padding: 3,
    height: 45,
    borderRadius: 40,
    marginTop: 15,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBtn: {
    width: 100,
    color: "white",
    backgroundColor: "black",
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
});

export default EmailInput;
