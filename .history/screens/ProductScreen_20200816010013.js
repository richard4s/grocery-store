import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

import LowCalorie from '../assets/images/food/Instapost5.png';
import Protein from '../assets/images/food/Instapost6.png';

export default function ProductScreen() {
    return(
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.subHead}>Products</Text>
                </View>

                <View style={styles.productCard}>
                    <View style={styles.contentCard}>
                        <ImageBackground source={LowCalorie} style={styles.cardView}>
                            <MonoText style={styles.cardText}>Low Calorie</MonoText>
                        </ImageBackground>

                        <ImageBackground source={Protein} style={styles.cardView}>
                            <MonoText style={styles.cardText}>Protein</MonoText>
                        </ImageBackground>
                    </View>
                </View>
                
            </ScrollView>
        </View>
    )
}

// ProductScreen.navigationOptions = {
//     header: null,
//   };
  
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
      productCard: {
          borderWidth: 1,
    borderColor: '#000',
    color: '#fff',
    width: 180,
    height: 100,
    borderRadius: 10,
      }
  });