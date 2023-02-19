import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import ComingSoonTitle from "../components/ComingSoonTitle";
import EmailInput from "../components/EmailInput";
import Footer from "../components/Footer";
import LandinfImg1 from "../components/LandinfImg1";
import LandingImg2 from "../components/LandingImg2";
import Navbar from "../components/Navbar";
import SocialMediaIcons from "../components/SocialMediaIcons";
import Stores from "../components/Stores";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#F2ECF0" }}>
      <ScrollView style={{ padding: 6 }}>
        <Navbar />
        <View style={styles.body}>
          <ComingSoonTitle />
          <Text style={styles.mainTitle}> Bringing</Text>
          <Text style={styles.mainTitle}>Muslims Toghether</Text>
          <Stores />

          <LandingImg2 />
          <ComingSoonTitle />
          <Text style={styles.mainTitle}> Get Notified</Text>
          <Text style={styles.mainTitle}>When we Launch</Text>
        </View>
        <EmailInput />
        <LandinfImg1 />

        <SocialMediaIcons />
        <Footer />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderStartColor: "#F2ECF0",
  },
  textStyle: {
    lineHeight: 14,
    fontSize: 12,
    color: "rgba(30, 30, 30, 0.8)",
    fontWeight: "400",
  },

  mainTitle: {
    fontSize: 36,
    fontWeight: "800",
    lineHeight: "47",
  },

  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    width: "100%",
    padding: 15,
  },
});
export default Home;
