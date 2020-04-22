import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground, TextInput, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../../components/StyledText';
import { Ionicons } from '@expo/vector-icons';

import bg from '../../assets/images/main-bg.png';
import appLogo from '../../assets/images/logo.png';


export default function Signup({navigation}) {
    const [ onChangeText] = React.useState('');
    
    // onChangeText = (text) => {
    //     console.log(text)
    // }

  return (
    <View style={styles.container}>
        <ImageBackground source={bg} style={styles.imgContainer}>
            <View style={styles.logoView}>
                <Image source={appLogo} style={styles.appLogo}></Image>
            </View>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.subHead}>Sign up</Text>
                <MonoText style={styles.bodyText}>Let's get started</MonoText>

                
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"} >
                    <View style={styles.fields}>

                    <View style={styles.inputField}>
                        <Ionicons style={styles.mainIcon} name="ios-person" size={20} color="#ff9500"/>
                        <TextInput
                            style={styles.input}
                            placeholder={'Firstname'}
                            onChangeText={(email) => email}
                            underlineColorAndroid="transparent" keyboardType="default" returnKeyType={'done'}
                        />
                    </View>

                    <View style={styles.inputField}>
                        <Ionicons style={styles.mainIcon} name="ios-person" size={20} color="#ff9500"/>
                        <TextInput
                            style={styles.input}
                            placeholder={'Lastname'}
                            onChangeText={(email) => email}
                            underlineColorAndroid="transparent" keyboardType="default" returnKeyType={'done'}
                        />
                    </View>

                    <View style={styles.inputField}>
                        <Ionicons style={styles.mainIcon} name="ios-mail" size={20} color="#ff9500"/>
                        <TextInput
                            style={styles.input}
                            placeholder={'Email'}
                            onChangeText={(email) => email}
                            underlineColorAndroid="transparent" keyboardType="email-address" returnKeyType={'done'}
                        />
                    </View>

                    <View style={styles.inputField}>
                        <Ionicons style={styles.mainIcon} name="ios-key" size={20} color="#ff9500"/>
                        <TextInput
                            style={styles.input}
                            placeholder={'Password'}
                            onChangeText={(password) => {password}} returnKeyType={'done'}
                            underlineColorAndroid="transparent" keyboardType="default" secureTextEntry
                        />
                    </View>

                    <TouchableOpacity style={styles.authButton} onPress={() => alert('signed in')}>
                        <Text style={styles.authText}>Sign up</Text>
                    </TouchableOpacity>

                    <View style={styles.bottomView}>
                        <Text style={styles.bottomLinks} onPress={() => {navigation.navigate('Signin')}}>Already have an account?</Text>
                    </View>

                    
                    
                </View>
                </KeyboardAvoidingView>
            </ScrollView>
            
        </ImageBackground>
    </View>

    
  );
}

Signup.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    marginHorizontal: 15,
    marginTop: 10
  },
  authText: {
    fontSize: 16,
    fontFamily: 'muli-black',
    color: '#ff9f23',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 15,
  },
  authButton: {
    width: 300,
    height: 55,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  bottomLinks: {
    fontFamily: 'muli-regular',
    fontSize: 14,
    marginVertical: 5,
    color: '#fff',
    textAlign: 'right'
  },
  bottomView: {
    marginVertical: 15,
    alignSelf: 'flex-end',
    marginHorizontal: 50
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  subHead: {
    fontSize: 34,
    color: '#fff',
    fontFamily: 'muli-black'
  },
  bodyText: {
      fontSize: 16,
      color: '#fff',
      marginVertical: 20,
  },
  loginInput: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#656565',
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  fields: {
      alignContent: 'center',
      alignItems: 'center'
  },
  imgContainer: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  appLogo: {
      width: 100,
      height: 100,
  },
  logoView: {
      alignItems: 'center',
      marginTop: 60
  },
  inputField: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 10,
    width: 300,
    height: 55
},
mainIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    borderRadius: 20,
    fontFamily: 'muli-regular'
},
});
