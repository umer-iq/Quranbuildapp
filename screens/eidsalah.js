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
 
          flex: 1,width:width,height:height,
          justifyContent: "center",
          alignItems: "center",top:0,left:0
       
        }, TextComponentStyle: {

     lineHeight: 19,width:width,
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
       
          fontSize: 15,
       
          textAlign: 'center',
       
          margin: 0
        }
      });
//    const load = "Loading..";
export default function pillar({route,navigation}) {
  const [statebtn, setstatebtn] = React.useState('')
  const speak = () => {
    const thingToSay = 'The Eid prayer can be slightly confusing, since we only do it twice a year and it’s necessary to refresh our memory! So we’ve prepared an easy guide to help you pray the Eid prayer. Follow the below steps on both Eid al-Fitr and Eid al-Adha. (They are based on the Hanafi school of thought).';
    Speech.speak(thingToSay,{pitch:1,rate:1});
    setstatebtn("a")
  };
const speak1 = () => {
const thingToSay = 'Before going to the Eid prayer, it is Sunnah to make ghusl and put on your best clothes. Eid is a celebration, after all! It is also Sunnah to recite takbeer after leaving your house as you travel to the Eid prayer. This is: Allahu Akbar, Allahu Akbar. Laa eelaaha. elaal laah wal lahu Akbar, Allahu Akbar wa lil lahel hamd. Ibn Abbas said, ‘The Prophet peace be upon him went out to the place of prayer on the Day of eid and prayed two raka’ah of Eid prayer, not praying before or after them’.copied from [Bukhari] shareef.Just like with other prayers, remember to make your niyyah (intention) before you start.that is.‘I intend to pray two raka’ah of the Eid prayer for Allaa facing the Kaabaa’. ';
Speech.speak(thingToSay,{pitch:1,rate:1});
setstatebtn("b")
};

const speak2 = () => {
//const thingtosay = " SubhanaKa laahumma wa bihamdiKa, wa ta barakaa smuKa, wa ta aala jaduKa, wa laa eelaa ha geruK"
const thingtosay = "Start your prayer by raising your hands up to your earlobes for men, and shoulders for women, while saying the takbeer: Allahu Akbar. Then, place your right hand over your left, just below the naval. Women should place their hands below their chest.Recite your opening supplication: SubhanaKa laahumma wa bihamdiKa, wa ta barakaa smuKa, wa ta aala jaduKa, wa laa eelaa ha geruK. This means: O Allah, glory and praise are for You, and blessed is Your Name, and exalted is Your Majesty and there is no god but You.";
Speech.speak(thingtosay,{pitch:1,rate:1});
setstatebtn("c")
}
const speak3 = () => {
const thingtosay = "Now comes the main thing that differentiates the Eid prayer from other prayers! The Imam will now recite multiple takbeers to start the prayer. For each takbeer, raise your hands up to your ears/shoulders and then let them fall to your sides.The number of takbeers will vary depending on the Imam. A Hanafi Imam will say takbeer three times. But typically, your Imam will run through the amount of takbeers prior to the start of the prayer, so pay attention! Now that the takbeers are over, place your right hand over your left below your chest/below your navel, as you would normally do while praying. Now the Imam will recite Surah al-Fatihah followed by another surah.The rest of the rak’ah will be prayed the same as your normal compulsory prayers. If you’re a beginner, please see our blog about how to perform Salah. If not, continue reading!";
Speech.speak(thingtosay,{pitch:1,rate:1});
setstatebtn("d")
}
const speak4 = () => {
const thingtosay = " In the second rak’ah, the Imam will recite Surah al-Fatihah followed by another surah.After this Qur’an recitation, the Imam will recite multiple takbeers again! Remember, for each takbeer, raise your hands to your ears/shoulders and let them fall to your side. A Hanafi Imam will recite three takbeers, but other Imams will be different, so pay attention.When the takbeers are over, go down into a bowing position (ruku).The rest of the rak’ah will be the same as your normal compulsory prayers.After the prayer, the Imam will address the people in a (sermon). This can last anywhere from around 10-30 minutes, during which the Imam will address important Islamic issues. It is essential that you listen to the sermon.";
Speech.speak(thingtosay,{pitch:1,rate:1});
setstatebtn("e")
}
const speak5 =() =>{
const thingtosay='One more thing - take a different route home after praying. Both the routes you take will testify that you attended this prayer on the Day of Judgement. Abu Huraira narrates that when the Messenger (peace be upon him) would go for Eid (prayer), he would return taking a different path from the one he had used to come. reference from [Ibn Majah]​.';
Speech.speak(thingtosay,{pitch:1,rate:1});
setstatebtn("f")
}
const speak6 =() =>{
const thingtosay='There are just a few more things you need to know for each Eid prayer.It is Sunnah to eat something before the prayer, usually something sweet like dates.You must pay your Zakat al-Fitr (Fitrana) before the prayer. so the needy can also fulfill his/her needs on Eid day. Zakat al-Fitr .(The minimum amount due is the equivalent to amount of about 2 kg of wheat flour, rice or other staple foodstuff, per member of the household). obligatory upon every member of your household, including children and the elderly. and cannot be made up if neglected.';
Speech.speak(thingtosay,{pitch:1,rate:1});
setstatebtn("g")
}
const speak7 =() =>{
const thingtosay='Here are a couple of things to note about Eid al-Adha Salah:It is Sunnah to eat something after the prayer. If possible, this should be the meal with your Qurbani meat.The Prophet (peace be upon him) said, ’Whoever slaughtered the sacrifice before offering the Eid prayer, should slaughter another sacrifice in its place; and whoever has not slaughtered their sacrifice yet, should slaughter now′ reference from [Bukhari].';
Speech.speak(thingtosay,{pitch:1,rate:1});
setstatebtn("h")
}
const speak8 =() =>{
const thingtosay='As soon as we have sacrificed the animals,you can do three parts of meat one for yourself one is for your relatives and rest is for needy people!(This is not compulsory you can give whole meat to needy person too)!However, if you forget to order your Qurbani before the Eid prayer, don’t worry! You can make a Qurbani order right up until Maghrib time on the third day of Eid (12th Dhul Hijjah)!.We hope that you found this short guide on the Eid prayer helpful.';
Speech.speak(thingtosay,{pitch:1,rate:1});
setstatebtn("i")
}
const stop = () =>{
Speech.stop();
setstatebtn("")
}
  return ( 
    <ScrollView  showsHorizontalScrollIndicator={true}
    automaticallyAdjustContentInsets={true}  
   
   //pagingEnabled={true}
   keyboardShouldPersistTaps='always'
   style={{
     alignContent:"center",flex:1,
     //borderRadius: 100,
     backgroundColor:'white'
   }} >
   <SafeAreaView style={{top:0,backgroundColor:'white',flex:1,padding:0}}>
   <View style={{flex:1,top:0}}>
      <ImageBackground resizeMethod='resize'
        style={{ flex: 1,  width:width, 
        height:height,
            //height: 880,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/eidsalah3d.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>Eid Pray:{'\n'}The Eid prayer can be slightly confusing, since we only do it twice a year and it’s necessary to refresh our memory! So we’ve prepared an easy guide to help you pray the Eid prayer. Follow the below steps on both Eid al-Fitr and Eid al-Adha. (They are based on the Hanafi school of thought).
  </Text>
  {statebtn === "a" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak} />}
  
  </View>
       </ImageBackground>
</View>
<View style={{flex:1,top:0}}>
<ImageBackground
        style={{ flex: 1,  width:width, 
        height:height,
            //height: 880,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/eidsalah3d.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>Before start Pray:{'\n'}Before going to the Eid prayer, it is Sunnah to make ghusl and put on your best clothes. Eid is a celebration, after all! 
It is also Sunnah to recite takbeer after leaving your house as you travel to the Eid prayer. This is: 'Allahu Akbar, Allahu Akbar. La ilaaha illa-llaah, wa-llaahu Akbar, Allahu Akbar, wa li-llaahil hamd'. 
Ibn Abbas (ra) said, ‘The Prophet (PBUH) went out to the place of prayer on the Day of Fitr and prayed two raka’ah of Eid prayer, not praying before or after them’. [Bukhari]
Just like with other prayers, remember to make your niyyah (intention) before you start.{'\n'}‘I intend to pray two raka’ah of the Eid al-Fitr/Eid al-Adha prayer for Allah facing the Ka’bah’. 
  </Text>
  {statebtn === "b" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak1} />}
  
  </View>
       </ImageBackground>
</View>
<View style={{flex:1,top:0}}>
<ImageBackground
        style={{ flex: 1,  width:width, 
            //height: 880,
            height:height,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/eidsalah3d.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>First Rakah:{'\n'}Start your prayer by raising your hands up to your earlobes for men, and shoulders for women, while saying the takbeer: Allahu Akbar. Then, place your right hand over your left, just below the naval. Women should place their hands below their chest.
Recite your opening supplication: SubhanaK-Allahumma wa bihamdiKa, wa tabaarak-asmuKa, wa ta-’aala jadduKa, wa la ilaaha ghayruK. This means: O Allah, glory and praise are for You, and blessed is Your Name, and exalted is Your Majesty and there is no god but You.
  </Text>
  {statebtn === "c" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak2} />}
  </View>
       </ImageBackground>
</View>
  <View style={{flex:1,top:0}}>
<ImageBackground
        style={{ flex: 1,  width:width, 
            //height: 880,
            height:height,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/eidsalah3d.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>Now comes the main thing that differentiates the Eid prayer from other prayers! The Imam will now recite multiple takbeers to start the prayer. For each takbeer, raise your hands up to your ears/shoulders and then let them fall to your sides.
The number of takbeers will vary depending on the Imam. A Hanafi Imam will say takbeer three times. But typically, your Imam will run through the amount of takbeers prior to the start of the prayer, so pay attention!
Now that the takbeers are over, place your right hand over your left below your chest/below your navel, as you would normally do while praying. Now the Imam will recite Surah al-Fatihah followed by another surah.
The rest of the rak’ah will be prayed the same as your normal compulsory prayers. If you’re a beginner, please see our blog about how to perform Salah. If not, continue reading!
  </Text>
  {statebtn === "d" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak3} />}
 
  </View>
       </ImageBackground>
</View>
 <View style={{flex:1,top:0}}>
<ImageBackground
        style={{ flex: 1,  width:width, 
            //height: 880,
            height:height,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/eidsalah3d.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>Second Rakah:{'\n'}In the second rak’ah, the Imam will recite Surah al-Fatihah followed by another surah.
After this Qur’an recitation, the Imam will recite multiple takbeers again! Remember, for each takbeer, raise your hands to your ears/shoulders and let them fall to your side. A Hanafi Imam will recite three takbeers, but other Imams will be different, so pay attention.
When the takbeers are over, go down into a bowing position (ruku). 
The rest of the rak’ah will be the same as your normal compulsory prayers. 
After the prayer, the Imam will address the people in a khutbah (sermon). This can last anywhere from around 10-30 minutes, during which the Imam will address important Islamic issues. It is essential that you listen to the sermon.
  </Text>
  {statebtn === "e" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak4} />}
 
  </View>
       </ImageBackground>
</View>
<View style={{flex:1,top:0}}>
<ImageBackground
        style={{ flex: 1,  width:width, 
            //height: 880,
            height:height,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/eidsalah3d.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>After Pray:{'\n'}One more thing - take a different route home after praying. Both the routes you take will testify that you attended this prayer on the Day of Judgement. Abu Huraira narrates that when the Messenger (saw) would go for Eid (prayer), he would return taking a different path from the one he had used to come. [Ibn Majah]​.
  </Text>
  {statebtn === "f" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak5} />}
 
  </View>
       </ImageBackground>
</View>
    <View style={{flex:1,top:0}}>
<ImageBackground
        style={{ flex: 1,  width:width, 
            //height: 880,
            height:height,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/eidsalah3d.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>Things to know about Eid-ul-fitar-salah:{'\n'}There are just a few more things you need to know for each Eid prayer.
It is Sunnah to eat something before the prayer, usually something sweet like dates.You must pay your Zakat al-Fitr (Fitrana) before the prayer, so the poor can be fed on Eid day. Zakat al-Fitr (The minimum amount due is the equivalent of about 2 kg of wheat flour, rice or other staple foodstuff, per member of the household) obligatory upon every member of your household, including children and the elderly, and cannot be made up if neglected.
  </Text>
  {statebtn === "g" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak6} />}
 
  </View>
       </ImageBackground>
</View>

<View style={{flex:1,top:0}}>
<ImageBackground
        style={{ flex: 1,  width:width, 
            //height: 880,
           height:height,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/eidsalah3d.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>Things to know about Eid-ul-Adah-salah:{'\n'}Here are a couple of things to note about Eid al-Adha Salah:

It is Sunnah to eat something after the prayer. If possible, this should be the meal with your Qurbani meat.The Prophet (saw) said, ’Whoever slaughtered the sacrifice before offering the Eid prayer, should slaughter another sacrifice in its place; and whoever has not slaughtered their sacrifice yet, should slaughter now′ [Bukhari].
  </Text>
  {statebtn === "h" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak7} />}
  
  </View>
       </ImageBackground>
</View>

<View style={{flex:1,top:0}}>
<ImageBackground
        style={{ flex: 1,  width:width, 
           // height: 880,
           height:height,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/eidsalah3d.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
       <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>As soon as we have sacrificed the animals,you can do three parts of meat one for yourself one is for your relatives and rest is for needy people.(This is not compulsory you can give whole meat to needy person too).
However, if you forget to order your Qurbani before the Eid prayer, don’t worry! You can make a Qurbani order right up until Maghrib time on the third day of Eid (12th Dhul Hijjah).
{'\n'}
We hope that you found this short guide on the Eid prayer helpful.
  </Text>
  {statebtn === "i" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak8} />}
  
  </View>
       </ImageBackground>
</View>
   </SafeAreaView>
    </ScrollView>
  )
}



















