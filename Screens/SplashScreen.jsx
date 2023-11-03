import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainAppScreen'); // Navigate to the main screen after a certain duration
    }, 3000); // Replace 3000 with the desired duration in milliseconds (e.g., 3 seconds)
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./path_to_your_image.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set your preferred background color
  },
  image: {
    width: 250, // Set the desired width for the splash image
    height: 250, // Set the desired height for the splash image
  },
});

export default SplashScreen;
