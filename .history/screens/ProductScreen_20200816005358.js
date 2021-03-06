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
                    <Text style={styles.subHead}>Home</Text>
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
      centerContent: {
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'center',
          alignContent:  'center',
          alignItems: 'center'
      },
      contentCard: {
          marginTop: 20,
          backgroundColor: 'transparent',
          alignSelf: 'center',
          justifyContent: 'center',
          alignContent:  'center',
          alignItems: 'center'
      },
      cardText: {
          textAlign: 'center',
          color: '#fff',
          fontSize: 18,
          fontFamily: 'muli-extraBold',
          fontWeight: 'bold'
        },
        cardView: {
          color: '#fff',
          width: 150,
          height: 100,
          borderRadius: 10,
          marginHorizontal: 10,
          justifyContent: 'center',
          resizeMode: "cover"
        },
  });