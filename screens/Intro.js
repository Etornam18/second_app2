import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { COLORS, SIZES } from "../constants";
import { FONTS, images } from "../constants";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const Intro = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={images.background} style={{ flex: 1 }}>
      <StatusBar hidden />
      <View style={{ flex: 3, padding: 16, marginTop: 22 }}>
        <View style={styles.circleViewContainer}>
          <View
            style={[
              styles.circleView,
              {
                borderBottomStartRadius: 0,
                backgroundColor: COLORS.secondary,
              },
            ]}
          >
            <Image
              source={images.girl1}
              resizeMode="cover"
              style={{
                width: (SIZES.width - 32) / 2 - 8,
                height: (SIZES.width - 32) / 2 + 26,
                bottom: 17,
              }}
            />
          </View>
          
          <View style={styles.circleView}>
            <Image
              source={images.girl2}
              resizeMode="cover"
              style={{
                width: (SIZES.width - 32) / 2 - 8,
                height: (SIZES.width - 32) / 2 + 26,
                bottom: 16,
              }}
            />
          </View>
        </View>
        <View style={styles.circleViewContainer}>
          <View style={styles.circleView}>
            <Image
              source={images.guy2}
              resizeMode="conver"
              style={{
                width: (SIZES.width - 32) / 2 - 8,
                height: (SIZES.width - 32) / 2 + 26,
                bottom: 17,
              }}
            />
          </View>
          <View
            style={[
              styles.circleView,
              {
                borderBottomStartRadius: 0,
                backgroundColor: COLORS.secondary,
              },
            ]}
          >
            <Image
              source={images.guy1}
              resizeMode="cover"
              style={{
                width: (SIZES.width - 32) / 2 - 8,
                height: (SIZES.width - 32) / 2 + 26,
                bottom: 17,
                
                right: 30,
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonTitle}>
          Enjoy the new experience of chatting with global friends
        </Text>
        <Text style={styles.buttonSubTitle}>
          Connecting people all around the world{" "}
        </Text>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Welcome')}
          style={{
            marginVertical: 24,
            width: SIZES.width - 64,
          }}
        />
        <View style={styles.poweredByContainer}>
          <Text
            style={{
              fontSize: 12,
              color: "gray",
              fontFamily: "medium",
            }}
          >
            Powered by
          </Text>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.secondary,
              fontFamily: "semiBold",
            }}
          >
            WaveChat
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: "center",
    padding: 16,
  },
  buttonTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.black,
    textAlign: "center",
    margin: 16,
  },
  buttonSubTitle: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    margin: 16,
  },
  circleViewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circleView: {
    width: (SIZES.width - 32) / 2 - 8,
    height: (SIZES.width - 32) / 2 - 8,
    borderRadius: 9999,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  poweredByContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
});

export default Intro;
