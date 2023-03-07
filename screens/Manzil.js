import * as React from 'react';
import { Audio } from 'expo-av';
import { View, Text, ImageBackground ,TouchableOpacity,TouchableWithoutFeedback,Image,
  ScrollView,FlatList,LayoutAnimation, Platform, UIManager,
  Alert,SafeAreaView,Animated,Dimensions, ActivityIndicator,StyleSheet
} from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";

import Ionicons from 'react-native-vector-icons/Ionicons';
const { width,height } = Dimensions.get('window');
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

let timeout = null;
let message = 'Loading ....';
 

export default function Manzil({route,navigation}) {
    const [Loaded, SetLoaded] = React.useState(false);
    const [Loading, SetLoading] = React.useState(false);
    const [btncolor, setbtncolor] = React.useState("");
    const [btncolorstop, setbtncolorstop] = React.useState("");
    //const sound = React.useRef(new Audio.Sound());
    const [alertVisible, setAlertVisible] = React.useState(false)
    const [msg, setMsg] = React.useState("");
    const [sound, setSound] = React.useState();
    const ShowAlert = () => {
        message = msg;
        LayoutAnimation.easeInEaseOut()
        setAlertVisible(true)
        setMsg('')
        if (timeout) { clearTimeout(timeout) }
        timeout = setTimeout(() => {
            LayoutAnimation.easeInEaseOut()
            setAlertVisible(false)
        }, 12000);
    
    return (
        <View style={styles.container}>
            {/* <TextInput style={styles.input} numberOfLines={3} multiline value={msg} onChangeText={setMsg} /> */}
            {/* <Button title='show alert' onPress={showAlert} /> */}
            <View style={[styles.alert, !alertVisible && { height: 1, marginTop: -1 }]}>
                <Text  style={styles.msg} numberOfLines={5}>{message || 'Loading...'}</Text>
            </View>
        </View>
    )
}
  
    // React.useEffect(() => {
    //   LoadAudio();
    //   sound.current.unloadAsync();
    // }, []);
  
    // const PlayAudio = async () => {
    //   try {
    //     const result = await sound.current.getStatusAsync();
    //     if (result.isLoaded) {
    //       if (result.isPlaying === false) {
    //         sound.current.playAsync();
    //         setbtncolor('a')
    //         setbtncolorstop('b')
    //       }
    //     }
    //   } catch (error) {}
    // };
  
    // const PauseAudio = async () => {
    //   try {
    //     const result = await sound.current.getStatusAsync();
    //     if (result.isLoaded) {
    //       if (result.isPlaying === true) {
    //         sound.current.pauseAsync();
    //         setbtncolor('')
    //       }
    //     }
    //   } catch (error) {}
    // };
    // const StopAudio = async () =>{
    //   try {
    //       const result = await sound.current.getStatusAsync();
    //       if (result.isLoaded) {
    //         if (result.isPlaying === true) {
    //           sound.current.stopAsync();
    //           setbtncolor('')
    //           setbtncolorstop('')
    //         }
    //       }
    //     } catch (error) {}
       
    //  }
  
    // const LoadAudio = async () => {
    //   SetLoading(true);
    //   const checkLoading = await sound.current.getStatusAsync();
    //   if (checkLoading.isLoaded === false) {
    //     try {
    //       const result = await sound.current.loadAsync({ uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/manzil-dua-audio.mp3?alt=media&token=8f263198-0325-4acd-8eaf-0fe2c3fd8ab9' }, {}, true);
    //       if (result.isLoaded === false) {
    //         SetLoading(false);
    //         console.log('Error in Loading Audio');
    //       } else {
    //         SetLoading(false);
    //         SetLoaded(true);
    //       }
    //     } catch (error) {
    //       console.log(error);
    //       SetLoading(false);
    //       alert("You are offline please connect to the internet for audio");
    //     }
    //   } else {
    //     SetLoading(false);
    //   }
    // };
    

    // const LineDivider = () => {
    //     return (
    //         <View style={{ width: 1, paddingVertical: 5 }}>
    //             <View style={{ flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1 }}></View>
    //         </View>
    //     )
    // }
    async function playSound() {
      try {
        SetLoading(true);
       const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/manzil-dua-audio.mp3?alt=media&token=8f263198-0325-4acd-8eaf-0fe2c3fd8ab9' },
     )
      setSound(sound);
     
     setbtncolor('a')
       setbtncolorstop('b')
       console.log('Playing Sound');
       await sound.playAsync();
       SetLoading(false);
      } catch (error) {
       SetLoading(false)
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
            await sound.pauseAsync(playSound);
            setbtncolor("")
         }
       
         const StopAudio= async () =>{
           sound.stopAsync(playSound);
           setbtncolor("")
         }
    const styles = StyleSheet.create({
        container: {
         // marginTop: 50,
         backgroundColor:'black',
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center'
          
        },
        pagesize: {
            marginBottom:10,
            width: width,flex:1, 
            height: 830,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center',
            top:-34
        },
        red: {
          color: 'red',
        },alert: {
          position: 'absolute',
          top:-110,
          backgroundColor: 'green',
          width: '100%',
          overflow: 'hidden'
      },
      msg: {
          margin: 10,
          marginHorizontal: 20,
          color: '#fff', transform: [{ rotateY: '180deg'}]
      }
      });
   
  return ( 
    <ScrollView showsHorizontalScrollIndicator={true}   automaticallyAdjustContentInsets={true}
    //pagingEnabled={true}  
    stickyHeaderIndices={[0]} 
   keyboardShouldPersistTaps='always' 
   style={{
   alignContent:"center",flex:1,width:width,height:height,
    
     transform: [{ rotateY: '180deg'}],
   }} >
    <TouchableWithoutFeedback
                       style={{ flex: 1 }}
                       onPress={btncolor==='' ? playSound : StopAudio }
                   >
                       <View style={{ top:80 }}>
                           {/* <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color:'black',transform: [{ rotateY: '180deg'}] }}>Azan Audio</Text> */}
                            {btncolor ==='a'? <Ionicons style={{
                                  left:380,top:20,
                                  
                               }} name={'stop-outline'} size={35} color={'#00bff0'} />: <Image
                               source={icons.speakers}
                               resizeMode="contain"
                               style={{
                                   width: 30,left:380,top:20,
                                   height: 30,transform: [{ rotateY: '180deg'}],
                               }}
                           />}
                           <Ionicons style={{
                                   top:-58,left:60,
                               }} name={'ios-stop-outline'} size={35} color={'transparent'}  />
                                 {Loading ? <ShowAlert/> : ""} 
                       </View>
                   </TouchableWithoutFeedback>
    
                   <SafeAreaView style={{top:0,backgroundColor:'white',flex:1,padding:0}}>
                        <ImageBackground resizeMethod='resize' style={{top:-30,
            width: width,flex:1, 
            height:height,resizeMode:'contain',
            left:0,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center'}} source={require('../assets/manzil/IMG-20220925-WA0010.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{top:30,
            width: width,flex:1, 
            height:height,resizeMode:'contain',
            left:-2,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center'}} source={require('../assets/manzil/IMG-20220925-WA0006.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{top:80,
            width: width,flex:1, 
            height:height,resizeMode:'contain',
            left:-2,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center'}} source={require('../assets/manzil/IMG-20220925-WA0004.jpg')} />

                        <ImageBackground resizeMethod='resize' style={{top:150,
            width: width,flex:1,resizeMode:'contain',
            height:height,
            left:-2,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center'}} source={require('../assets/manzil/IMG-20220925-WA0011.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{top:230,
            width: width,flex:1,resizeMode:'contain', 
            height:height,
            left:-2,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center'}} source={require('../assets/manzil/IMG-20220925-WA0012.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{top:280,
            width: width,flex:1,resizeMode:'contain', 
            height:height,
            left:-2,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center'}} source={require('../assets/manzil/IMG-20220925-WA0009.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{top:330,
            width: width,flex:1,resizeMode:'contain', 
            height:height,
            left:-2,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center'}} source={require('../assets/manzil/IMG-20220925-WA0007.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{top:380,
            width: width,flex:1,resizeMode:'contain', 
            height:height,
            left:0,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center'}} source={require('../assets/manzil/IMG-20220925-WA0008.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{top:430, width: width,flex:1,height:height,resizeMode:'contain',left:0,transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/manzil/IMG-20220925-WA0005.jpg')} />

                        <ImageBackground resizeMethod='resize' style={{top:480,
            width: width,flex:1,resizeMode:'contain', 
            height:height,
            left:0,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center'}} source={require('../assets/manzil/IMG-20220925-WA0003.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{top:530,
            width: width,flex:1,resizeMode:'contain', 
            height:height,
            left:0,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center'}} source={require('../assets/manzil/IMG-20220925-WA0002.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{top:590,
            width: width,flex:1,resizeMode:'contain',
            height:height,
            left:0,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center'}} source={require('../assets/manzil/IMG-20220925-WA0001.jpg')} />

                        <ImageBackground resizeMethod='resize' style={{top:650,
            width: width,flex:1,resizeMode:'contain', 
            height:height,
            left:0,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center'}} source={require('../assets/manzil/IMG-20220925-WA0000.jpg')} />

<ImageBackground resizeMethod='resize' style={{top:710,
            width: width,flex:1, 
            height: height,resizeMode:'contain',
            left:0,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center'}} source={require('../assets/yaseen/white.jpg')} />
                         
               </SafeAreaView>

      </ScrollView>
  )
}