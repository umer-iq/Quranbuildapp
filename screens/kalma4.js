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
export default function kalma4({route,navigation}) {
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
    const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/4thkalma.mp3?alt=media&token=8a47c5e2-f93c-4b8d-bd17-e13790cdfcb1' },
  )
   setSound(sound);
  setbtncolor("a")
    console.log('Playing Sound');
    await sound.playAsync();
    setLoading(false)
   } catch (error) {
    setLoading(false)
    Alert.alert("You are offline please connect to the internet for audio","", [ { text: "Ok",style: "ok",
}, ],{ cancelable: true });
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
 
            flex: 1,width:width,height:height,
            justifyContent: "center",
            alignItems: "center",top:0,left:0
         
          }, TextComponentStyle: {
  
       lineHeight: 21,width:width,height:height-570,
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
         
            fontSize: 13,
         
            textAlign: 'center',
         
            margin: 0
          }
      });
//    const load = "Loading..";
  return ( 
    <SafeAreaView style={{top:0,backgroundColor:'white',flex:1,padding:0}}>
      <ImageBackground
        style={{ flex: 1,  width:width, 
            height:height,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/3dlogo.png')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
    
    {/* {'\n'}lā ilāha illā-llāhu waḥdahu lā sharīka lahu lahu l-mulku wa lahu l-ḥamdu yuḥyi wa yumītu wa huwa ḥayyu lā yamūtu abadan abadan dhu l-jalāli wa l-ʾikrām biyadihi-l khayr wa-huwa ʿala-kulli shayʾin qadīr.        
     */}
                   <View style={styles.MainContainer}>
                    {loading ? <ShowAlert/> : ""} 
    <TouchableWithoutFeedback  style={{  }} onPress={ btncolor ==='' ? playSound : StopAudio0 }>
    {btncolor==='' ? <Image source={icons.speakers} style={{width:30,left:0,top:0, height: 30 }} />:
                <Ionicons style={{ left:0,top:0, }} name={'stop-outline'} size={35} color={'#00bff0'} />}
                   </TouchableWithoutFeedback>
                           
                      
                       
                                   
                           
                      
    <Text style={styles.TextComponentStyle}>4th Kalma:{'\n'}<Text style={{ lineHeight: 27, borderRadius: 0,
  borderWidth: 2,borderColor: '#0000CD',color: '#0000CD', backgroundColor : '#CDD',padding : 2,
fontSize: 15,textAlign: 'center', margin: 2,}}>لَآ اِلٰهَ اِلَّا اللهُ وَحْدَهٗ لَا شَرِيْكَ لَهٗ لَهُ الْمُلْكُ وَ لَهُ الْحَمْدُ يُحْىٖ وَ يُمِيْتُ وَ هُوَحَیٌّ لَّا يَمُوْتُ اَبَدًا اَبَدًاؕ ذُو الْجَلَالِ وَالْاِكْرَامِؕبِيَدِهِ الْخَيْرُؕ وَهُوَ عَلٰى كُلِّ شیْ ٍٔ قَدِیْرٌؕ</Text>
    {'\n'}Translation:{'\n'} There is no god except Allah One is He,no partners hath He.His is the Dominion,and His is the Praise.He gives life and causes death,and He is Living, who will not die,never.He of Majesty and Munificence.Within His Hand is (all) good.And He is,upon everything,Able (to exert His Will).</Text>
   
     <TouchableOpacity
                        style={{ marginLeft: SIZES.base,flexDirection: 'row',paddingHorizontal: SIZES.radius,height:0,alignItems: 'flex-end',top:20,left:0 }}
                        onPress={() => navigation.navigate('kalmafive')}
                    >
                        <Image
                            source={icons.back_arrow_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,top:0,
                                height:20,transform: [{ rotateY: '180deg'}],
                               left:200,
                            backgroundColor:'#CDDC39',
                                color:'#00ff00'
                                
                                
                            }}
                        /> 
                        <Text style={{ ...FONTS.h2, color:'white',top:20,right:-50,height:50 }}>5th Kalma</Text>
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

















