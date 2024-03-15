import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function DetailsScreen({ route, navigation }) {
  const { cocktail } = route.params;
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = () => {
    setFavorites([...favorites, cocktail]);
  };

  const navigateToFavorites = () => {
    navigation.navigate('Favorites', { favorites: favorites });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: cocktail.strDrinkThumb }} style={styles.image} />
      <Text style={styles.title}>{cocktail.strDrink}</Text>
      <Text>{cocktail.strCategory}</Text>
      <Text>{cocktail.strInstructions}</Text>
      <TouchableOpacity style={styles.button} onPress={addToFavorites}>
        <Text style={styles.buttonText}>Ajouter aux favoris</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToFavorites}>
        <Text style={styles.buttonText}>Voir mes favoris</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DetailsScreen;
