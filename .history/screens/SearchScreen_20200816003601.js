import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import { SearchBar } from 'react-native-elements';

import LowCalorie from '../assets/images/food/Instapost5.png';
import Protein from '../assets/images/food/Instapost6.png';

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
                    placeholder="Search" lightTheme={true} inputStyle={{ fontFamily: 'muli-regular', fontSize: 18, marginTop: -30 , marginBottom: -30}}
                    containerStyle={{ backgroundColor: '#fbfbfb', borderWidth: 0, borderColor: '#fbfbfb' }}
                    onChangeText={this.updateSearch} inputContainerStyle={{ backgroundColor: '#e5e4ea', borderRadius: 30 }}
                    value={search}
                />

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