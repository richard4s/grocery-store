import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function SearchScreen() {
    return(
        <ScrollView>
            <ScrollView contentContainerStyle={styles.contentCard} horizontal={true}>
                <View style={styles.cardView}>
                <MonoText style={styles.cardText}>Low Calorie</MonoText>
                </View>

                <View style={styles.cardView}>
                <MonoText style={styles.cardText}>Protein</MonoText>
                </View>
            </ScrollView>

            <ScrollView contentContainerStyle={styles.contentCard} horizontal={true}>
                <View style={styles.cardView}>
                <MonoText style={styles.cardText}>Low Calorie</MonoText>
                </View>

                <View style={styles.cardView}>
                <MonoText style={styles.cardText}>Protein</MonoText>
                </View>
            </ScrollView>
        </ScrollView>
    )
}

SearchScreen.navigationOptions = {
    header: null,
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });