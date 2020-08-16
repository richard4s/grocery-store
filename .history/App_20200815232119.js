import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image , Text} from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';

//Auth
import Signin from './screens/auth/signin';
import Signup from './screens/auth/signup';
import ForgotPassword from './screens/auth/forgotPassword';

//Main Screens
// import CategoriesScreen from './screens/CategoriesScreen';

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'muli-black': require('./assets/fonts/mulli/Muli-Black.ttf'),
          'muli-bold': require('./assets/fonts/mulli/Muli-Bold.ttf'),
          'muli-regular': require('./assets/fonts/mulli/Muli-Regular.ttf'),
          'muli-medium': require('./assets/fonts/mulli/Muli-Medium.ttf'),
          'muli-light': require('./assets/fonts/mulli/Muli-Light.ttf'),
          'muli-extraBold': require('./assets/fonts/mulli/Muli-ExtraBold.ttf'),
          'muli-semiBold': require('./assets/fonts/mulli/Muli-SemiBold.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator >
            <Stack.Screen options={{ header: () => null }} name="Signin" component={Signin} />
            <Stack.Screen options={{ header: () => null }} name="Signup" component={Signup} />
            <Stack.Screen options={{ header: () => null }} name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen options={{ header: props => <LogoTitle {...props} /> }} name="Main" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

function LogoTitle() {
  return (
    <View style={styles.logoRight}>
      <Image
        style={styles.profileImg}
        source={require('./assets/images/images.png')}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // marginTop: 5,
  },
  logoRight: {
    // flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#fff',
    // alignSelf: 'flex-end'
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    // marginTop: 20,
    // alignSelf: 'flex-end',
    marginRight: 20
  }
});
