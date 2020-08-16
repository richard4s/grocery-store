import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,
  ImageBackground, TextInput, TouchableHighlight, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-community/async-storage';

import { MonoText } from '../../components/StyledText';
import { Ionicons } from '@expo/vector-icons';

import bg from '../../assets/images/main-bg.png';
import appLogo from '../../assets/images/logo.png';

import axiosHelper from '../../constants/AxiosHelper';

import Spinner from 'react-native-loading-spinner-overlay';

import Modal, { ModalTitle, ModalContent, SlideAnimation, ModalFooter, ModalButton } from 'react-native-modals';
import FeatherIcons from 'react-native-vector-icons/Feather';


export default function Signin({navigation}) {
    const [ onChangeText] = React.useState('');

    const [emailAddress, setEmailAddress] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [isVisible, setVisible] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [spinner, setSpinner] = React.useState(false);
    const [successLog, setSuccessLog] = React.useState(true);

    const loginUser = async () => {
      axiosHelper.post('/login', {
        email: emailAddress,
        password: password
      })
      .then( (response) => {
        console.log(response);

        setVisible(true);
        setIsLoading(false)
        setSpinner(false)
        setSuccessLog(true)

        // try {
        //   await AsyncStorage.setItem('user', response)
        // } catch (e) {
        //   // saving error
        // }

        navigation.navigate('Main')

      })
      .catch( (error) => {
        setSuccessLog(false)
        setIsLoading(false);
        console.log('Error', error, 'successLog', successLog);
      })
    }

    const SuccessDialog = () => {
      return(
        <View>
          <FeatherIcons style={{ textAlign: "center"}} name="check-circle" size={30} color="green" />
          <Text>Welcome back!</Text>
        </View>   
      )
    }
  
    const ErrorDialog = () => {
      return(
        <View>
          <FeatherIcons style={{ textAlign: "center"}} name="x" size={30} color="red" />
          <Text>Invalid Credentials. Try again later</Text>
        </View>   
      )
    }

    _login = () => {
      setSpinner(true);
      setIsLoading(true);
    
       if (emailAddress === '' || password === '') {

        setVisible(true);
        setSpinner(true);
        setIsLoading(true);
        setSuccessLog(false);

        console.log('successlog1: ', successLog)
        
       } else {
         loginUser()
       }
    }
    
  return (
    
    <View style={styles.container}>
        <ImageBackground source={bg} style={styles.imgContainer}>
      
        {/* {
          !successLog &&
            <MonoText>Small Mono </MonoText>
        } */}
        {!successLog &&
            <Modal
            visible={isVisible}
            modalAnimation={new SlideAnimation({
              slideFrom: 'bottom',
            })}
            onSwipeOut={(event) => {
              setVisible(false);
            }}
            footer={
              <ModalFooter>
                <ModalButton
                  text="OK"
                  onPress={() => {
                    setVisible(false);
                  }}
                />
              </ModalFooter>
            }
            >
            <ModalContent>
                { 
                  successLog == false && <ErrorDialog />
                }
            </ModalContent>
          </Modal>
           } 

            <View style={styles.logoView}>
                <Image source={appLogo} style={styles.appLogo}></Image>
            </View>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.subHead}>Sign in</Text>
                <MonoText style={styles.bodyText}>Please enter your credentials</MonoText>

                <View style={styles.fields}>
                    <View style={styles.inputField}>
                        <Ionicons style={styles.mainIcon} name="ios-mail" size={20} color="#ff9500"/>
                        <TextInput
                            style={styles.input}
                            placeholder={'Email'}
                            onChangeText={(emailAddress) => setEmailAddress(emailAddress)} returnKeyType={'done'}
                            underlineColorAndroid="transparent" keyboardType="email-address"
                        />
                    </View>

                    <View style={styles.inputField}>
                        <Ionicons style={styles.mainIcon} name="ios-key" size={20} color="#ff9500"/>
                        <TextInput
                            style={styles.input}
                            placeholder={'Password'}
                            onChangeText={(password) => setPassword(password)} returnKeyType={'done'}
                            underlineColorAndroid="transparent" keyboardType="default" secureTextEntry
                        />
                    </View>

                    <TouchableOpacity style={styles.authButton} onPress={() => _login()}>
                        <Text style={styles.authText}>Sign in
                        {
                          Platform.OS === 'android' ?
                            <Spinner
                            visible={this.state.spinner}
                            textContent={'Loading...'}
                            textStyle={{color: '#fff'}}
                          /> :
                          <ActivityIndicator style={styles.loader} size="small" animating={isLoading} color="#ff9500" />
                        }
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.bottomView}>
                        <Text style={styles.bottomLinks} onPress={() => {navigation.navigate('Signup')}}>Don't have an account?</Text>
                        <Text style={styles.bottomLinks} onPress={() => {navigation.navigate('ForgotPassword')}}>Forgot password?</Text>
                    </View>
                    
                </View>
            </ScrollView>
            
        </ImageBackground>
    </View>

    
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
    marginHorizontal: 15,
    marginTop: 40
  },
  authText: {
    // fontSize: 16,
    // fontFamily: 'muli-black',
    // color: '#ff9f23',
    // textTransform: 'uppercase',
    // textAlign: 'center',
    // paddingVertical: 15,

    fontSize: 16,
    fontFamily: 'muli-black',
    color: '#ff9f23',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 20,
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
      marginTop: 85
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
loader: {
  textAlign: 'center',
    // paddingVertical: 15,
  paddingTop: 37,
  paddingLeft: 10
}
});
