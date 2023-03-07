import * as React from 'react';
import { Audio } from 'expo-av';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, ImageBackground,TouchableOpacity,TouchableWithoutFeedback,Image,
  ScrollView,FlatList,LayoutAnimation, Platform, UIManager,
  Alert,SafeAreaView,Animated,Dimensions, ActivityIndicator,StyleSheet
} from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

let timeout = null;
let message = 'Loading ....';
const { width,height } = Dimensions.get('window');

export default function Bakra({route,navigation}) {
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
    //       const result = await sound.current.loadAsync({ uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/qurancentral.com-002.mp3?alt=media&token=7bac91e1-fd0d-4bbc-baae-2c84d52ba6bf' }, {}, true);
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
       const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-002-muslimcentral.com.mp3?alt=media&token=8c9cc8ed-9178-4f5e-a631-b056cc20e8f9' },
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
            top:25
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
                                   left:375,top:20,
                                   
                                }} name={'stop-outline'} size={35} color={'#00bff0'} />: <Image
                                source={icons.speakers}
                                resizeMode="contain"
                                style={{
                                    width: 30,left:370,top:20,
                                    height: 30,transform: [{ rotateY: '180deg'}],
                                }}
                            />}
                            <Ionicons style={{
                                    top:-58,left:60,
                                }} name={'ios-stop-outline'} size={35} color={'transparent'}  />
                                 {Loading ? <ShowAlert/> : ""} 
                        </View>
                    </TouchableWithoutFeedback>
      
     {/* <View style={{flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 80, alignItems: 'flex-end' }}>
                    <TouchableOpacity
                        style={{ marginLeft: SIZES.base }}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <ImageBackground resizeMethod='resize'
                            source={icons.back_arrow_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                
                            }}
                        />
                    </TouchableOpacity>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: "black" }}>Read</Text>
                    </View>
      </View> */}
      <SafeAreaView style={{top:0,backgroundColor:'white',flex:1,padding:10}}>
<ImageBackground resizeMethod='resize' style={{top:-40, width: width,flex:1,height:height,left:0,resizeMode:'contain',
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0000.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:30, width: width,flex:1,height:height,left:0,resizeMode:'contain',
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0001.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:80, width: width,flex:1,height:height,left:0,resizeMode:'contain',
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0004.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:140, width: width,flex:1,height:height,left:0,resizeMode:'contain',
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0006.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:200, width: width,flex:1,height:height,left:0,resizeMode:'contain',
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0002.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:260, width: width,flex:1,height:height,left:0,resizeMode:'contain',
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0003.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:320, width: width,flex:1,height:height,left:0,resizeMode:'contain',
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0011.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:390, width: width,flex:1,height:height,left:0,resizeMode:'contain',
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0009.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:460, width: width,flex:1,height:height,left:0,resizeMode:'contain',
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0008.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:530, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0012.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:590, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0007.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:650, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0005.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:720, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0013.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:800, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0010.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:870, width: 396,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0014.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:930, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0016.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:990, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0015.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:1050, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0021.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:1110, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0017.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:1180, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0024.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:1230, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0019.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:1290, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0023.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:1340, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0020.jpg')} />
{/* start */}

<ImageBackground resizeMethod='resize' style={{top:1400, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0027.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:1460, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0026.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:1500, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0025.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:1560, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0018.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:1610, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0022.jpg')} />

<ImageBackground resizeMethod='resize' style={{top:1680, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0053.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:1740, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0046.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:1790, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0049.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:1850, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0043.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:1910, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0042.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:1970, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0041.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2040, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0039.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2100, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0034.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2170, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0032.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2230, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0033.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2290, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0037.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2340, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0036.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2390, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0040.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2450, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0035.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2510, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0038.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2570, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0044.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2630, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0031.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2690, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0030.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2750, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0029.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2810, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0028.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2870, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0048.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2930, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0045.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:2990, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0047.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:3050, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0052.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:3090, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0050.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:3150, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0054.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:3210, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0051.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:3270, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0055.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:3330, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0058.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:3390, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0066.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:3450, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0057.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:3510, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0056.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:3570, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0059.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:3630, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0069.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:3690, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0072.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:3750, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0075.jpg')} />
{/* 64*/}
<ImageBackground resizeMethod='resize' style={{top:3810, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0060.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:3870, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0074.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:3930, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0062.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:3990, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0063.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:4050, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0061.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:4110, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0064.jpg')} /> 
<ImageBackground resizeMethod='resize' style={{top:4170, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0065.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:4230, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0067.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:4290, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0073.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:4350, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0068.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:4410, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0076.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:4470, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0078.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:4510, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0071.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:4570, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0070.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:4630, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0077.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:4690, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0082.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:4750, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0080.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:4810, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0079.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:4870, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0083.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:4930, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0081.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:4990, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0084.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:5050, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0085.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:5110, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0086.jpg')} />
{/* 88 */}
<ImageBackground resizeMethod='resize' style={{top:5170, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0087.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:5230, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0089.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:5290, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0088.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:5350, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0098.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:5410, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0090.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:5470, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0092.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:5530, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0091.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:5590, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0093.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:5650, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0101.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:5710, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0097.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:5770, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0102.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:5830, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0099.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:5890, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0103.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:5950, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0100.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:6010, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0095.jpg')} />
 <ImageBackground resizeMethod='resize' style={{top:6070, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0094.jpg')} />
<ImageBackground resizeMethod='resize' style={{top:6130, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/IMG-20221015-WA0096.jpg')} /> 

<ImageBackground resizeMethod='resize' style={{top:6190, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/white.jpg')} /> 
<ImageBackground resizeMethod='resize' style={{top:6250, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/white.jpg')} /> 
    <ImageBackground resizeMethod='resize' style={{top:6310, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/white.jpg')} />    
<ImageBackground resizeMethod='resize' style={{top:6370, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/white.jpg')} />   
<ImageBackground resizeMethod='resize' style={{top:6430, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/white.jpg')} />  
<ImageBackground resizeMethod='resize' style={{top:6490, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/white.jpg')} />  
<ImageBackground resizeMethod='resize' style={{top:6550, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/white.jpg')} />  
<ImageBackground resizeMethod='resize' style={{top:6610, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/white.jpg')} /> 
<ImageBackground resizeMethod='resize' style={{top:6670, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/white.jpg')} />   
{/* <ImageBackground resizeMethod='resize' style={{top:0, width: width,flex:1,height:height,left:0,
transform: [{ rotateY: '180deg'}],alignSelf:'center'}} source={require('../assets/surahbakrah/white.jpg')} />         
                     {/* Start Reading */}
                {/* <TouchableOpacity
                    style={{
                        //marginBottom:30,
                        flex: 1,
                        width:550,
                        height:50,
                        left:150,top:2780,
                        backgroundColor: COLORS.primary,
                        marginHorizontal: SIZES.base,
                        marginVertical: SIZES.base,
                        //borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',top:400,transform: [{ rotateY: '180deg'}]
                    }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={{ ...FONTS.h3, color: COLORS.white,left:60  }}>Back to main</Text>
                </TouchableOpacity> */}
</SafeAreaView>
      </ScrollView>
  )
}