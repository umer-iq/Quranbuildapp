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

     lineHeight: 20,width:width,
          borderRadius: 25,
       
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
       
          fontSize: 14,
       
          textAlign: 'center',
       
          margin: 0
        }
      });
//    const load = "Loading..";
export default function fundamentalsislam({route,navigation}) {
  const [statebtn, setstatebtn] = React.useState('')
  const speak = () => {
    const thingToSay = 'Islam is a pure monotheistic religion. Meaning it is a religion that teaches us there is only one true God that Has the right to be worshiped by His creation, and everything else that exists is God’s creation.Furthermore, Islam teaches us that God exists outside His creation. God is unique, Has no children nor partners, there is none equal or comparable unto Him. He is All-Powerful, none can harm or benefit Him and none has the right to be worshipped but Him alone.Surah from Quran puts it most concise way: "Say,"He is ALLAH [who is] one,ALLAH,the Eternal Refuge.He neither begets nor is born,nor is there to Him any equivalent. ';
    Speech.speak(thingToSay,{pitch:1,rate:1});
    setstatebtn("a")
  };
const speak1 = () => {
const thingToSay = 'Second fundamental of islam is belief in the Messengers of Allah Alimighty.For the guidance of human beings ALLAH Almighty has sent Messengers from time to time.Estimated number of all Messengers of Almighty ALLAH is 124,000 more or less.The first Messenger in this line was ADAM(peace be upon him) and the last Prophet MUHAMMAD(peace be upon him).This belief is mandatory because every Prophet has preached Deen-Islam to His people but unfortunately after their demise their people has manipulated it.This process continued until Prophet MUHAMMAD whose hands the Deen was not only conveyed completely but ALLAH also preserved it.This belief also shows that only Islam is Gods true religion and He wants to embrace it like the Holy Quran says:Alif,Lam,Ra [This is] a Book which we have revealed to you,[O Mohammed],that you might bring mankind out of darkness into the light by permission of their Lord-to the path of the Exalted in Might,the Praiseworthy.';
Speech.speak(thingToSay,{pitch:1,rate:1});
setstatebtn("b")
};
const speak2 = () => {
const thingtosay = "The third fundamental of Islam is belief in Angels.Belief in Angels clear some important points like they are not god and they cannot benefit or harm anyone unless ALLAH wants to do so.{'\n'}Similarly being creature of ALLAH Almighty,Angels are bound to perform certain duties.{'\n'}One of the most important duties is recording our deeds.{'\n'}This belief keeps an individual away from going near the evils.";
Speech.speak(thingtosay,{pitch:1,rate:1});
setstatebtn("c")
}
const speak3 = () => {
const thingtosay = "Fourth fundamental of islam is belief in Holy books.To convey his commands verbally ALLAH Almighty also bestowed Holy books upon some of his Messengers.Today except Holy Quran all other divine books have undergone major changes of human intervention and so they are not present in their original form.But still belief in them is part of faith.This belief asked us to be sure that Islam has completed and no more Messengers will come till the Day of Judgement.";
Speech.speak(thingtosay,{pitch:1,rate:1});
setstatebtn("d")
}
const speak4 = () => {
const thingtosay = "Fifth fundamental of Islam is belief in day of Judgement.For an individual,belief in the Day of Judgement means that life is not eternal.We all have to leave this world one day and in the after world we will be asked for our deeds.This concept makes him/her more concerned about the life after death than this world.The person therefore tries to keep himself away from bad deeds and behave according to the will of ALLAH Almighty.The above mentioned beliefs are the fundamentals of Islam.They are called fundamentals because belief in them is the first step towards embracing Islam.";
Speech.speak(thingtosay,{pitch:1,rate:1});
setstatebtn("e")
}
const stop = () =>{
Speech.stop();
setstatebtn('')
}
  return ( 
    <ScrollView  showsHorizontalScrollIndicator={true}
    automaticallyAdjustContentInsets={true}  
   
   //pagingEnabled={true}
   //horizontal
   keyboardShouldPersistTaps='always'
   style={{
     alignContent:"center",flex:1,width:width,height:height,
     //borderRadius: 100,
     backgroundColor:'white'
   }} >
   <SafeAreaView style={{top:0,backgroundColor:'white',flex:1,padding:0}}>
   <View style={{flex:1,top:0}}>
      <ImageBackground
        style={{ flex: 1,  width:width,height:height ,
            
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/islamic-art-1024x768-wallpaper.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>Ist Fundamental of Islam:{'\n'}Islam is a pure monotheistic religion. Meaning it is a religion that teaches us there is only one true God that Has the right to be worshiped by His creation, and everything else that exists is God’s creation.
  Furthermore, Islam teaches us that God exists outside His creation. God is unique, Has no children nor partners, there is none equal or comparable unto Him. He is All-Powerful, none can harm or benefit Him and none has the right to be worshipped but Him alone.Surah from Quran puts it most concise way:{'\n'}
  قُلْ هُوَ ٱللَّهُ أَحَدٌ ٱللَّهُ ٱلصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ 
  {'\n'}Translation:"Say,"He is ALLAH [who is] one,ALLAH,the Eternal Refuge.He neither begets nor is born,nor is there to Him any equivalent."</Text>
  {statebtn === "a" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak} />}
  
  </View>
  </ImageBackground>
</View>

<View style={{flex:1,top:0}}>
<ImageBackground
        style={{ flex: 1,  width:width,height:height, 
           
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/islamic-art-1024x768-wallpaper.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>2nd Fundamental of Islam:{'\n'}Second fundamental of islam is belief in the Messengers of Allah Alimighty.For the guidance of human beings ALLAH Almighty has sent Messengers from time to time.Estimated number of all Messengers of Almighty ALLAH is 124,000 more or less.{'\n'}The first Messenger in this line was ADAM(P.B.U.H) and the last Prophet MUHAMMAD(P.B.U.H).{'\n'}This belief is mandatory because every Prophet has preached Deen-Islam to His people but unfortunately after their demise their people has manipulated it.{'\n'}This process continued until Prophet MUHAMMAD(P.B.U.H) whose hands the Deen was not only conveyed completely but ALLAH also preserved it.{'\n'}This belief also shows that only Islam is God's true religion and He wants to embrace it like the Holy Quran says{'\n'}"Alif,Lam,Ra [This is] a Book which we have revealed to you,[O Mohammed],that you might bring mankind out of darkness into the light by permission of their Lord-to the path of the Exalted in Might,the Praiseworthy.
  </Text>
  {statebtn === "b" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak1} />}
  
  </View>
  </ImageBackground>
</View>
<View style={{flex:1,top:0}}>
<ImageBackground
        style={{ flex: 1,  width:width,height:height 
           ,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/islamic-art-1024x768-wallpaper.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
      
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>3rd Fundamental of Islam:{'\n'}The third fundamental of Islam is belief in Angels.Belief in Angels clear some important points like they are not god and they cannot benefit or harm anyone unless ALLAH wants to do so.{'\n'}Similarly being creature of ALLAH Almighty,Angels are bound to perform certain duties.{'\n'}One of the most important duties is recording our deeds.{'\n'}This belief keeps an individual away from going near the evils.
  </Text>
  {statebtn === "c" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak2} />}
  
  
  </View>
  </ImageBackground>
</View>
  <View style={{flex:1,top:0}}>
<ImageBackground
        style={{ flex: 1,  width:width, height:height,
           
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/islamic-art-1024x768-wallpaper.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>4th Fundamental of Islam:{'\n'}Fourth fundamental of islam is belief in Holy books.To convey his commands verbally ALLAH Almighty also bestowed Holy books upon some of his Messengers.{'\n'}Today except Holy Quran all other divine books have undergone major changes of human intervention and so they are not present in their original form.{'\n'}But still belief in them is part of faith.This belief asked us to be sure that Islam has completed and no more Messengers will come till the Day of Judgement.
  </Text>
  {statebtn === "d" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak3} />}
  </View>
  </ImageBackground>
</View>
 <View style={{flex:1,top:0}}>
<ImageBackground
        style={{ flex: 1,  width:width,height:height, 
          
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/islamic-art-1024x768-wallpaper.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>5th Fundamental of Islam:{'\n'}Fifth fundamental of Islam is belief in day of Judgement.{'\n'}For an individual,belief in the Day of Judgement means that life is not eternal.{'\n'}We all have to leave this world one day and in the after world we will be asked for our deeds.{'\n'}This concept makes him/her more concerned about the life after death than this world.The person therefore tries to keep himself away from bad deeds and behave according to the will of ALLAH Almighty.{'\n'}The above mentioned beliefs are the fundamentals of Islam.They are called fundamentals because belief in them is the first step towards embracing Islam.
  </Text>
  
  {statebtn === "e" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak4} />}
  </View>
       </ImageBackground>
</View>



   </SafeAreaView>
    </ScrollView>
  )
}