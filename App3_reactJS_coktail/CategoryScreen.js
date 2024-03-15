import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

// Fonction pour récupérer les catégories depuis l'API
async function fetchCategories() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const data = await response.json();
    return data.drinks.map(drink => drink.strCategory);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

function CategoryScreen() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCategories();
      setCategories(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Text style={styles.category}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  category: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default CategoryScreen;
