import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground, TextInput, KeyboardAvoidingView } from 'react-native';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <View style={styles.topDraw}>
      <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.customActive : Colors.tabIconDefault}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  topDraw: {
    borderTopWidth: 5,
    borderTopColor: '#ff9f23'
  }
})
