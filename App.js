import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, ImageBackground, Image } from 'react-native';
import * as Location from 'expo-location';

const API_KEY = '3dd098d86f80c3d7d0126a97935d6f70';
const iconBaseUrl = 'http://openweathermap.org/img/wn/';
//const iconUrl = `${iconBaseUrl}${weatherData.weather[0].icon}@2x.png`;

export default function App() {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Veuillez activer la localisation pour utiliser cette application.');
          return;
        }

        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);

        const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.coords.latitude}&lon=${currentLocation.coords.longitude}&appid=${API_KEY}`;
        const response = await fetch(apiURL);

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données météorologiques.');
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error:', error);
       
      }
    })();
  }, []);

  let content;
  if (errorMsg) {
    content = <Text>{errorMsg}</Text>;
  } else if (!location || !weatherData) {
    content = <ActivityIndicator size="large" />;
  } else {
    content = (
      <ImageBackground
        source={require('./assets/weatherpicture.jpg')} 
        style={styles.backgroundImage}
      >
        <View style={styles.weatherContainer}>
          {weatherData && (
            <View>
              <Text>{`Température: ${Math.round(weatherData.main.temp - 273)}°C, Conditions: ${weatherData.weather[0].description}`}</Text>
              <Image source={{ uri: iconUrl }} style={{ width: 50, height: 50 }} />
            </View>
          )}
        </View>
      </ImageBackground>
    );
  }

  return (
    <View style={styles.container}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  weatherContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 10,
  },
});
