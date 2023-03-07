import * as React from 'react';
import { Audio } from 'expo-av';
import {
    View,
    Text,LayoutAnimation, Platform, UIManager,
    ImageBackground,Alert,SafeAreaView,
    TouchableOpacity,TouchableWithoutFeedback,
    Image,
    ScrollView,
    Animated,StyleSheet,Dimensions, ActivityIndicator
} from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";
//import ImageZoom from 'react-native-image-pan-zoom';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width,height } = Dimensions.get('window');

 
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

let timeout = null;
let message = 'Loading ....';
export default function Azan({route,navigation}) {
    const [sound, setSound] = React.useState();
    const [btncolor, setbtncolor] = React.useState("");
    const [msg, setmsg] = React.useState("");
    const [loading, setLoading] = React.useState(false);
     const [msg1, setMsg] = React.useState('')
    const [alertVisible, setAlertVisible] = React.useState(false)
    const ShowAlert = () => {
        message = msg;
        LayoutAnimation.easeInEaseOut()
        setAlertVisible(true)
        setMsg('')
        // if (timeout) { clearTimeout(timeout) }
        // timeout = setTimeout(() => {
        //     LayoutAnimation.easeInEaseOut()
        //     setAlertVisible(false)
        // }, 3500);
    
    return (
        <View style={styles.container}>
            {/* <TextInput style={styles.input} numberOfLines={3} multiline value={msg} onChangeText={setMsg} /> */}
            {/* <Button title='show alert' onPress={showAlert} /> */}
            <View style={[styles.alert, !alertVisible && { height: 1, marginTop: -1 }]}>
                <Text style={styles.msg} numberOfLines={5}>{message || 'Loading...'}</Text>
            </View>
        </View>
    )
}

   async function playSound() {
   try {
    setLoading(true);
    const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/azan4.mp3?alt=media&token=b3071480-3f8f-4df8-9038-e711170500e1' },
  )
   setSound(sound);
  setbtncolor("a")
    console.log('Playing Sound');
    await sound.playAsync();
    setLoading(false)
   } catch (error) {
    setLoading(false)
    alert("You are offline please connect to the internet");
   }
   
   
      
      
    }
    React.useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
              //sound.getStatusAsync();
              
            }
          : undefined;
      }, [sound]);
    
      const PauseAudio = async () =>{
        //await sound.getStatusAsync();
         await sound.pauseAsync();
      }
    
      const StopAudio0 = async () =>{
        sound.stopAsync(playSound);
        setbtncolor("")
      }

    const LineDivider = () => {
        return (
            <View style={{ width: 1, paddingVertical: 5 }}>
                <View style={{ flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1 }}></View>
            </View>
        )
    }
    
    const styles = StyleSheet.create({
        container: {
        //   marginTop: 50,
          //flex:1,
          //flexDirection: 'row-reverse'
          //direction:'ltr'
          backgroundColor:"white",
          
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
            top:0,
            backgroundColor: 'green',
            width: '100%',
            overflow: 'hidden'
        },
        msg: {
            margin: 10,
            marginHorizontal: 20,
            color: '#fff'
        }, MainContainer: {
 
            flex: 1,height:height,width:width,
            justifyContent: "center",
            alignItems: "center",top:0,left:0
         
          }, TextComponentStyle: {
  
       lineHeight: 22,width:width,height:height-540,
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
  return ( 
    <SafeAreaView style={{top:0,backgroundColor:'white',flex:1,padding:0}}>
      <ImageBackground resizeMethod='resize'
        style={{ flex: 1,  width:width, 
            height:height,
            top:40,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/azan3dlogo.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
         {/* {'\n'}Allah u Akbar Allah u Akbar Allah u Akbar Allah u Akbar Ash-hadu alla ilaha illallah Ash-hadu alla ilaha illallah Ash-hadu anna Muhammadan rasulullah Ash-hadu anna Muhammadan rasulullah Hayya ‘alas-salat Hayya ‘alas-salat Hayya ‘alal-falah Hayya ‘alal-falah Allah u Akbar Allah u Akbar La ilaha illallah La ilaha illallah.            */}
    
                   <View style={styles.MainContainer}>
    
                    {loading ? <ShowAlert/> : ""} 
    <TouchableWithoutFeedback  style={{  }} onPress={ btncolor ==='' ? playSound : StopAudio0 }>
                      
                       
                    {btncolor==='' ? <Image source={icons.speakers} style={{width: 30,left:0,top:0, height: 30 }} />
                    :<Ionicons style={{left:0,top:0 }}  name={'stop-outline'} size={38} color={'#CDDC39'} />}
                           
                      
                   </TouchableWithoutFeedback>
    <Text style={styles.TextComponentStyle}>Azaan:{'\n'} <Text style={{ lineHeight: 30, borderRadius: 0,
  borderWidth: 2,borderColor: '#0000CD',color: '#0000CD', backgroundColor : '#CDD',padding : 2,
fontSize:18,textAlign: 'center', margin: 2,}}>الله اكبرالله اكبر الله اكبرالله اكبر اشهد ان لا اله الا الله اشهد ان لا اله الا الله  اشهد ان محمدا رسول الله اشهد ان محمدا رسول الله حي على الصلاةحي على الصلاة  حي على الفلاح حي على الفلاح الله اكبرالله اكبر لا اله الا الله</Text>

         
         {'\n'}Translation:{'\n'}ALLAH is The Greatest I bear witness that there is no gods except one God I bear witness that Muhammad is the Messenger of God Make haste towards welfare [success] God is The Greatest There is no gods except one God.</Text>
   
     <TouchableOpacity
                        style={{ marginLeft: SIZES.base,flexDirection: 'row',paddingHorizontal: SIZES.radius,height:40,alignItems: 'flex-end',top:0,left:0 }}
                        onPress={() => navigation.navigate('azanfajar')}
                    >
                        <Image
                            source={icons.back_arrow_icon}
                            resizeMode="contain"
                            style={{
                                width: 21,top:0,
                                height: 20,transform: [{ rotateY: '180deg'}],
                               left:210,
                            backgroundColor:'#CDDC39',
                                color:'#00ff00'
                                
                                
                            }}
                        /> 
                        <Text style={{ ...FONTS.h2, color:'skyblue',top:0,right:-50 }}>Azaan Fajar</Text>
                    </TouchableOpacity>
    </View>
    
                   
    {/* <Text style={{top:110,fontSize:20,left:10,color:'#00bff0',fontStyle:'italic'}}>Sehri Dua:</Text> */}
    
                       {/* <Image style={{top:115,
            width: 415, 
            height: 800,
            left:-2,
            resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/fast/sehri.png')} /> */}

   
{/* 
                    <TouchableOpacity
                        style={{ marginLeft: SIZES.base,flexDirection: 'row',paddingHorizontal: SIZES.radius,height: 80,alignItems: 'flex-end',top:525,left:200 }}
                        onPress={() => navigation.navigate('kalmatwo')}
                    >
                    <Text style={{ ...FONTS.h2, color:'#00bff0',top:20,right:-28 }}>2nd kalma</Text>
                        <Image
                            source={icons.back_arrow_icon}
                            re
                            
                            sizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                left:40,
                                transform: [{rotateY: '180deg'}],
                                top:22
                                
                            }}
                        /> 
                        
                    </TouchableOpacity> */}
    
    {/* </ImageBackground> */}
    </ImageBackground>
   </SafeAreaView>
  )
}

























