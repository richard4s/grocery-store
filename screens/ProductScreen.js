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
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.subHead}>Products</Text>
                </View>

            <View style={styles.productSurround}>
                <View style={styles.productCard}>
                    <View style={styles.contentCard}>
                        <ImageBackground source={LowCalorie} style={styles.cardView}>
                        </ImageBackground>

                        <Text style={styles.cardText}>Indomie Noodles</Text>
                        <Text style={styles.priceText}>NGN 1,200</Text>

                        <TouchableOpacity style={styles.authButton} onPress={() => alert('signed in')}>
                            <Text style={styles.authText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.productCard}>
                    <View style={styles.contentCard}>
                        <ImageBackground source={LowCalorie} style={styles.cardView}>
                        </ImageBackground>
                        
                        <Text style={styles.cardText}>Indomie Noodles</Text>
                        <Text style={styles.priceText}>NGN 1,200</Text>

                        <TouchableOpacity style={styles.authButton} onPress={() => alert('signed in')}>
                            <Text style={styles.authText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.productSurround}>
                <View style={styles.productCard}>
                    <View style={styles.contentCard}>
                        <ImageBackground source={LowCalorie} style={styles.cardView}>
                        </ImageBackground>

                        <Text style={styles.cardText}>Indomie Noodles</Text>
                        <Text style={styles.priceText}>NGN 1,200</Text>

                        <TouchableOpacity style={styles.authButton} onPress={() => alert('signed in')}>
                            <Text style={styles.authText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.productCard}>
                    <View style={styles.contentCard}>
                        <ImageBackground source={LowCalorie} style={styles.cardView}>
                        </ImageBackground>
                        
                        <Text style={styles.cardText}>Indomie Noodles</Text>
                        <Text style={styles.priceText}>NGN 1,200</Text>

                        <TouchableOpacity style={styles.authButton} onPress={() => alert('signed in')}>
                            <Text style={styles.authText}>Add</Text>
                        </TouchableOpacity>
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
        justifyContent: 'center'
      },
      contentContainer: {
          flex: 1,
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
        // alignSelf: 'center',
        justifyContent: 'center',
        // alignContent:  'center',
        // alignItems: 'center',
        marginVertical: 5
      },
      productCard: {
        borderWidth: 1,
        borderColor: '#000',
        color: '#fff',
        width: 170,
        height: 220,
        borderRadius: 10,
        // alignSelf: 'center',
        // justifyContent: 'center',
        // alignContent:  'center',
        // alignItems: 'center',
        marginHorizontal: 5,
      },
      priceText: {
        color: '#FF4900',
        fontFamily: 'muli-medium',
      },
      contentCard: {
        marginTop: 24,
        marginBottom: 20,
        // marginHorizontal: 5,
        backgroundColor: 'transparent',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent:  'center',
        alignItems: 'center'
    },
    cardText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 18,
        fontFamily: 'muli-extraBold',
        fontWeight: 'bold'
      },
      cardView: {
        color: '#fff',
        width: 150,
        height: 100,
        borderRadius: 10,
        // marginHorizontal: 5,
        justifyContent: 'center',
        resizeMode: "cover"
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
        marginVertical: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#ff9f23',
        // alignSelf: 'flex-end',
      },
  });