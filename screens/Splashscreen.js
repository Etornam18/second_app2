import React, { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';

const Splashscreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the next screen or set loading to false
    }, 2300); // Duration of the splash screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/animated.gif')}
          resizeMode="contain"
        />
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#818AF9',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 280,
    width: 270,
  },
 
});

export default Splashscreen;
