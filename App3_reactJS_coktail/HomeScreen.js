import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';

function HomeScreen({ navigation }) {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then(response => response.json())
      .then(data => {
        setCocktails(data.drinks);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleCocktailPress = (cocktail) => {
    navigation.navigate('Details', { cocktail }); // Passer les données du cocktail à la page de détails
  };

  return (
    <FlatList
      data={cocktails}
      keyExtractor={(item, index) => `${item.idDrink}_${index}`}
      renderItem={({ item }) => (
        <Card style={styles.card} onPress={() => handleCocktailPress(item)}>
          <Card.Cover source={{ uri: item.strDrinkThumb }} />
          <Card.Content>
            <Title style={styles.title}>{item.strDrink}</Title>
          </Card.Content>
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    marginHorizontal:20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
