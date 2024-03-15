import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; // Importez l'icône FontAwesome
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import FavoritesScreen from './FavoritesScreen';
import CategoryScreen from './CategoryScreen';
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'heart' : 'heart-o'; // Utilisez les noms d'icônes FontAwesome correspondants
            } else if (route.name === 'Details') {
              iconName = focused ? 'info-circle' : 'info-circle-o';
            }

            // Renvoie l'icône FontAwesome avec le nom et la couleur définis
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue', // Couleur de l'icône active
          inactiveTintColor: 'gray', // Couleur de l'icône inactive
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          initialParams={{ favorites: [] }}
        />
        <Tab.Screen name="Details" component={DetailsScreen} />
        <Tab.Screen name="Catégorie" component={CategoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
