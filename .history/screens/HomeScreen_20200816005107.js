import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

import LowCalorie from '../assets/images/food/Instapost5.png';
import Protein from '../assets/images/food/Instapost6.png';
import Diet from '../assets/images/food/Instapost7.png';
import GrabIt from '../assets/images/food/Instapost9.png';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.welcomeContainer}>
          <Text style={styles.subHead}>Home</Text>

          <ScrollView contentContainerStyle={styles.contentCard} horizontal={true} showsHorizontalScrollIndicator={false} >

            <ImageBackground source={LowCalorie} style={styles.cardView}>
              <MonoText style={styles.cardText}>Low Calorie</MonoText>
            </ImageBackground>

            <ImageBackground source={Protein} style={styles.cardView}>
              <MonoText style={styles.cardText}>Protein</MonoText>
            </ImageBackground>

            <ImageBackground source={Diet} style={styles.cardView}>
              <MonoText style={styles.cardText}>Diet</MonoText>
            </ImageBackground>

          </ScrollView>

          <ScrollView contentContainerStyle={styles.contentCard} horizontal={true} showsHorizontalScrollIndicator={false} >

            <View style={styles.categories}>
              <Image
                style={styles.foodCategory}
                source={require('../assets/images/food/popcorn.png')}
              />
              <MonoText style={styles.categoryText}>Popcorn</MonoText>
            </View>

            <View style={styles.categories}>
              <Image
                style={styles.foodCategory}
                source={require('../assets/images/food/grapes.png')}
              />
              <MonoText style={styles.categoryText}>Grapes</MonoText>
            </View>

            <View style={styles.categories}>
              <Image
                style={styles.foodCategory}
                source={require('../assets/images/food/carrot.png')}
              />
              <MonoText style={styles.categoryText}>Carrot</MonoText>
            </View>

            <View style={styles.categories}>
              <Image
                style={styles.foodCategory}
                source={require('../assets/images/food/sliced-pizza.png')}
              />
              <MonoText style={styles.categoryText}>Pizza</MonoText>
            </View>

            <View style={styles.categories}>
              <Image
                style={styles.foodCategory}
                source={require('../assets/images/food/lemon.png')}
              />
              <MonoText style={styles.categoryText}>Lemon</MonoText>
            </View>

            <View style={styles.categories}>
              <Image
                style={styles.foodCategory}
                source={require('../assets/images/food/pear.png')}
              />
              <MonoText style={styles.categoryText}>Pear</MonoText>
            </View>

          </ScrollView>

          <View style={styles.subSection}>
            <MonoText style={styles.mutedText}>Grab it now</MonoText>
              <ImageBackground source={GrabIt} style={styles.grabView}>
                {/* <MonoText style={styles.cardText}>Kitchen Items</MonoText> */}
              </ImageBackground>
          </View>
          
          <View style={styles.subSection}>
            <MonoText style={styles.mutedText}>Top Savers</MonoText>
            
              <View style={styles.saversView}>
                <View style={styles.savers}>
                  <Image
                    style={styles.saversCategory}
                    source={require('../assets/images/food/Dano-Cool-Cow-Instant-Filled-Milk-Powder-Tin-900g-2.jpg')}
                  />
                  <MonoText style={styles.saversThickText}>
                    French Fries 
                    <MonoText style={styles.saversText}> Originally from Italy but commonly known as French fries</MonoText>
                  </MonoText>
                    <TouchableOpacity style={styles.authButton} onPress={() => alert('signed in')}>
                      <Text style={styles.authText}>Add</Text>
                    </TouchableOpacity>
                </View>
              </View>

            <View style={styles.saversView}>
              <View style={styles.savers}>
                <Image
                  style={styles.saversCategory}
                  source={require('../assets/images/food/CADBURY-BOURN-VITA-SACHET500G.png')}
                />
                <MonoText style={styles.saversThickText}>
                  French Fries 
                  <MonoText style={styles.saversText}> Originally from Italy but commonly known as French fries</MonoText>
                </MonoText>
                  <TouchableOpacity style={styles.authButton} onPress={() => alert('signed in')}>
                    <Text style={styles.authText}>Add</Text>
                  </TouchableOpacity>
              </View>
            </View>

            <View style={styles.saversView}>
              <View style={styles.savers}>
                <Image
                  style={styles.saversCategory}
                  source={require('../assets/images/food/EVA-STILL-TABLE-WATER-50CL.jpg')}
                />
                <MonoText style={styles.saversThickText}>
                  French Fries 
                  <MonoText style={styles.saversText}> Originally from Italy but commonly known as French fries</MonoText>
                </MonoText>
                  <TouchableOpacity style={styles.authButton} onPress={() => alert('signed in')}>
                    <Text style={styles.authText}>Add</Text>
                  </TouchableOpacity>
              </View>
            </View>

            <View style={styles.saversView}>
              <View style={styles.savers}>
                <Image
                  style={styles.saversCategory}
                  source={require('../assets/images/food/3-600x600.jpg')}
                />
                <MonoText style={styles.saversThickText}>
                  French Fries 
                  <MonoText style={styles.saversText}> Originally from Italy but commonly known as French fries</MonoText>
                </MonoText>
                  <TouchableOpacity style={styles.authButton} onPress={() => alert('signed in')}>
                    <Text style={styles.authText}>Add</Text>
                  </TouchableOpacity>
              </View>
            </View>        
            
          </View>
          
        </View>
        
      </ScrollView>
    </View>
  );
}

// HomeScreen.navigationOptions = {
//   header: null,
// };

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
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontFamily: 'muli-extraBold',
    fontWeight: 'bold'
  },
  categoryText: {
    textAlign: 'center'
  },
  cardView: {
    // borderWidth: 1,
    // borderColor: '#000',
    color: '#fff',
    width: 180,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    resizeMode: "cover"
  },
  grabView: {
    // borderWidth: 1,
    // borderColor: '#000',
    width: 300,
    height: 100,
    alignSelf: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    resizeMode: "cover"
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
    marginTop: 20
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
    fontSize: 14,
    color: '#656565'
  },
  saversThickText: {
    width: 140,
    fontFamily: 'muli-black',
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 10
  },
  saversCategory: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignContent: 'center'
  },
  saversView: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 355,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    marginBottom: 15,
    alignSelf: 'center'
  },
  authText: {
    fontSize: 14,
    fontFamily: 'muli-black',
    color: '#fff',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 5,
    justifyContent: 'center'
  },
  authButton: {
    width: 115,
    height: 30,
    marginVertical: 35,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#ff9f23',
    alignSelf: 'flex-end',
  },
});
