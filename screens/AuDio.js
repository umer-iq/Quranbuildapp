
import * as React from 'react';
import { Audio } from 'expo-av';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { color } from 'react-native-elements/dist/helpers';
import { View, Text, ImageBackground,TouchableOpacity,TouchableWithoutFeedback,Image,
  ScrollView,FlatList,LayoutAnimation, Platform, UIManager,
  Alert,SafeAreaView,Animated,Dimensions, ActivityIndicator,StyleSheet
} from 'react-native';
import mobileAds, { MaxAdContentRating } from 'react-native-google-mobile-ads';

import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

// const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8343081326487707/1100303999';

//const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8343081326487707/1100303999';
const adUnitId =  'ca-app-pub-8343081326487707/1100303999';


mobileAds()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.PG,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: true,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,

    // An array of test device IDs to allow.
    testDeviceIdentifiers: ['EMULATOR'],
  })
  .then(() => {
    // Request config successfully set!
  });

const { width,height } = Dimensions.get('window');
 
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

let timeout = null;
let message = 'Loading ....';



export default function AuDio({navigation}) {
   const [sound, setSound] = React.useState();
  const [btncolor, setbtncolor] = React.useState("");
  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);
  const [soundStatus, setSoundStatus] = React.useState({
    status: null,
    isPlaying: false,
    icon: 'play'
  });
  const [alertVisible, setAlertVisible] = React.useState(false)
    const [msg, setMsg] = React.useState("");
    
  //   const alert = () =>
  // Alert.alert( "Loading Sound...",{ cancelable: true }
  // );
    
    
    
    
    
    
    
    const ShowAlert = () => {
        message = msg;
        LayoutAnimation.easeInEaseOut()
        setAlertVisible(true)
        setMsg('')
        // if (timeout) { clearTimeout(timeout) }
        // timeout = setTimeout(() => {
        //     LayoutAnimation.easeInEaseOut()
        //     setAlertVisible(false)
        // }, 50000);
    
    return (
        <View style={styles.container}>
            {/* <TextInput style={styles.input} numberOfLines={3} multiline value={msg} onChangeText={setMsg} /> */}
            {/* <Button title='show alert' onPress={showAlert} /> */}
            <View style={[styles.alert, !alertVisible && { height: 1, marginTop: -1 }]}>
                {/* <Text  style={styles.msg} >{message || 'Loading...'}</Text> */}
                {/* {alert("Loading Sound ...")} */}
                { Alert.alert( "Loading Sound...", "", [ { text: "Ok",style: "ok",
    }, ],{ cancelable: true }
  )}
            </View>
        </View>
    )
}
  
 async function playSound() {

    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-036-muslimcentral.com.mp3?alt=media&token=6f40308e-da71-4efc-8300-079a1fe61495' },
    )
   setSound(sound);
   setbtncolor("a")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      SetLoading(false)
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
    
  }


  async function playSound1() {
    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/omar-hisham-al-arabi-qurancentral.com-055-ar-rahman-2021-11-10-09-40-46.mp3?alt=media&token=d9ee2445-66b7-4ce9-b9f8-ac0ff4ee7d53' },
    )
   setSound(sound);
   setbtncolor("b")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          SetLoading(false)
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
   
  }

  async function playSound2() {
    
    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/omar-hisham-al-arabi-qurancentral.com-surah-ad-duha--ash-sharh-at-teen-2019-07-08-07-42-10.mp3?alt=media&token=bc14fa5b-3b3b-4490-a67d-97c9c02fd074' },
    )
   setSound(sound);
   setbtncolor("c")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      SetLoading(false)
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
    
  }

  async function playSound3() {
    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-002-muslimcentral.com.mp3?alt=media&token=8c9cc8ed-9178-4f5e-a631-b056cc20e8f9' },
    )
   setSound(sound);
   setbtncolor("d")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      SetLoading(false)
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
    
  }
  async function playSound4() {
    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/manzil-dua-audio.mp3?alt=media&token=8f263198-0325-4acd-8eaf-0fe2c3fd8ab9' },
    )
   setSound(sound);
   setbtncolor("e")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      SetLoading(false)
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
    
  }
  async function playSound5() {
    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/SURAH%20AD-DUHA%2C%20ASH-SHARH%20AT-TEEN.mp3?alt=media&token=65357b34-f3fc-40bb-b5f7-15fb6c55a909' },
    )
   setSound(sound);
   setbtncolor("f")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      SetLoading(false)
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
    
  }
  async function playSound6() {
    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/SURAH%20ALI%20IMRAN%20%E2%80%93%20VERSES%20189-200.mp3?alt=media&token=bc2fa704-5002-46fb-a1db-761647c57cbc' },
    )
   setSound(sound);
   setbtncolor("g")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      SetLoading(false)
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
    
  }
  async function playSound7() {
    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/SURAH%20AN%20%E2%80%93%20NAHL%20AYAHS%2051%20%E2%80%93%2070.mp3?alt=media&token=72cf9bc7-220b-473a-bf52-8ba02418fbf4' },
    )
   setSound(sound);
   setbtncolor("h")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      SetLoading(false)
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
    
  }
  async function playSound8() {
    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/Surah%20Yusuf%20Ayah%2077-98.mp3?alt=media&token=e79cf988-69f7-46a3-aa1b-d90e23c19934' },
    )
   setSound(sound);
   setbtncolor("i")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      SetLoading(false)
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
    
  }

  //new play list
  async function playSound9() {

    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/qurancentral.com-112.mp3?alt=media&token=0658afb4-8fb2-4a6d-b337-882e6c7d011b' },
    )
   setSound(sound);
   setbtncolor("j")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      SetLoading(false)
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
    
  }


  async function playSound10() {
    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/qurancentral.com-109.mp3?alt=media&token=59e3e8a9-dbc9-432f-9cf9-a417e45be9a8' },
    )
   setSound(sound);
   setbtncolor("k")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          SetLoading(false)
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
   
  }

  async function playSound11() {
    
    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/AL-FAJR.mp3?alt=media&token=30471bd6-33c1-45a7-93fa-0be89f06c4db' },
    )
   setSound(sound);
   setbtncolor("l")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      SetLoading(false)
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
    
  }

  async function playSound12() {
    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/qurancentral.com-113.mp3?alt=media&token=a5138127-0997-4cbf-8a78-969d1626745b' },
    )
   setSound(sound);
   setbtncolor("m")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      SetLoading(false)
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
    
  }
  async function playSound13() {
    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/qurancentral.com-114.mp3?alt=media&token=85dba987-fb44-4b63-bcdc-c11eb811d297' },
    )
   setSound(sound);
   setbtncolor("n")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      SetLoading(false)
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
    
  }
  async function playSound14() {
    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/AL-ASR.mp3?alt=media&token=b603a6b4-1b65-4d92-902f-a73e2f093c43' },
    )
   setSound(sound);
   setbtncolor("o")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      SetLoading(false)
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
    
  }
  async function playSound15() {
    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/AL-LAIL.mp3?alt=media&token=352c50e9-f978-4a49-a4a4-effec1357491' },
    )
   setSound(sound);
   setbtncolor("p")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      SetLoading(false)
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
    
  }
  async function playSound16() {
    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/AL-FIL.mp3?alt=media&token=c0ff010c-d65c-4c82-a750-ec355556777d' },
    )
   setSound(sound);
   setbtncolor("q")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      SetLoading(false)
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
    }
    
  }
  async function playSound17() {
    try {
      SetLoading(true)
    console.log('Loading Sound');
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/chat-3faa1.appspot.com/o/Surah%20Yusuf%20Ayah%2077-98.mp3?alt=media&token=e79cf988-69f7-46a3-aa1b-d90e23c19934' },
    )
   setSound(sound);
   setbtncolor("r")
    console.log('Playing Sound');
      const result = await sound.getStatusAsync();
      SetLoading(false)
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          
        }
      }
    } catch (error) {
      SetLoading(false)
      
      alert("You are offline please connect to the internet for audio");
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

  const PauseAudio = async () => {
    try {
      const result = await sound.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.pauseAsync();
          //setbtncolor('')
        }
      }
    } catch (error) {
      console.log('pause not working')
    }
  };

  // const PauseAudio = async () =>{
  //   //await sound.getStatusAsync();
  //    sound.pauseAsync();
  // }

  const StopAudio0 = async () =>{
    sound.stopAsync(playSound);
    setbtncolor("")
  }
  const StopAudio1 = async () =>{
    sound.stopAsync(playSound1);
    setbtncolor("")
  }
  const StopAudio2 = async () =>{
    sound.stopAsync(playSound2);
    setbtncolor("")
  }
  const StopAudio3 = async () =>{
    sound.stopAsync(playSound3);
    setbtncolor("")
  }
  const StopAudio4 = async () =>{
    sound.stopAsync(playSound4);
    setbtncolor("")
  }
  const StopAudio5 = async () =>{
    sound.stopAsync(playSound5);
    setbtncolor("")
  }
  const StopAudio6 = async () =>{
    sound.stopAsync(playSound6);
    setbtncolor("")
  }
  const StopAudio7 = async () =>{
    sound.stopAsync(playSound7);
    setbtncolor("")
  }
  const StopAudio8 = async () =>{
    sound.stopAsync(playSound8);
    setbtncolor("")
  }
  const StopAudio = async () =>{
    sound.stopAsync();
    setbtncolor("")
  }
  const LineDivider = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center' }}>
  <View style={{flex: 1, height: 1, backgroundColor: 'white',top:-180}} />
  
</View>
       
    )
}
 
  return (
    
    <ScrollView  showsHorizontalScrollIndicator={true}
    automaticallyAdjustContentInsets={true}  
   stickyHeaderIndices={[0]}
   //pagingEnabled={true}
   keyboardShouldPersistTaps='always'
   style={{
     alignContent:"center",flex:1,width:width,
     //borderRadius: 100,
     backgroundColor:'white'
   }} >
       <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.LEADERBOARD}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
<SafeAreaView style={{top:0,backgroundColor:'white',flex:1,padding:0}}>

                            <ImageBackground resizeMethod='resize' style={{top:0,
            width:width, 
            height:height,
            left:0,
            
            alignSelf:'center'}} source={require('../assets/kaba1.jpg')} >
               <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound : StopAudio0 }>  
      {btncolor ==='a'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 {btncolor ==='a' ? <Text style={styles.TextComponentStyle}>Surah Yaseen:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Yaseen:</Text>}
 
  
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound3 : StopAudio3 }>  
      {btncolor ==='d'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='d' ? <Text style={styles.TextComponentStyle}>Surah Al Baqrah:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al Baqrah:</Text>}
  
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound4 : StopAudio4 }>  
      {btncolor ==='e'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='e' ? <Text style={styles.TextComponentStyle}>Manzil:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Manzil:</Text>}
 
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound1 : StopAudio1 }>  
      {btncolor ==='b'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='b' ? <Text style={styles.TextComponentStyle}>Surah Ar Rehman:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Ar Rehman:</Text>}
 

  
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound2 : StopAudio2 }>  
      {btncolor ==='c'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='c' ? <Text style={styles.TextComponentStyle}>Surah Ad Duha:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Ad Duha:</Text>}
  
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound5 : StopAudio5 }>  
      {btncolor ==='f'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='f' ? <Text style={styles.TextComponentStyle}>Ad duha ash-sharh at-teen:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Ad duha ash-sharh at-teen:</Text>}
 
 
  </View>
            </ImageBackground>
            <ImageBackground resizeMethod='resize' style={{top:0,
            width: width, 
            height:height,
            left:0,
            
            alignSelf:'center'}} source={require('../assets/kaba1.jpg')} >
              <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound6 : StopAudio6 }>  
      {btncolor ==='g'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='g' ? <Text style={styles.TextComponentStyle}>Ale Imran verse 189-200:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Ale Imran verse 189-200:</Text>}
 
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound7 : StopAudio7 }>  
      {btncolor ==='h'? <Ionicons name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='h' ? <Text style={styles.TextComponentStyle}>An-Nahil ayahs 51-70:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>An-Nahil ayahs 51-70:</Text>}
  
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound8 : StopAudio8 }>  
      {btncolor ==='i'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='i' ? <Text style={styles.TextComponentStyle}>Surah Yusuf ayah 77-98:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Yusuf ayah 77-98:</Text>}
 
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound11: StopAudio }>  
      {btncolor ==='l'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='l' ? <Text style={styles.TextComponentStyle}>Surah Al Fajr:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al Fajr:</Text>}
  
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound14 : StopAudio }>  
      {btncolor ==='o'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='o' ? <Text style={styles.TextComponentStyle}>Surah Al Asr:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al Asr:</Text>}
  
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound15 : StopAudio }>  
      {btncolor ==='p'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='p' ? <Text style={styles.TextComponentStyle}>Surah Al lail:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al lail:</Text>}
  </View>
            </ImageBackground>
             <ImageBackground resizeMethod='resize' style={{top:0,
            width:width, 
            height:height,
            left:0,
            
            alignSelf:'center'}} source={require('../assets/kaba1.jpg')} >
              <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound9 : StopAudio }>  
      {btncolor ==='j'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='j' ? <Text style={styles.TextComponentStyle}>Surah Al Ikhlas:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al Ikhlas:</Text>}
 
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound12 : StopAudio }>  
      {btncolor ==='m'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='m' ? <Text style={styles.TextComponentStyle}>Surah Al Falaq:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al Falaq:</Text>}
  
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound13 : StopAudio}>  
      {btncolor ==='n'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='n' ? <Text style={styles.TextComponentStyle}>Surah An Naas:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah An Naas:</Text>}
 
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound10 : StopAudio }>  
      {btncolor ==='k'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='k' ? <Text style={styles.TextComponentStyle}>Surah Al-Kafiroon:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al-Kafiroon:</Text>}

    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound16 : StopAudio0 }>  
      {btncolor ==='q'? <Ionicons name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='q' ? <Text style={styles.TextComponentStyle}>Surah Al fil:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al fil:</Text>}
  </View>
            </ImageBackground>


                 

                  

    {Loading ? <ShowAlert/> : ""} 
    
    {/* <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound : StopAudio0 }>  
      {btncolor ==='a'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 {btncolor ==='a' ? <Text style={styles.TextComponentStyle}>Surah Yaseen:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Yaseen:</Text>}
 
  </View>
  <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound3 : StopAudio3 }>  
      {btncolor ==='d'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='d' ? <Text style={styles.TextComponentStyle}>Surah Al Baqrah:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al Baqrah:</Text>}
  </View>
  <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound4 : StopAudio4 }>  
      {btncolor ==='e'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='e' ? <Text style={styles.TextComponentStyle}>Manzil:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Manzil:</Text>}
  </View> */}
   

  {/* <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound1 : StopAudio1 }>  
      {btncolor ==='b'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='b' ? <Text style={styles.TextComponentStyle}>Surah Ar Rehman:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Ar Rehman:</Text>}
  </View>

  <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound2 : StopAudio2 }>  
      {btncolor ==='c'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='c' ? <Text style={styles.TextComponentStyle}>Surah Ad Duha:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Ad Duha:</Text>}
  </View>
    
  <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound5 : StopAudio5 }>  
      {btncolor ==='f'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='f' ? <Text style={styles.TextComponentStyle}>Ad duha ash-sharh at-teen:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Ad duha ash-sharh at-teen:</Text>}
  </View> */}
    
  {/* <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound6 : StopAudio6 }>  
      {btncolor ==='g'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='g' ? <Text style={styles.TextComponentStyle}>Ale Imran verse 189-200:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Ale Imran verse 189-200:</Text>}
  </View>
    
  <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound7 : StopAudio7 }>  
      {btncolor ==='h'? <Ionicons name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='h' ? <Text style={styles.TextComponentStyle}>An-Nahil ayahs 51-70:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>An-Nahil ayahs 51-70:</Text>}
  </View>
    
  <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound8 : StopAudio8 }>  
      {btncolor ==='i'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='i' ? <Text style={styles.TextComponentStyle}>Surah Yusuf ayah 77-98:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Yusuf ayah 77-98:</Text>}
  </View>

  <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound11: StopAudio }>  
      {btncolor ==='l'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='l' ? <Text style={styles.TextComponentStyle}>Surah Al Fajr:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al Fajr:</Text>}
  </View>
            
  <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound14 : StopAudio }>  
      {btncolor ==='o'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='o' ? <Text style={styles.TextComponentStyle}>Surah Al Asr:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al Asr:</Text>}
  </View>       
  <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound15 : StopAudio }>  
      {btncolor ==='p'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='p' ? <Text style={styles.TextComponentStyle}>Surah Al lail:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al lail:</Text>}
  </View> */}
  {/* <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound9 : StopAudio }>  
      {btncolor ==='j'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='j' ? <Text style={styles.TextComponentStyle}>Surah Al Ikhlas:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al Ikhlas:</Text>}
  </View>
  <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound12 : StopAudio }>  
      {btncolor ==='m'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='m' ? <Text style={styles.TextComponentStyle}>Surah Al Falaq:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al Falaq:</Text>}
  </View>

  <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound13 : StopAudio}>  
      {btncolor ==='n'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='n' ? <Text style={styles.TextComponentStyle}>Surah An Naas:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah An Naas:</Text>}
  </View>   

  <View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound10 : StopAudio }>  
      {btncolor ==='k'? <Ionicons  name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='k' ? <Text style={styles.TextComponentStyle}>Surah Al-Kafiroon:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al-Kafiroon:</Text>}
  </View>

<View style={styles.MainContainer}>
    <TouchableWithoutFeedback  style={styles.icon}
     onPress={ btncolor ==='' ? playSound16 : StopAudio0 }>  
      {btncolor ==='q'? <Ionicons name={'stop-outline'} size={38} color={'#0000CD'} />
      : <Ionicons  name={'play-outline'} size={38} color={'#CDDC39'} />} 
    </TouchableWithoutFeedback>
 
 {btncolor ==='q' ? <Text style={styles.TextComponentStyle}>Surah Al fil:</Text>:<Text style={{  borderRadius: 5,
  borderWidth: 2,  borderColor: '#9ACD32', color: '#fff', backgroundColor : '#8B4513', padding : 2, fontSize: 20,textAlign: 'center',margin: 10}}>Surah Al fil:</Text>}
  </View> */}
     
                    {/* <TouchableOpacity
                        style={{ height: 80,alignItems: 'flex-end',top:40,left:80 }}
                        onPress={() => navigation.navigate('audio2')}
                    >
                    <Text style={{ ...FONTS.h3, color: "#9ACD32",top:-20,right:120,fontSize:20 }}>Next</Text>
                        <Image
                            source={icons.back_arrow_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                right:80,
                                transform: [{rotateY: '180deg'}],
                                top:-45,backgroundColor:"#9ACD32"
                                
                            }}
                        /> 
                        
                    </TouchableOpacity> */}
</SafeAreaView>
                    </ScrollView>
     
 
   
  );
}


const styles = StyleSheet.create({
    container: {
   
     alignItems: 'center',
    justifyContent: 'center',
     backgroundColor: "transparent",
     
     
     
    },
   playBtn: {
     padding: 0,
     top:-130,
     left:-20
     },
     pauseBtn: {
      padding: 0,
      top:-170,
      left:40
      },
      stopBtn: {
        padding: 0,
        top:-210,
        left:130
        },
     text: {
      padding: 0,
      color:'white'
      ,top:-100,
      left:-120,
      fontSize:20
      
      },alert: {
          position: 'absolute',
          top:50,flex:1,
          backgroundColor: 'green',
          width: '100%',
          overflow: 'hidden'
      },
      msg: {
          margin: 10,
          marginHorizontal: 20,
          color: '#fff'
      },
      MainContainer: {
 
        
        //justifyContent: "space-evenly",
        flex:1,
        alignItems: "flex-start",top:100,left:15,width:width
        ,height:height
     
      },
     
      TextComponentStyle: {
     
        borderRadius: 5,
     
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
     
        fontSize: 20,
     
        textAlign: 'center',
     
        margin: 10
      },playcontainer:{
        borderRadius: 5,
     
        // Set border width.
        borderWidth: 2,
     
        // Set border Hex Color Code Here.
        borderColor: '#FF5722',
     
        // Setting up Text Font Color.
        color: '#fff',
     
        // Setting Up Background Color of Text component.
        backgroundColor : '#CDDC39',
        
        // Adding padding on Text component.
        padding : 2,
     
        
        margin: 10

      },icon:{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "flex-start"
      }
   });
