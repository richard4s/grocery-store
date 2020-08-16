import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import { SearchBar } from 'react-native-elements';

export default class SearchScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            search: '',
        };

        const { search } = this.state;
    }
    
    
    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        return (
            <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
            />
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
  });