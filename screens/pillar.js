import * as React from 'react';
import { Audio } from 'expo-av';
import { FONTS, COLORS, SIZES, icons } from "../constants";
import * as Speech from 'expo-speech';
import {
    View,
    Text,LayoutAnimation, Platform, UIManager,
    ImageBackground,Alert,SafeAreaView,
    TouchableOpacity,TouchableWithoutFeedback,
    Image,Button,
    ScrollView,
    Animated,StyleSheet,Dimensions, ActivityIndicator
} from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons';
 

const { width,height } = Dimensions.get('window');
   
 
 const styles = StyleSheet.create({
        container: {
        //   marginTop: 50,
          //flex:1,
          //flexDirection: 'row-reverse'
          //direction:'ltr'
          backgroundColor:'white',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        },
        pagesize: {
            top:30,
            width: 410, 
            height: 840,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center'
        },
        red: {
          color: 'red',
        },
        alert: {
            position: 'absolute',
            top:115,
            backgroundColor: 'green',
            width: '100%',
            overflow: 'hidden'
        },
        msg: {
            margin: 10,
            marginHorizontal: 20,
            color: '#fff'
        }, MainContainer: {
 
          flex: 1,
          justifyContent: "center",
          alignItems: "center",top:0,left:0,width:width,height:height
       
        }, TextComponentStyle: {

     lineHeight: 22,
          borderRadius: 25,width:width,
       
          // Set border width.
          borderWidth: 2,
       
          // Set border Hex Color Code Here.
          borderColor: '#0000CD',
       
          // Setting up Text Font Color.
          color: '#0000CD',
       
          // Setting Up Background Color of Text component.
          backgroundColor : '#CDDC39',
          
          // Adding padding on Text component.
          padding : 2,
       
          fontSize: 13,
       
          textAlign: 'center',
       
          margin: 0
        }
      });
//    const load = "Loading..";
export default function pillar({route,navigation}) {
  const [statebtn, setstatebtn] = React.useState("")
  const speak = () => {
    const thingToSay = 'The belief that "There is no god but ALLAH, and Muhammad is the Messenger of ALLAH" is central to Islam. This phrase, written in Arabic, is often prominently featured in architecture and a range of objects, including the Quran,Islams holy book of divine revelations. One becomes a Muslim by reciting this phrase with conviction with true belief.';
    Speech.speak(thingToSay,{pitch:1,rate:1});
   setstatebtn('a')
  };
  const speak1 = () => {
  const thingToSay = 'Second pillar of Islam is prayer which is mandatory.Muslims pray facing Kabba direction five times a day: at dawn, noon, mid-afternoon, sunset, and after dark.You can see the table of prayers in "how to pray in Islam".Prayer includes a recitation of the opening chapter (sura) of the Quran, and is sometimes performed on a small rug or mat used expressly for this purpose.Muslims can pray individually at any clean location or together in a mosque, where a leader(Imam) in prayer guides the congregation.';
  Speech.speak(thingToSay,{pitch:1,rate:1});
  setstatebtn('b')
  };
  const speak2 = () => {
  const thingtosay = " In accordance with Islamic law, Muslims donate a fixed portion of their income to community members in need.As for Zakat ruling, it is an obligation in Islam. Allah the Almighty says: “establish prayer and give Zakah”. It is also established in the Sunnah of the Prophet, peace be upon him.Calculation of zakat:nesaab is the threshold for which a Muslim’s personal wealth must be above if he or she is to be eligible to pay Zakat. If the money reaches the nesaab, a lunar year has passed on it and its owner has full ownership,zakat on the money must be paid by its owner, and its amount is one quarter of a tenth means (2.5%)nesaab of Zakat.money is calculated based on one of the two nesaab values from which the threshold is determined as:85 grams of Gold or 595 grams of Silver value";
  Speech.speak(thingtosay,{pitch:1,rate:1});
  setstatebtn('c')
  }
  const speak3 = () => {
  const thingtosay = " During the daylight hours of Ramadan(starts from Fajar azan and ends at Mugrib azan).Ramadan in Islam the ninth month of the Muslim calendar and the holy month of fasting.It begins and ends with the appearance of the crescent moon. all Muslims are required to abstain from food and drink. Through this temporary deprivation, they renew their awareness of and gratitude for everything God has provided in their lives—including the Qur'an, which was first revealed during this month.";
  Speech.speak(thingtosay,{pitch:1,rate:1});
  setstatebtn('d')
  }
  const speak4 = () => {
  const thingtosay = "Every Muslim whose health and finances permit it must make at least one visit to the holy city of Mecca, in present-day Saudi Arabia. The Kaabaa, a cubical structure covered in black embroidered hangings, is at the center of the Haram Mosque in Mecca.And is known as home of Allah in this world. Since the time of the Prophet Muhammad peace be upon him, believers from all over the world have gathered around the Kaabaa in Mecca on the eighth and twelfth days of the final month of the Islamic calendar.";
  Speech.speak(thingtosay,{pitch:1,rate:1});
  setstatebtn('e')
  }
  const stop = () =>{
  Speech.stop();
  setstatebtn('')
  }
  return ( 
    <ScrollView  showsHorizontalScrollIndicator={true}
    automaticallyAdjustContentInsets={true}  
   
   //pagingEnabled={true}
   keyboardShouldPersistTaps='always'
   style={{
     alignContent:"center",flex:1,width:width,height:height,
     //borderRadius: 100,
     backgroundColor:'white'
   }} >
   <SafeAreaView style={{top:0,backgroundColor:'white',flex:1,padding:0}}>
   <View style={{flex:1}}>
      <ImageBackground
        style={{ flex: 1,  width:width, 
            height: height,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/islamic-art-1024x768-wallpaper.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>Profession of Faith:{'\n'}The belief that "There is no god but ALLAH, and Muhammad is the Messenger of ALLAH" is central to Islam. This phrase, written in Arabic, is often prominently featured in architecture and a range of objects, including the Qur'an, Islam's holy book of divine revelations. One becomes a Muslim by reciting this phrase with conviction with true belief.
  </Text>
  {statebtn === "a" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak} />}
  
  </View>
       </ImageBackground>
</View>
<View style={{flex:1,top:0}}>
<ImageBackground
        style={{ flex: 1,  width:width, 
            height: height,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/islamic-art-1024x768-wallpaper.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>Prayer(Salat):{'\n'}Second pillar of Islam is prayer which is mandatory.Muslims pray facing Kabba direction five times a day: at dawn, noon, mid-afternoon, sunset, and after dark.{'\n'}You can see the table of prayers in "how to pray in Islam".{'\n'}Prayer includes a recitation of the opening chapter (sura) of the Qur'an, and is sometimes performed on a small rug or mat used expressly for this purpose.Muslims can pray individually at any clean location or together in a mosque, where a leader(Imam) in prayer guides the congregation.
  </Text>
  {statebtn === "b" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak1} />}
  
  </View>
       </ImageBackground>
</View>
<View style={{flex:1,top:0}}>
<ImageBackground
        style={{ flex: 1,  width:width, 
            height:height,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/islamic-art-1024x768-wallpaper.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>Zakat(Alms):{'\n'}In accordance with Islamic law, Muslims donate a fixed portion of their income to community members in need.As for Zakat ruling, it is an obligation in Islam. Allah the Almighty says: “establish prayer and give Zakah”. It is also established in the Sunnah of the Prophet, peace be upon him.{'\n'}Calculation of zakat:{'\n'}nesaab is the threshold for which a Muslim’s personal wealth must be above if he or she is to be eligible to pay Zakat. If the money reaches the nesaab, a lunar year has passed on it and its owner has full ownership,zakat on the money must be paid by its owner, and its amount is one quarter of a tenth (2.5%).{'\n'}

nesaab of Zakat on money is calculated based on one of the two nesaab values from which the threshold is determined:

85 grams of Gold or
595 grams of Silver value.
  </Text>
  {statebtn === "c" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak2} />}
  
  
  </View>
       </ImageBackground>
</View>
  <View style={{flex:1,top:0}}>
<ImageBackground
        style={{ flex: 1,  width:width, 
            height:height,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/islamic-art-1024x768-wallpaper.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>Fasting(Sawm):{'\n'}During the daylight hours of Ramadan(starts from Fajar azan and ends at Mugrib azan), Ramadan in Islam the ninth month of the Muslim calendar and the holy month of fasting.It begins and ends with the appearance of the crescent moon, all Muslims are required to abstain from food and drink. Through this temporary deprivation, they renew their awareness of and gratitude for everything God has provided in their lives—including the Qur'an, which was first revealed during this month.
  </Text>
  {statebtn === "d" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak3} />}
  
  </View>
       </ImageBackground>
</View>
 <View style={{flex:1,top:0}}>
<ImageBackground
        style={{ flex: 1,  width:width, 
            height:height,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/islamic-art-1024x768-wallpaper.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>Pilgrimage (hajj):{'\n'}Every Muslim whose health and finances permit it must make at least one visit to the holy city of Mecca, in present-day Saudi Arabia. The Ka'ba, a cubical structure covered in black embroidered hangings, is at the center of the Haram Mosque in Mecca.And is known as home of Allah in this world. Since the time of the Prophet Muhammad(P.B.U.H), believers from all over the world have gathered around the Ka'ba in Mecca on the eighth and twelfth days of the final month of the Islamic calendar.
  </Text>
  {statebtn === "e" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak4} />}
  
  </View>
       </ImageBackground>
</View>

    
   </SafeAreaView>
    </ScrollView>
  )
}