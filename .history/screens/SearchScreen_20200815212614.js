import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import { SearchBar } from 'react-native-elements';

import LowCalorie from '../assets/images/food/Instapost2.jpg';
import Protein from '../assets/images/food/Instapost3.jpg';

export default class SearchScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            search: '',
        };
    }
    
    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <>
                <SearchBar
                    placeholder="Search" lightTheme={true} containerStyle={{backgroundColor: '#fbfbfb', borderWidth: 0, borderColor: '#fbfbfb' }}
                    onChangeText={this.updateSearch} inputContainerStyle={{backgroundColor: '#e5e4ea', borderRadius: 30 }}
                    value={search}
                />

                <ScrollView>
                    <ScrollView contentContainerStyle={styles.contentCard} horizontal={true}>
                        <ImageBackground source={LowCalorie} style={styles.cardView}>
                            <MonoText style={styles.cardText}>Low Calorie</MonoText>
                        </ImageBackground>

                        <ImageBackground source={Protein} style={styles.cardView}>
                            <MonoText style={styles.cardText}>Protein</MonoText>
                        </ImageBackground>
                    </ScrollView>

                    <ScrollView contentContainerStyle={styles.contentCard} horizontal={true}>
                    <ImageBackground source={LowCalorie} style={styles.cardView}>
                            <MonoText style={styles.cardText}>Low Calorie</MonoText>
                        </ImageBackground>

                        <ImageBackground source={Protein} style={styles.cardView}>
                            <MonoText style={styles.cardText}>Protein</MonoText>
                        </ImageBackground>
                    </ScrollView>
                </ScrollView>
            </>
        );
    }
}

SearchScreen.navigationOptions = {
    header: null,
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    contentCard: {
        marginTop: 20,
        backgroundColor: 'transparent'
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
        width: 180,
        height: 100,
        borderRadius: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        resizeMode: "cover"
      },
  });