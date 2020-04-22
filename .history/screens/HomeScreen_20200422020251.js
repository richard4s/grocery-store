import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.welcomeContainer}>
          <Text style={styles.subHead}>Home</Text>

          <ScrollView contentContainerStyle={styles.contentCard} horizontal={true}>

            <View style={styles.cardView}>
              <MonoText style={styles.cardText}>Low Calorie</MonoText>
            </View>

            <View style={styles.cardView}>
              <MonoText style={styles.cardText}>Protein</MonoText>
            </View>

            <View style={styles.cardView}>
              <MonoText style={styles.cardText}>Diet</MonoText>
            </View>

          </ScrollView>

          <ScrollView contentContainerStyle={styles.contentCard} horizontal={true}>

            <View style={styles.categories}>
              <Image
                style={styles.foodCategory}
                source={require('../assets/images/food/popcorn.png')}
              />
              <MonoText style={styles.cardText}>Popcorn</MonoText>
            </View>

            <View style={styles.categories}>
              <Image
                style={styles.foodCategory}
                source={require('../assets/images/food/grapes.png')}
              />
              <MonoText style={styles.cardText}>Grapes</MonoText>
            </View>

            <View style={styles.categories}>
              <Image
                style={styles.foodCategory}
                source={require('../assets/images/food/carrot.png')}
              />
              <MonoText style={styles.cardText}>Carrot</MonoText>
            </View>

            <View style={styles.categories}>
              <Image
                style={styles.foodCategory}
                source={require('../assets/images/food/sliced-pizza.png')}
              />
              <MonoText style={styles.cardText}>Pizza</MonoText>
            </View>

            <View style={styles.categories}>
              <Image
                style={styles.foodCategory}
                source={require('../assets/images/food/lemon.png')}
              />
              <MonoText style={styles.cardText}>Lemon</MonoText>
            </View>

            <View style={styles.categories}>
              <Image
                style={styles.foodCategory}
                source={require('../assets/images/food/pear.png')}
              />
              <MonoText style={styles.cardText}>Pear</MonoText>
            </View>

          </ScrollView>

          <View style={styles.subSection}>
            <MonoText style={styles.mutedText}>Grab it now</MonoText>
            <View style={styles.grabView}>
              <MonoText style={styles.cardText}>Kitchen Items</MonoText>
            </View>
          </View>
          
          <View style={styles.subSection}>
            <MonoText style={styles.mutedText}>Top Savers</MonoText>

            
              <View style={styles.grabView}>
              <View style={styles.savers}>
                <Image
                  style={styles.saversCategory}
                  source={require('../assets/images/food/french-fries.png')}
                />
                <MonoText style={styles.saversThickText}>
                  French Fries 
                  <MonoText style={styles.saversText}>Originally from Italy but commonly known as French fries</MonoText>
                </MonoText>
                
              </View>
              
            </View>
            
            
          </View>
          
        </View>
        
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subHead: {
    fontSize: 36,
    fontFamily: 'muli-black',
    color: '#656565'
  },
  welcomeContainer: {
    marginTop: 5,
    marginBottom: 20,
    marginHorizontal: 20
  },
  contentCard: {
    marginTop: 20
  },
  cardText: {
    textAlign: 'center'
  },
  cardView: {
    borderWidth: 1,
    borderColor: '#000',
    width: 180,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  grabView: {
    borderWidth: 1,
    borderColor: '#000',
    width: 355,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  categories: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignContent: 'center'
  },
  foodCategory: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignContent: 'center'
  },
  subSection: {
    marginVertical: 20
  },
  mutedText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10
  },
  savers: {
    flex: 1,
    flexDirection: 'row'
  },
  saversText: {
    width: 100,
    fontSize: 14
  },
  saversThickText: {
    width: 180,
    fontFamily: 'muli-black',
    fontSize: 18,
    marginHorizontal: 10
  },
  saversCategory: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignContent: 'center'
  },
});
