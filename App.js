import React from 'react';
import { ImageBackground, StyleSheet, Text, View, FlatList, TextInput, IconButton, Button,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const image = require('./assets/video-game-background-1405076_1280.png'); 

 
 const sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d altitude",
  "Acheter mon premier appartement",
  "Perdre 5 kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
]; 
/* const Footer = () => (
  <View style={{ height: '30%', width:'100%',marginTop:'0%', backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center' }}>
    <Text>Footer Content</Text>
  </View>
); */
const handleAddGoal = () => {
  // Vérifiez si le texte n'est pas vide avant d'ajouter
 
  sampleGoals.push(text)
    //setText(''); // Effacez le texte après l'ajout
  
};
var  text;
export default function App() {
  return (
    <ImageBackground source={image}  style={styles.image}>
      <View style={styles.container}>
        
        <Text style={styles.title}>Object</Text>
        <View style={styles.test2}>
        <TextInput placeholder="Entrez" value={text} style={styles.input}/><Button title='ADD' onPress={handleAddGoal}/>
        </View>
     
        <FlatList
          style={styles.test}
          data={sampleGoals}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.goalContainer}>
              <Text style={styles.goal}>{item}</Text>
              <Icon style={styles.icon} name="refresh" size={30} color="white" onPress={() => fonction()} />
              <Icon style={styles.icon2} name="clear" size={30} color="white" onPress={() => fonction()} />
            </View>
          )}
        />
             
       
        
          
   {/*  <Footer /> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    paddingTop: 58,
    fontSize: 35,
    color: 'white',
    fontFamily: 'montserrat',
  },
  image: {
    flex: 1,
  },
  goalContainer: {
    flexDirection: 'row', // Aligner le texte et l'icône horizontalement
    alignItems: 'center', // Centrer les éléments verticalement dans le conteneur
    marginVertical: 5,
    
    marginBottom: 10,
    marginLeft: 1,
    backgroundColor:'green',
    borderRadius:8
  },
  test:{
   height:'82%'
  },
  goal: {
    color: 'white',
    fontSize: 18,
    width: 250,
    margin:2
  },
  input: {
  
    borderRadius: 12,
    backgroundColor: 'white',
    height: 40,
    borderWidth: 1,
    marginHorizontal:10,
    width: 200,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    //marginBottom: 10, // Si nécessaire pour ajouter un espacement entre la liste et le TextInput
  },
  Container:{
    height: 700
  },
  
  icon:{
   alignContent:'flex-end',
   marginLeft:5,
   marginRight:15
  },
  test2:{
    flexDirection: 'row', // Aligner le texte et l'icône horizontalement
    alignItems: 'center', // Centrer les éléments verticalement dans le conteneur
    margin: 5,
    
   
   
  }
});