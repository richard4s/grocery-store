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
              <MonoText>Child 1</MonoText>
            </View>

          </ScrollView>
          
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
  },
  contentCard: {
    marginTop: 20
  },
  cardView: {
    borderWidth: 1,
    borderColor: '#000',
    width: 180,
    height: 100,
    borderRadius: 10
  }
});
