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
export default function Fastingdua({route,navigation}) {
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
         if (timeout) { clearTimeout(timeout) }
         timeout = setTimeout(() => {
             LayoutAnimation.easeInEaseOut()
             setAlertVisible(false)
         }, 3500);
    
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
    const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/iftari.mp3?alt=media&token=b5afb274-b668-4f4d-a560-3d77895c060f' },
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
          backgroundColor:'black',
          flex: 1,top:0,
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
        }
      });
//    const load = "Loading..";
  return ( 
    <SafeAreaView style={{top:0,backgroundColor:'white',flex:1,padding:10}}>
      <ImageBackground resizeMethod='resize'
        style={{ flex: 1,  width:width, 
            height:height-50,
            top:0,
            resizeMode: 'contain',
            alignSelf:'center'
            }}
        source={require('../assets/fast/iftari.png')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
    
    <TouchableWithoutFeedback

                       style={{  }}
                       onPress={ btncolor ==='' ? playSound : StopAudio0 }
                   >
                       <View style={{}}>
                       
                     {/* <View style={{ marginLeft: SIZES.base, ...FONTS.body3, color:'white',left:30,top:0}}>{loading ? <ActivityIndicator size="large" color="#00bff0" /> : ""}</View> */}
                    {loading ? <ShowAlert/> : ""} 
                    {btncolor==='' ?<Image source={icons.speakers} style={{width: 30,left:185,top:30, height: 30 }} />:<Ionicons style={{
                                  left:185,top:30,
                                  
                               }} name={'stop-outline'} size={35} color={'#00bff0'} />}
                            
                       </View>
                   </TouchableWithoutFeedback>
                   
   

    {/* <TouchableOpacity
                        style={{ marginLeft: SIZES.base,flexDirection: 'row',paddingHorizontal: SIZES.radius,height:30,alignItems: 'flex-end',top:680,left:-40 }}
                        onPress={() => navigation.navigate('fasting')}
                    >
                        <Image
                            source={icons.back_arrow_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 37,
                                left:40,
                            //backgroundColor:'white',
                                color:'#00ff00'
                                
                                
                            }}
                        /> 
                        <Text style={{ ...FONTS.h2, color:'#00bff0',top:-4,right:-50 }}></Text>
                    </TouchableOpacity> */}
{/* 
                    <TouchableOpacity
                        style={{ marginLeft: SIZES.base,flexDirection: 'row',paddingHorizontal: SIZES.radius,height: 80,alignItems: 'flex-end',top:525,left:200 }}
                        onPress={() => navigation.navigate('Iftari')}
                    >
                    <Text style={{ ...FONTS.h2, color:'#00bff0',top:20,right:-28 }}>Iftar dua</Text>
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
    
    </ImageBackground>
   </SafeAreaView>
  )
}
