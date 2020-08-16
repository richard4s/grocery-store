import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function ProductScreen() {
    return(
        <View style={styles.centerContent}>
            <View style={styles.contentCard}>
                <ImageBackground source={LowCalorie} style={styles.cardView}>
                    <MonoText style={styles.cardText}>Low Calorie</MonoText>
                </ImageBackground>

                <ImageBackground source={Protein} style={styles.cardView}>
                    <MonoText style={styles.cardText}>Protein</MonoText>
                </ImageBackground>
            </View>

            <View style={styles.contentCard}>
            <ImageBackground source={LowCalorie} style={styles.cardView}>
                    <MonoText style={styles.cardText}>Low Calorie</MonoText>
                </ImageBackground>

                <ImageBackground source={Protein} style={styles.cardView}>
                    <MonoText style={styles.cardText}>Protein</MonoText>
                </ImageBackground>
            </View>
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