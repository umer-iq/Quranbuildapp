import { StyleSheet, Text, View,TouchableOpacity,Dimensions,Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { Button, Linking } from 'react-native';
const { width,height } = Dimensions.get('window');
export default function myCard({navigation}) {
  const handlePress = () => {
    const url = 'https://play.google.com/store/apps/details?id=com.Quran.player';
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texT}>Quran Player by famous recitor:Misharay Rashid Alafasy download the app and listen the Quran in  heart touching voice.</Text>
      <TouchableOpacity
                    style={{
                        
                        flex: 0,
                        width:50,
                        height:40,
                        top: height-820,
                        left:0,
                        
                        backgroundColor: COLORS.primary,
                        marginHorizontal: SIZES.base,
                        marginVertical: SIZES.base,
                        //borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        //transform: [{ rotateY: '180deg'}]

                    }}
                    onPress={handlePress}
                ><Image source={require('../assets/ic_launcher.png')}></Image></TouchableOpacity>
      <TouchableOpacity
                    style={{
                        
                        flex: 0,
                        width:300,
                        height:60,
                        top: height-590,
                        left:0,
                        
                        backgroundColor: COLORS.primary,
                        marginHorizontal: SIZES.base,
                        marginVertical: SIZES.base,
                        //borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        //transform: [{ rotateY: '180deg'}]

                    }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>Back to main</Text>
                </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
         alignItems: 'center',
        justifyContent: 'center',
         backgroundColor: "white",width:width,height:height
         
         
         
        },
        texT:{
            color:'black',
            fontSize:20
        }
})
