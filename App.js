import React from 'react';
//import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookDetail } from "./screens/";
import Tabs from "./navigation/tabs";
import Yaseenpages from './screens/Yaseenpages';
import Manzil from './screens/Manzil';
import Bakra from './screens/Bakra'
//import LoginScreen from './src/login/login';
import AuDio from './screens/AuDio'
import audio2 from './screens/audio2';
import myCard from './screens/myCard';
import Salah from './screens/Salah'
import kalma  from './screens/kalma';
import Azan from './screens/Azan';
import kalma2 from './screens/kalma2';
import kalma3 from './screens/kalma3';
import kalma4 from './screens/kalma4';
import kalma5 from './screens/kalma5';
import kalma6 from './screens/kalma6';
import fundamentalsislam from './screens/fundamentalsislam';
import pillar from './screens/pillar';
import Fastingdua from './screens/Fastingdua'
import iftari from './screens/iftari';
import azanfajar from './screens/azanfajar';
import audio3 from './screens/audio3';
import audio4 from './screens/audio4';
import Quran from './screens/Quran';
import eidsalah from './screens/eidsalah';
import kabacompass from './screens/kabacompass';
import 'expo-dev-client';
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}
// Android Banner: ca-app-pub-8343081326487707/1100303999
// customaize banner :ca-app-pub-8343081326487707/5321801798
//interstional:ca-app-pub-8343081326487707/2497710798

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />

                {/* Screens */}
                <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
                <Stack.Screen name="Yaseenpages" component={Yaseenpages} options={{ headerShown: false }} />
                <Stack.Screen name="Manzil" component={Manzil} options={{ headerShown: false }} />
                <Stack.Screen name="Bakra" component={Bakra} options={{ headerShown: false }} />
                {/* <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} /> */}
                <Stack.Screen name="Audio" component={AuDio} options={{ headerShown: false }} />
                <Stack.Screen name="audio2" component={audio2} options={{ headerShown: false }} />
                <Stack.Screen name="card" component={myCard} options={{ headerShown: false }} />
                <Stack.Screen name="salah" component={Salah} options={{ headerShown: false }} />
                <Stack.Screen name="kalma" component={kalma} options={{ headerShown: false }} />
                <Stack.Screen name="Azan" component={Azan} options={{ headerShown: false }} />
                <Stack.Screen name="azanfajar" component={azanfajar} options={{ headerShown: false }} />
                <Stack.Screen name="kalmatwo" component={kalma2} options={{ headerShown: false }} />
                <Stack.Screen name="kalmathree" component={kalma3} options={{ headerShown: false }} />
                <Stack.Screen name="kalmafour" component={kalma4} options={{ headerShown: false }} />
                <Stack.Screen name="kalmafive" component={kalma5} options={{ headerShown: false }} />
                <Stack.Screen name="kalmasix" component={kalma6} options={{ headerShown: false }} />
                <Stack.Screen name="pillar" component={pillar} options={{ headerShown: false }} />
                <Stack.Screen name="fasting" component={Fastingdua} options={{ headerShown: false }} />
                <Stack.Screen name="Iftari" component={iftari} options={{ headerShown: false }} />
                <Stack.Screen name="fundamental" component={fundamentalsislam} options={{ headerShown: false }} />
                <Stack.Screen name="audio3" component={audio3} options={{ headerShown: false }} />
                <Stack.Screen name="audio4" component={audio4} options={{ headerShown: false }} />
                <Stack.Screen name="Quran" component={Quran} options={{ headerShown: false }} />
                <Stack.Screen name="eidsalah" component={eidsalah} options={{ headerShown: false }} />
                <Stack.Screen name="kabacompass" component={kabacompass} options={{ headerShown: false }} />





            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;



// import React from "react";
// import {Image, Text, StyleSheet, View, StatusBar } from "react-native";
// import icon from './assets/icon.png'

// create a component that return some jsx / simple function
// const App = () => {
//   return (
//     <View>

//       <Text style={styles.textStyle}>Hello world!</Text>
//       <StatusBar style="auto" />
      {/* <Image
  source={require('./assets/21.09.2022_17.41.23_REC.png')}
  style={{  width: null, height: 400  }}
/>
<Image
  source={require('./assets/21.09.2022_17.42.05_REC1.png')}
  style={{ width: null, height: 400 }}
/>
<Image
  source={require('./assets/21.09.2022_17.42.50_REC2.png')}
  style={{ width: 400, height: 400 }}
/>
<Image
  source={require('./assets/21.09.2022_17.43.43_REC.png')}
  style={{ width: 400, height: 400 }}
// /> */}
//     </View>
//   );
// };


// // Create a StyleSheet to style the component
// const styles = StyleSheet.create({
//   textStyle: {
//     color: "red",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });


// // export the file, so that we can use it elsewhere in our app
// export default App;
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import CustomComponent from './src/screens/CustomComponent';
// import ProfileScreen from './src/screens/ProfileScreen';
// import { View, } from 'react-native-web';
// export const App = () => {
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home'>
//         <Stack.Screen
//           name="Home"
//           component={CustomComponent}
//           options={{ title: 'Welcome' }}
//         />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
    
//   );
// };