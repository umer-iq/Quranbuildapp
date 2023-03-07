import { View, Text } from 'react-native'
import React from 'react'

export default function audio2() {
  return (
    <View>
      <Text>audio2</Text>
    </View>
  )
}


// import * as React from 'react';
// import { Audio } from 'expo-av';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { COLORS, FONTS, SIZES, icons, images } from '../constants';
// import { color } from 'react-native-elements/dist/helpers';
// import { View, Text, ImageBackground,TouchableOpacity,TouchableWithoutFeedback,Image,
//   ScrollView,FlatList,LayoutAnimation, Platform, UIManager,
//   Alert,SafeAreaView,Animated,Dimensions, ActivityIndicator,StyleSheet
// } from 'react-native';


// if (Platform.OS === 'android') {
//   if (UIManager.setLayoutAnimationEnabledExperimental) {
//       UIManager.setLayoutAnimationEnabledExperimental(true);
//   }
// }

// let timeout = null;
// let message = 'Loading ....';



// export default function AuDio({navigation}) {
//    const [sound, setSound] = React.useState();
//   const [btncolor, setbtncolor] = React.useState("");
//   const [Loaded, SetLoaded] = React.useState(false);
//   const [Loading, SetLoading] = React.useState(false);
//   const [soundStatus, setSoundStatus] = React.useState({
//     status: null,
//     isPlaying: false,
//     icon: 'play'
//   });
//   const [alertVisible, setAlertVisible] = React.useState(false)
//     const [msg, setMsg] = React.useState("");
//     const ShowAlert = () => {
//         message = msg;
//         LayoutAnimation.easeInEaseOut()
//         setAlertVisible(true)
//         setMsg('')
//         if (timeout) { clearTimeout(timeout) }
//         timeout = setTimeout(() => {
//             LayoutAnimation.easeInEaseOut()
//             setAlertVisible(false)
//         }, 4000);
    
//     return (
//         <View style={styles.container}>
//             {/* <TextInput style={styles.input} numberOfLines={3} multiline value={msg} onChangeText={setMsg} /> */}
//             {/* <Button title='show alert' onPress={showAlert} /> */}
//             <View style={[styles.alert, !alertVisible && { height: 1, marginTop: -1 }]}>
//                 <Text  style={styles.msg} >{message || 'Loading...'}</Text>
//             </View>
//         </View>
//     )
// }
  
//  async function playSound() {

//     try {
//       SetLoading(true)
//     console.log('Loading Sound');
//    const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/qurancentral.com-112.mp3?alt=media&token=0658afb4-8fb2-4a6d-b337-882e6c7d011b' },
//     )
//    setSound(sound);
//    setbtncolor("a")
//     console.log('Playing Sound');
//       const result = await sound.getStatusAsync();
//       SetLoading(false)
//       if (result.isLoaded) {
//         if (result.isPlaying === false) {
//           sound.playAsync();
          
//         }
//       }
//     } catch (error) {
//       SetLoading(false)
      
//       alert("You are offline please connect to the internet for audio");
//     }
    
//   }


//   async function playSound1() {
//     try {
//       SetLoading(true)
//     console.log('Loading Sound');
//    const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/qurancentral.com-109.mp3?alt=media&token=59e3e8a9-dbc9-432f-9cf9-a417e45be9a8' },
//     )
//    setSound(sound);
//    setbtncolor("b")
//     console.log('Playing Sound');
//       const result = await sound.getStatusAsync();
//       if (result.isLoaded) {
//         if (result.isPlaying === false) {
//           sound.playAsync();
//           SetLoading(false)
          
//         }
//       }
//     } catch (error) {
//       SetLoading(false)
      
//       alert("You are offline please connect to the internet for audio");
//     }
   
//   }

//   async function playSound2() {
    
//     try {
//       SetLoading(true)
//     console.log('Loading Sound');
//    const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/AL-FAJR.mp3?alt=media&token=30471bd6-33c1-45a7-93fa-0be89f06c4db' },
//     )
//    setSound(sound);
//    setbtncolor("c")
//     console.log('Playing Sound');
//       const result = await sound.getStatusAsync();
//       SetLoading(false)
//       if (result.isLoaded) {
//         if (result.isPlaying === false) {
//           sound.playAsync();
          
//         }
//       }
//     } catch (error) {
//       SetLoading(false)
      
//       alert("You are offline please connect to the internet for audio");
//     }
    
//   }

//   async function playSound3() {
//     try {
//       SetLoading(true)
//     console.log('Loading Sound');
//    const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/qurancentral.com-113.mp3?alt=media&token=a5138127-0997-4cbf-8a78-969d1626745b' },
//     )
//    setSound(sound);
//    setbtncolor("d")
//     console.log('Playing Sound');
//       const result = await sound.getStatusAsync();
//       SetLoading(false)
//       if (result.isLoaded) {
//         if (result.isPlaying === false) {
//           sound.playAsync();
          
//         }
//       }
//     } catch (error) {
//       SetLoading(false)
      
//       alert("You are offline please connect to the internet for audio");
//     }
    
//   }
//   async function playSound4() {
//     try {
//       SetLoading(true)
//     console.log('Loading Sound');
//    const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/qurancentral.com-114.mp3?alt=media&token=85dba987-fb44-4b63-bcdc-c11eb811d297' },
//     )
//    setSound(sound);
//    setbtncolor("e")
//     console.log('Playing Sound');
//       const result = await sound.getStatusAsync();
//       SetLoading(false)
//       if (result.isLoaded) {
//         if (result.isPlaying === false) {
//           sound.playAsync();
          
//         }
//       }
//     } catch (error) {
//       SetLoading(false)
      
//       alert("You are offline please connect to the internet for audio");
//     }
    
//   }
//   async function playSound5() {
//     try {
//       SetLoading(true)
//     console.log('Loading Sound');
//    const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/AL-ASR.mp3?alt=media&token=b603a6b4-1b65-4d92-902f-a73e2f093c43' },
//     )
//    setSound(sound);
//    setbtncolor("f")
//     console.log('Playing Sound');
//       const result = await sound.getStatusAsync();
//       SetLoading(false)
//       if (result.isLoaded) {
//         if (result.isPlaying === false) {
//           sound.playAsync();
          
//         }
//       }
//     } catch (error) {
//       SetLoading(false)
      
//       alert("You are offline please connect to the internet for audio");
//     }
    
//   }
//   async function playSound6() {
//     try {
//       SetLoading(true)
//     console.log('Loading Sound');
//    const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/AL-LAIL.mp3?alt=media&token=352c50e9-f978-4a49-a4a4-effec1357491' },
//     )
//    setSound(sound);
//    setbtncolor("g")
//     console.log('Playing Sound');
//       const result = await sound.getStatusAsync();
//       SetLoading(false)
//       if (result.isLoaded) {
//         if (result.isPlaying === false) {
//           sound.playAsync();
          
//         }
//       }
//     } catch (error) {
//       SetLoading(false)
      
//       alert("You are offline please connect to the internet for audio");
//     }
    
//   }
//   async function playSound7() {
//     try {
//       SetLoading(true)
//     console.log('Loading Sound');
//    const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/AL-FIL.mp3?alt=media&token=c0ff010c-d65c-4c82-a750-ec355556777d' },
//     )
//    setSound(sound);
//    setbtncolor("h")
//     console.log('Playing Sound');
//       const result = await sound.getStatusAsync();
//       SetLoading(false)
//       if (result.isLoaded) {
//         if (result.isPlaying === false) {
//           sound.playAsync();
          
//         }
//       }
//     } catch (error) {
//       SetLoading(false)
      
//       alert("You are offline please connect to the internet for audio");
//     }
    
//   }
//   async function playSound8() {
//     try {
//       SetLoading(true)
//     console.log('Loading Sound');
//    const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/Surah%20Yusuf%20Ayah%2077-98.mp3?alt=media&token=e79cf988-69f7-46a3-aa1b-d90e23c19934' },
//     )
//    setSound(sound);
//    setbtncolor("i")
//     console.log('Playing Sound');
//       const result = await sound.getStatusAsync();
//       SetLoading(false)
//       if (result.isLoaded) {
//         if (result.isPlaying === false) {
//           sound.playAsync();
          
//         }
//       }
//     } catch (error) {
//       SetLoading(false)
      
//       alert("You are offline please connect to the internet for audio");
//     }
    
//   }
//   React.useEffect(() => {
//     return sound
//       ? () => {
//           console.log('Unloading Sound');
//           sound.unloadAsync();
//           //sound.getStatusAsync();
          
//         }
//       : undefined;
//   }, [sound]);

//   const PauseAudio = async () => {
//     try {
//       const result = await sound.getStatusAsync();
//       if (result.isLoaded) {
//         if (result.isPlaying === true) {
//           sound.pauseAsync();
//           //setbtncolor('')
//         }
//       }
//     } catch (error) {
//       console.log('pause not working')
//     }
//   };

//   // const PauseAudio = async () =>{
//   //   //await sound.getStatusAsync();
//   //    sound.pauseAsync();
//   // }

//   const StopAudio0 = async () =>{
//     sound.stopAsync(playSound);
//     setbtncolor("")
//   }
//   const StopAudio1 = async () =>{
//     sound.stopAsync(playSound1);
//     setbtncolor("")
//   }
//   const StopAudio2 = async () =>{
//     sound.stopAsync(playSound2);
//     setbtncolor("")
//   }
//   const StopAudio3 = async () =>{
//     sound.stopAsync(playSound3);
//     setbtncolor("")
//   }
//   const StopAudio4 = async () =>{
//     sound.stopAsync(playSound4);
//     setbtncolor("")
//   }
//   const StopAudio5 = async () =>{
//     sound.stopAsync(playSound5);
//     setbtncolor("")
//   }
//   const StopAudio6 = async () =>{
//     sound.stopAsync(playSound6);
//     setbtncolor("")
//   }
//   const StopAudio7 = async () =>{
//     sound.stopAsync(playSound7);
//     setbtncolor("")
//   }
//   const StopAudio8 = async () =>{
//     sound.stopAsync(playSound8);
//     setbtncolor("")
//   }
//   const LineDivider = () => {
//     return (
//       <View style={{flexDirection: 'row', alignItems: 'center' }}>
//   <View style={{flex: 1, height: 1, backgroundColor: 'white',top:-180}} />
  
// </View>
       
//     )
// }
 
//   return (
                  
    
// <SafeAreaView style={{top:0,backgroundColor:'white',flex:1,padding:10}}>

//                             <ImageBackground style={{top:20,
//             width: 410,flex:1, 
//             height: 840,
//             left:-2,
            
//             alignSelf:'center'}} source={require('../assets/kaba1.jpg')} />

//                     {/* <TouchableOpacity
//                         style={{ marginLeft: SIZES.base,flexDirection: 'row',paddingHorizontal: SIZES.radius,height: 80,alignItems: 'flex-end',top:-419,left:-180 }}
//                         onPress={() => navigation.navigate('Home')}
//                     >
                    
//                         <Image
//                             source={icons.back_arrow_icon}
//                             resizeMode="contain"
//                             style={{
//                                 width: 25,
//                                 height: 25,
//                                 left:30,
//                                 backgroundColor:'#00bff0',
                                
//                             }}
//                         /> 
//                         <Text style={{ ...FONTS.h3, color: "#00bff0",top:0,right:-35,fontSize:20 }}>Home</Text>
//                     </TouchableOpacity> */}

                  

//     {Loading ? <ShowAlert/> : ""} 
//     <View style={styles.MainContainer}>
//     <TouchableWithoutFeedback  style={styles.icon}
//      onPress={ btncolor ==='' ? playSound2 : StopAudio2 }>  
//       {btncolor ==='c'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
//       : <Ionicons name={'play-outline'} size={38} color={'#CDDC39'} />} 
//     </TouchableWithoutFeedback>
 
//  {btncolor ==='c' ? <Text style={styles.TextComponentStyle}>Surah Al Fajr:</Text>:<Text style={{  borderRadius: 5,
//   borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al Fajr:</Text>}
//   </View>
//   <View style={styles.MainContainer}>
//     <TouchableWithoutFeedback  style={styles.icon}
//      onPress={ btncolor ==='' ? playSound5 : StopAudio5 }>  
//       {btncolor ==='f'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
//       : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
//     </TouchableWithoutFeedback>
 
//  {btncolor ==='f' ? <Text style={styles.TextComponentStyle}>Surah Al Asr:</Text>:<Text style={{  borderRadius: 5,
//   borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al Asr:</Text>}
//   </View>
//   <View style={styles.MainContainer}>
//     <TouchableWithoutFeedback  style={styles.icon}
//      onPress={ btncolor ==='' ? playSound6 : StopAudio6 }>  
//       {btncolor ==='g'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
//       : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
//     </TouchableWithoutFeedback>
 
//  {btncolor ==='g' ? <Text style={styles.TextComponentStyle}>Surah Al lail:</Text>:<Text style={{  borderRadius: 5,
//   borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al lail:</Text>}
//   </View>
    
//     <View style={styles.MainContainer}>
//     <TouchableWithoutFeedback  style={styles.icon}
//      onPress={ btncolor ==='' ? playSound : StopAudio0 }>  
//       {btncolor ==='a'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
//       : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
//     </TouchableWithoutFeedback>
 
//  {btncolor ==='a' ? <Text style={styles.TextComponentStyle}>Surah Al Ikhlas:</Text>:<Text style={{  borderRadius: 5,
//   borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al Ikhlas:</Text>}
//   </View>
//   <View style={styles.MainContainer}>
//     <TouchableWithoutFeedback  style={styles.icon}
//      onPress={ btncolor ==='' ? playSound3 : StopAudio3 }>  
//       {btncolor ==='d'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
//       : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
//     </TouchableWithoutFeedback>
 
//  {btncolor ==='d' ? <Text style={styles.TextComponentStyle}>Surah Al Falaq:</Text>:<Text style={{  borderRadius: 5,
//   borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al Falaq:</Text>}
//   </View>
//   <View style={styles.MainContainer}>
//     <TouchableWithoutFeedback  style={styles.icon}
//      onPress={ btncolor ==='' ? playSound4 : StopAudio4 }>  
//       {btncolor ==='e'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
//       : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
//     </TouchableWithoutFeedback>
 
//  {btncolor ==='e' ? <Text style={styles.TextComponentStyle}>Surah An Naas:</Text>:<Text style={{  borderRadius: 5,
//   borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah An Naas:</Text>}
//   </View>
   

//   <View style={styles.MainContainer}>
//     <TouchableWithoutFeedback  style={styles.icon}
//      onPress={ btncolor ==='' ? playSound1 : StopAudio1 }>  
//       {btncolor ==='b'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
//       : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
//     </TouchableWithoutFeedback>
 
//  {btncolor ==='b' ? <Text style={styles.TextComponentStyle}>Surah Al-Kafiroon:</Text>:<Text style={{  borderRadius: 5,
//   borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al-Kafiroon:</Text>}
//   </View>

  
    
 
    
 
//   <View style={styles.MainContainer}>
//     <TouchableWithoutFeedback  style={styles.icon}
//      onPress={ btncolor ==='' ? playSound7 : StopAudio7 }>  
//       {btncolor ==='h'? <Ionicons name={'stop-outline'} size={38} color={'#0000CD'} />
//       : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
//     </TouchableWithoutFeedback>
 
//  {btncolor ==='h' ? <Text style={styles.TextComponentStyle}>Surah Al fil:</Text>:<Text style={{  borderRadius: 5,
//   borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al fil:</Text>}
//   </View>
    
//       <TouchableOpacity
//       style={{ height: 80,alignItems: 'flex-end',top:40,left:80 }}
//       onPress={() => navigation.navigate('Home')}
//       >
//       <Text style={{ ...FONTS.h3, color: "#9ACD32",top:-20,right:120,fontSize:20 }}>Home</Text>
//       <Image
//       source={icons.back_arrow_icon}
//       resizeMode="contain"
//       style={{
//       width: 25,
//       height: 25,
//       right:80,backgroundColor:"#9ACD32",
//       transform: [{rotateY: '180deg'}],
//       top:-45,

//       }}
//       /> 
                        
//                     </TouchableOpacity>
// </SafeAreaView>
     
 
   
//   );
// }


// const styles = StyleSheet.create({
//     container: {
   
//      alignItems: 'center',
//     justifyContent: 'center',
//      backgroundColor: "transparent",
     
     
     
//     },
//    playBtn: {
//      padding: 0,
//      top:-130,
//      left:-20
//      },
//      pauseBtn: {
//       padding: 0,
//       top:-170,
//       left:40
//       },
//       stopBtn: {
//         padding: 0,
//         top:-210,
//         left:130
//         },
//      text: {
//       padding: 0,
//       color:'white'
//       ,top:-100,
//       left:-120,
//       fontSize:20
      
//       },alert: {
//           position: 'absolute',
//           top:-50,flex:1,
//           backgroundColor: 'green',
//           width: '100%',
//           overflow: 'hidden'
//       },
//       msg: {
//           margin: 10,
//           marginHorizontal: 20,
//           color: '#fff'
//       },
//       MainContainer: {
 
//         flex: 1,
//         justifyContent: "space-evenly",
//         alignItems: "flex-start",top:-10,left:0
     
//       },
     
//       TextComponentStyle: {
     
//         borderRadius: 5,
     
//         // Set border width.
//         borderWidth: 2,
     
//         // Set border Hex Color Code Here.
//         borderColor: '#0000CD',
     
//         // Setting up Text Font Color.
//         color: '#0000CD',
     
//         // Setting Up Background Color of Text component.
//         backgroundColor : '#CDDC39',
        
//         // Adding padding on Text component.
//         padding : 2,
     
//         fontSize: 20,
     
//         textAlign: 'center',
     
//         margin: 10
//       },playcontainer:{
//         borderRadius: 5,
     
//         // Set border width.
//         borderWidth: 2,
     
//         // Set border Hex Color Code Here.
//         borderColor: '#FF5722',
     
//         // Setting up Text Font Color.
//         color: '#fff',
     
//         // Setting Up Background Color of Text component.
//         backgroundColor : '#CDDC39',
        
//         // Adding padding on Text component.
//         padding : 2,
     
        
//         margin: 10

//       },icon:{
//         flex: 1,
//         justifyContent: "space-evenly",
//         alignItems: "flex-start"
//       }
//    });
