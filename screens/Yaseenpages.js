import * as React from 'react';
import { Audio } from 'expo-av';
import { View, Text, ImageBackground ,TouchableOpacity,TouchableWithoutFeedback,Image,
    ScrollView,FlatList,LayoutAnimation, Platform, UIManager,
    Alert,SafeAreaView,Animated,Dimensions, ActivityIndicator,StyleSheet
} from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}


let timeout = null;
let message = 'Loading ....';
const { width,height } = Dimensions.get('window');
export default function Yaseenpages({route,navigation}) {
    const [Loaded, SetLoaded] = React.useState(false);
    const [Loading, SetLoading] = React.useState(false);
    const [btncolor, setbtncolor] = React.useState("");
    const [btncolorstop, setbtncolorstop] = React.useState("");
    const [alertVisible, setAlertVisible] = React.useState(false)
    const [msg, setMsg] = React.useState("");
    const [sound, setSound] = React.useState();
    //const sound = React.useRef(new Audio.Sound());
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
  
async function playSound() {
  try {
    SetLoading(true);
   const { sound } = await Audio.Sound.createAsync( { uri: 'https://firebasestorage.googleapis.com/v0/b/quranplayer-26155.appspot.com/o/mishary-rashid-alafasy-036-muslimcentral.com.mp3?alt=media&token=6f40308e-da71-4efc-8300-079a1fe61495' },
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
        //   marginTop: 50,
          //flex:1,
          //flexDirection: 'row-reverse'
          //direction:'ltr'
          backgroundColor:'black',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        },
        pagesize: {
            top:-30,left:0,
            width: 410,flex:1, 
            height: 840,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center',resizeMode: 'contain',
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
  
                  
    
    
    <ScrollView showsHorizontalScrollIndicator={true} 
    //  pagingEnabled={true}  
     stickyHeaderIndices={[0]} 
    keyboardShouldPersistTaps='always' 
    style={{
    width:width,flex:1,height:height,
     
      transform: [{ rotateY: '180deg'}],
    }} >
    
     <TouchableWithoutFeedback
                        style={{ flex: 1 }}
                        onPress={btncolor==='' ? playSound : StopAudio }
                    >
                        <View style={{ top:80 }}>
                            
                             {btncolor ==='a'? <Ionicons style={{
                                   left:360,top:20,
                                   
                                }} name={'stop-outline'} size={35} color={'#00bff0'} />: <Image
                                source={icons.speakers}
                                resizeMode="contain"
                                style={{
                                    width: 30,left:360,top:20,
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
      
      
  <ImageBackground  resizeMethod='resize' style={{  top:-30,left:0, width: width,height:height, flex:1,resizeMode: 'contain', alignSelf:'center',
     transform: [{ rotateY: '180deg'}]}} source={require('../assets/yaseennew/yaseen1.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{
            top:15,left:0,
            width: width,flex:1,
           height:height,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center',resizeMode: 'contain',
        }} source={require('../assets/yaseennew/yaseen2.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{
            top:40,left:0,
            width: width,flex:1, 
          height:height,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center',resizeMode: 'contain',
        }} source={require('../assets/yaseennew/yaseen3.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{
            top:60,left:0,
            width: width,flex:1, 
            height:height,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center',resizeMode: 'contain',
        }} source={require('../assets/yaseennew/yaseen4.jpg')} />

                        <ImageBackground resizeMethod='resize' style={{
            top:80,left:0,
            width: width,flex:1, 
            height:height,
            transform: [{ rotateY: '180deg'}],
            alignSelf:'center',resizeMode: 'contain',
        }} source={require('../assets/yaseennew/yaseen5.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{top:120,
            width: width,flex:1, 
            height:height,
            left:0,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/yaseennew/yaseen6.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{top:140,
            width: width,flex:1, 
            height:height,
            left:0,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/yaseennew/yaseen7.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{top:170,
            width: width,flex:1, 
            height:height,
            left:0,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/yaseennew/yaseen8.jpg')} />

                        <ImageBackground resizeMethod='resize' style={{top:200,
           width: width,flex:1, 
           height:height,
            left:0,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/yaseennew/yaseen9.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{top:230,
            width: width,flex:1, 
            height:height,
            left:0,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/yaseennew/yaseen10.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{top:260,
             width: width,flex:1, 
             height:height,
            left:0,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/yaseennew/yaseen11.jpg')} />
                        <ImageBackground resizeMethod='resize' style={{top:290,
            width: width,flex:1, 
            height:height,
            left:0,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/yaseennew/yaseen12.jpg')} />

                        <ImageBackground resizeMethod='resize' style={{top:320,left:0,
            width: width,flex:1, 
            height:height,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/yaseennew/yaseen13.jpg')} />

<ImageBackground resizeMethod='resize' style={{top:380,left:0,
           // width: width,
           width:width,
            height:height,flex:1,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/yaseen/white.jpg')} />
                         
                        {/* Start Reading */}
                {/* <TouchableOpacity
                    style={{
                        
                        flex: 0,
                        width:400,
                        height:60,
                        top:400,
                        left:0,
                        
                        backgroundColor: COLORS.primary,
                        marginHorizontal: SIZES.base,
                        marginVertical: SIZES.base,
                        //borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: [{ rotateY: '180deg'}]

                    }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>Back to main</Text>
                </TouchableOpacity> */}
</SafeAreaView>
      </ScrollView>
  )
}