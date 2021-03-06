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

            <View style={styles.productSurround}>
                <View style={styles.productCard}>
                    <View style={styles.contentCard}>
                        <ImageBackground source={LowCalorie} style={styles.cardView}>
                            <MonoText style={styles.cardText}>Low Calorie</MonoText>
                        </ImageBackground>
                    </View>
                </View>

                <View style={styles.productCard}>
                    <View style={styles.contentCard}>
                        <ImageBackground source={LowCalorie} style={styles.cardView}>
                            <MonoText style={styles.cardText}>Low Calorie</MonoText>
                        </ImageBackground>
                    </View>
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
      productSurround: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent:  'center',
        alignItems: 'center'
      },
      productCard: {
        borderWidth: 1,
        borderColor: '#000',
        color: '#fff',
        width: 170,
        height: 100,
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent:  'center',
        alignItems: 'center',
        marginHorizontal: 10,
      },
      contentCard: {
        marginTop: 24,
        marginBottom: 20,
        marginHorizontal: 10,
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
        width: 130,
        height: 100,
        borderRadius: 20,
        marginHorizontal: 10,
        justifyContent: 'center',
        resizeMode: "cover"
      },
  });