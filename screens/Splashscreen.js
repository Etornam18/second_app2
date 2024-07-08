import React, { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text,Dimensions } from 'react-native';

const Splashscreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the next screen or set loading to false
    }, 2300); // Duration of the splash screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View >
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
  
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
 
});

export default Splashscreen;
