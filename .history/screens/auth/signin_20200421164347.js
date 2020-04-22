import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../../components/StyledText';

import bg from '../../assets/images/bg-splash.png';
const image = { uri: "https://reactjs.org/logo-og.png" };


export default function Signin() {
  return (
    <ImageBackground source={image} style={styles.imgContainer}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text>Lemaooo</Text>
        </ScrollView>
    </ImageBackground>
  );
}

Signin.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  imgContainer: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
