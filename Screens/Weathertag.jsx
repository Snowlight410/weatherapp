import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

const Weathertag = (props) => {
  const [weatherData, setWeatherData] = useState({});
  const [search, setSearch] = useState("");

  const fetchWeatherData = async () => {
    if (!search) {
      return; // Do not make a request if the search is empty
    }

    try {
      const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=583da20ab021598fd71d98738e96c983&units=metric`;
      const response = await fetch(WEATHER_API);

      if (response.status === "404") {
        throw new Error("Enter valid Country or City");
      }

      const result = await response.json();
      setWeatherData(result);
    } catch (err) {
      console.error(err);
    }
  };

  const getWeatherImage = (weicon) => {
    return `https://openweathermap.org/img/wn/${weicon}@2x.png`;
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>
        Enter Country name or City Name
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setSearch(text)} // Use onChangeText to update search
        value={search}
        placeholder="Enter city name or Country"
      />
      <Button title="Fetch Data" onPress={fetchWeatherData} />

      {weatherData.name && (
        <View style={styles.card}>
          <Text style={styles.text}>City Or Country : {weatherData.name}</Text>
          <View style={styles.viewtempre}>
            {weatherData.weather.map((we) => (
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={styles.cardInner}>
                  <Image
                    style={styles.image}
                    source={{ uri: getWeatherImage(we.icon) }}
                  />
                  <Text>{we.description}</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 100,
                  }}
                >
                  <Text style={styles.tempreText}>
                    Temp: {weatherData.main.temp}°C
                  </Text>
                </View>
              </View>
            ))}
          </View>
          <Text style={styles.text}>
            Humidity: {weatherData.main.humidity}%
          </Text>
          <Text style={styles.text}>
            Wind Speed: {weatherData.wind.speed} m/s
          </Text>
          {/* Add more fields here */}
        </View>
      )}
      {weatherData.cod === "404" && (
        <Text style={styles.text}>
          Error: Please Enter Country or City name.
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginTop: 20,

    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  cardInner: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    display: "flex",
    gap: 5,
    flexDirection: "column",
  },
  textNormal: {
    fontWeight: "bold", // Bold font weight
    fontSize: 16,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
  viewtempre: {
    display: "flex",
    flexDirection: "column",
  },
  tempreText: {
    fontWeight: "bold",
    fontSize: 40,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default Weathertag;
