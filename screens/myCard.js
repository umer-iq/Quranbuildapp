import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
export default function myCard({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.texT}>Updates are underway...</Text>
      <TouchableOpacity
                    style={{
                        
                        flex: 0,
                        width:400,
                        height:60,
                        top:350,
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
         backgroundColor: "black",
         
         
         
        },
        texT:{
            color:'#00ff00',
            fontSize:30
        }
})