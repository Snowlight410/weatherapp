import { View,Dimensions, Text,Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = (props) => {
  const weatherData = {
    title: 'Overcast Clouds',
    description: 'The Weather Forecast App is a user-friendly mobile application designed to offer accurate and timely weather information to users.'
  };
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
     <Image
  source={require('../assets/weather.jpg')}
  style={styles.weatherIcon}
/>
      <Text style={styles.weatherTitle}>{weatherData.title}</Text>
      <Text style={styles.weatherDescription}>{weatherData.description}</Text>
      <Button title="Go to Weather page" onPress={() => navigation.navigate('Weathertag')} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height:700,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherIcon: {
    width: 300,
    height: 300,
  },
  weatherTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  weatherDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom:15,
  },
});
export default HomeScreen