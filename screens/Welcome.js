import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, icons, images } from "../constants";
import { StatusBar } from "expo-status-bar";
import SocialButton from "../components/SocialButton";

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.area}>
      <StatusBar hidden />
      <View style={styles.container}>
        <Image source={images.logo} resizeMode="contain" style={styles.logo} />
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Hello There!</Text>
        <View style={{ marginVertical: 32 }}>
          <SocialButton
            title="Continue with Apple"
            icon={icons.appleLogo}
            onPress={() => navigation.navigate("Main")}
          />
          <SocialButton
            title="Continue with Google"
            icon={icons.google}
            onPress={() => navigation.navigate("Main")}
          />
          <SocialButton
            title="Continue with Email"
            icon={icons.email}
            onPress={() => navigation.navigate("Main")}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.loginTitle}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Main")}>
            <Text style={styles.loginSubtitle}> Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomTitle}>
            By continuing, you agree to the terms of use and
          </Text>
          <TouchableOpacity>
            <Text style={styles.bottomSubtitle}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    padding: 16,
  },
  logo: {
    width: 72,
    height: 72,
    marginBottom: 22,
    marginTop: -22,
  },
  title: {
    fontSize: 28,
    fontFamily: "bold",
    color: COLORS.black,
    marginVertical: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "regular",
    color: COLORS.black,
    textAlign: "center",
    paddingHorizontal: 16,
  },
  loginTitle: {
    fontSize: 14,
    fontFamily: "regular",
    color: COLORS.black,
  },
  loginSubtitle: {
    fontSize: 14,
    fontFamily: "semiBold",
    color: COLORS.primary,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 32, // Corrected 'bottm' to 'bottom'
    right: 0,
    left: 0,
    width: SIZES.width - 32,
    alignItems: "center",
  },
  bottomTitle: {
    fontSize: 12,
    fontFamily: "regular",
    color: COLORS.black,
  },
  bottomSubtitle: {
    fontSize: 12,
    fontFamily: "regular",
    color: COLORS.black,
    textDecorationLine: "underline",
    marginTop: 2,
  },
});

export default Welcome;
