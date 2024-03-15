// FavoritesScreen.js

import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet,Button } from 'react-native';
import { Card, Title } from 'react-native-paper';

function FavoritesScreen({ route }) {
  const { favorites } = route.params;
  console.log("Received favorites:", favorites);
  const [favoriteCocktails, setFavoriteCocktails] = useState([]);

  useEffect(() => {
    setFavoriteCocktails(favorites);
  }, [favorites]);

  const removeFromFavorites = (idDrink) => {
    const updatedFavorites = favoriteCocktails.filter(cocktail => cocktail.idDrink !== idDrink);
    setFavoriteCocktails(updatedFavorites);
    // Mettez à jour vos favoris dans le stockage local ou global si nécessaire
  };

  return (
    <FlatList
      data={favoriteCocktails}
      keyExtractor={(item, index) => `${item.idDrink}_${index}`}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Cover source={{ uri: item.strDrinkThumb }} />
          <Card.Content>
            <Title style={styles.title}>{item.strDrink}</Title>
            <Button title="Supprimer" onPress={() => removeFromFavorites(item.idDrink)} />
          </Card.Content>
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FavoritesScreen;
