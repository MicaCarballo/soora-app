import React, { useState } from "react";
import * as Clipboard from "expo-clipboard";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Modal } from "react-native";

const ContactBtn = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.btnText}>Contact us</Text>
        <Image
          source={require("../../assets/contact-icon.png")}
          style={{ width: 8, height: 8, marginLeft: 4 }}
        />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <Text style={{ fontSize: 12, color: "#1E1E1E" }}>
                  Reach out to us through
                </Text>
                <View style={styles.copyEmail}>
                  <Pressable
                    style={[styles.pressable]}
                    onPress={() =>
                      Clipboard.setStringAsync("sooratheapp@gmail.com")
                    }
                  >
                    <Image source={require("../../assets/copy.png")} />
                    <Text style={styles.textStyle}>copy</Text>
                  </Pressable>
                  <Text
                    style={{
                      marginRight: 12,
                      color: "#3B5998",
                      fontSize: 14,
                      fontWeight: "700",
                    }}
                  >
                    sooratheapp@gmail.com
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: "#00000033",
    width: "100%",
    height: "100%",
    alignSelf: "center",
    justifySelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  modalView: {
    backgroundColor: "white",
    width: "100%",
    height: 135,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingLeft: 80,
    paddingRight: 80,
  },
  copyEmail: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  pressable: {
    display: "flex",
    marginLeft: 5,
  },
  btn: {
    backgroundColor: "black",
    color: "white",
    height: 32,
    width: 97,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  btnText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
});
export default ContactBtn;
