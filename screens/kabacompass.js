// import * as React from 'react';
// import {Image, StyleSheet} from 'react-native';
// import CompassHeading from 'react-native-compass-heading';

// const kabacompass = () => {
//   const [compassHeading, setCompassHeading] = React.useState(0);
//   //const [sound, setSound] = React.useState();
//   useEffect(() => {
//     const degree_update_rate = 3;

//     // accuracy on android will be hardcoded to 1
//     // since the value is not available.
//     // For iOS, it is in degrees
//     CompassHeading.start(degree_update_rate, ({heading, accuracy}) => {
//       setCompassHeading(heading);
//       //console.log('CompassHeading: ', heading, accuracy);
//     });

//     return () => {
//       CompassHeading.stop();
//     };
//   }, []);

//   return (
//     <Image
//       style={[
//         styles.image,
//         {transform: [{rotate: `${360 - compassHeading}deg`}]},
//       ]}
//       resizeMode="contain"
//       source={require('../assets/fasting.jpg')}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     width: '90%',
//     flex: 1,
//     alignSelf: 'center',
//   },
// });

// export default kabacompass;
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { Magnetometer } from 'expo-sensors';

// export default function kabacompass() {
//   const [{ x, y, z }, setData] = useState({
//     x: 0,
//     y: 0,
//     z: 0,
//   });
//   const [subscription, setSubscription] = useState(null);

//   const _slow = () => Magnetometer.setUpdateInterval(1000);
//   const _fast = () => Magnetometer.setUpdateInterval(16);

//   const _subscribe = () => {
//     setSubscription(
//       Magnetometer.addListener(result => {
//         setData(result);
//       })
//     );
//   };

//   const _unsubscribe = () => {
//     subscription && subscription.remove();
//     setSubscription(null);
//   };

//   useEffect(() => {
//     _subscribe();
//     return () => _unsubscribe();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Magnetometer:</Text>
//       <Text style={styles.text}>x: {x}</Text>
//       <Text style={styles.text}>y: {y}</Text>
//       <Text style={styles.text}>z: {z}</Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
//           <Text>{subscription ? 'On' : 'Off'}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
//           <Text>Slow</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={_fast} style={styles.button}>
//           <Text>Fast</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//   //   marginTop: 50,
//     //flex:1,
//     //flexDirection: 'row-reverse'
//     //direction:'ltr'
//     //backgroundColor:'black'
//   },
//   pagesize: {
//       top:30,
//       width: 410, 
//       height: 840,
//       transform: [{ rotateY: '180deg'}],
//       alignSelf:'center'
//   },
//   red: {
//     color: 'red',
//   },
// });

// import * as React from 'react';
// import { Text, View } from 'react-native';
// import * as Haptics from 'expo-haptics';
// import ZeroDegree from 'zero-degree'; /*
// import ZeroDegree from './ZeroDegree--extracted-from-package'; //*/

// let _Target = { latitude: 21.42249787166211, longitude: 39.826191718725504 };

// export default function kabacompass() {
//    const [err, setError] = React.useState(null);
//    const [degree, setDegree] = React.useState(null);
//    const [log, setLog] = React.useState(null);

//   React.useEffect(() => {
//     let zeroDegree;
//     async function initZeroDegree() {
//       zeroDegree = new ZeroDegree(_Target);  
//       zeroDegree._getLogData = log => setLog(log);

//       await zeroDegree.watchAsync(
//         degree => {
//           let rounded = Math.round(degree);
//           setDegree(rounded);
//           if(rounded === 0)
//             Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
//         },
//         err => setError(err));
//     }

//     initZeroDegree();

//     return () => zeroDegree.unwatch();
//    }, []);

//   return (
//     <View>
//       <Text></Text>
//       <Text></Text>
//       <Text>Target: {degree}&deg;</Text>
//       <Text>Error: {JSON.stringify(err)}</Text>
//       <Text>Info: {JSON.stringify(log).split(',').join('\n')}</Text>
//     </View>
//   );
// }


import { View, Text } from 'react-native'
import React from 'react'

export default function kabacompass() {
  return (
    <View>
      <Text>kabacompass</Text>
    </View>
  )
}