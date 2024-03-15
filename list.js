import React, { useState } from 'react';
import { FlatList, TextInput, Button } from 'react-native';
import Item from './item.js';

const List = () => {
  const [text, setText] = useState('');
  const [sampleGoals, setSampleGoals] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);

  const handleAddGoal = () => {
    if (text.trim() !== '') {
      setSampleGoals(prevGoals => [...prevGoals, text]);
      setText('');
    }
  };

  return (
    <>
      <TextInput
        placeholder="Entrez"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title='ADD' onPress={handleAddGoal} />
      <FlatList
        style={styles.test}
        data={sampleGoals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <GoalItem item={item} index={index} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  // Styles...
});

export default GoalList;
