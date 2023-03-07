import React from "react";
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image ,Button,
    ScrollView,
    Animated,StyleSheet,Dimensions
} from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";
//import Image resizeMethod='resize'Zoom from 'react-native-Image resizeMethod='resize'-pan-zoom';
import * as Speech from 'expo-speech'; 
export default function Salah({route,navigation}) {
    const [statebtn, setstatebtn] = React.useState('')

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
          backgroundColor:'black'
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
        }, MainContainer: {
 
            flex: 1,transform: [{ rotateY: '180deg'}],
            justifyContent: "center",width:"100%",height:"100%",
            alignItems: "center",top:50,left:-10
         
          }, TextComponentStyle: {
  
       lineHeight: 20,
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
         
            fontSize: 18,
         
            textAlign: 'center',
         
            margin: 0
          }
      });
      const speak =() =>{
        const thingtosay='الله أكبر';
        Speech.speak(thingtosay,{pitch:.8,rate:.8,language:'ar-SA'});
        setstatebtn('a')
       }
       const speak1 =() =>{
        const thingtosay=' سبحانَكَ اللهمَ وبِحَمدِكَ تَباركَ اسمُكَ وتَعالَى جَدُّكَ ولا إلَهَ غيرُك';
        Speech.speak(thingtosay,{pitch:.8,rate:.8,language:'ar-SA'});
       }
       const speak2 =() =>{
        const thingtosay='أَعُوْذُ بِاللّٰهِ مِنَ الشَّيْطٰانِ الرَّجِيْمِ.بسم الله الرحمن الرحيم';
        Speech.speak(thingtosay,{pitch:.8,rate:.8,language:'ar-SA'});
       }
       const speak3 =() =>{
        const thingtosay="ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ مَـٰلِكِ يَوْمِ ٱلدِّينِ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ ";
        Speech.speak(thingtosay,{pitch:.8,rate:.8,language:'ar-SA'});
       }
       const speak4 =() =>{
        const thingtosay='قُلْ هُوَ ٱللَّهُ أَحَدٌ ٱللَّهُ ٱلصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ';
        Speech.speak(thingtosay,{pitch:.8,rate:.8,language:'ar-SA'});
       }
       const speak5 =() =>{
        const thingtosay='الله أكبر . سُبحانَ رَبِّيَ العَظيم سُبحانَ رَبِّيَ العَظيم سُبحانَ رَبِّيَ العَظيم';
        Speech.speak(thingtosay,{pitch:.8,rate:.8,language:'ar-SA'});
       }
       const speak6 =() =>{
        const thingtosay='سَمِعَ اللهُ لِمَنْ حَمِدَهُ رَبَّنَا ولكَ الحَمد . الله أكبر';
        Speech.speak(thingtosay,{pitch:.8,rate:.8,language:'ar-SA'});
       }
       const speak7 =() =>{
        const thingtosay='سُبحَانَ رَبِِّيَ الأعْلَى سُبحَانَ رَبِِّيَ الأعْلَى سُبحَانَ رَبِِّيَ الأعْلَى';
        Speech.speak(thingtosay,{pitch:.8,rate:.8,language:'ar-SA'});
       }
       const speak8 =() =>{
        const thingtosay='اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْ نِي وَاهْدِنِي وَارْزُقْنِي . الله أكبر';
        Speech.speak(thingtosay,{pitch:.8,rate:.8,language:'ar-SA'});
       }
       const speak9 =() =>{
        const thingtosay='التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ السَّلَامُ عَلَى النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِين. أَشْهَدُ أَنْ لا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. ';
        Speech.speak(thingtosay,{pitch:.8,rate:.8,language:'ar-SA'});
       }
       const speak10 =() =>{
        const thingtosay='اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ. ';
        Speech.speak(thingtosay,{pitch:.8,rate:.8,language:'ar-SA'});
       }
       const speak11 =() =>{
        const thingtosay='اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ';
        Speech.speak(thingtosay,{pitch:.8,rate:.8,language:'ar-SA'});
       }
       const speak12 =() =>{
        const thingtosay='رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ';
        Speech.speak(thingtosay,{pitch:.8,rate:.8,language:'ar-SA'});
       }
       const stop = () =>{
        Speech.stop();
        setstatebtn('')
       }
   
  return ( 
    <ScrollView  showsHorizontalScrollIndicator={true}
     automaticallyAdjustContentInsets={true}  
    
    //stickyHeaderIndices={[0]} 
    keyboardShouldPersistTaps='always'
    style={{
      alignContent:"stretch",flex:1,alignSelf:'center',
      //borderRadius: 100,
      transform: [{ rotateY: '180deg'}],backgroundColor:'black'
    }} >
    
    
    
                    {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',top:20,left:-15 }}>
                        <Text style={{ ...FONTS.h2, color: "grey",transform: [{ rotateY: '180deg'}],top:50 }}>Salah</Text>
                        <Image resizeMethod='resize'
                            source={icons.read_icon}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,top:24,backgroundColor:'grey',left:65
                                //tintColor: book.navTintColor,
                                //alignSelf: 'flex-end'
                            }}
                        />
                    </View> */}
       {/* <Image resizeMethod='resize'Zoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       Image resizeMethod='resize'Width={399}
                       Image resizeMethod='resize'Height={800} pinchToZoom={true} enableSwipeDown={false}> */}
                       {/* <TouchableOpacity
                        style={{ marginLeft: SIZES.base }}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Image resizeMethod='resize'
                            source={icons.back_arrow_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                transform: [{ rotateY: '180deg'}],top:70,left:340
                            }}
                        />
                    </TouchableOpacity> */}
                    <View style={styles.MainContainer}>
    
 
  <Text style={styles.TextComponentStyle}>Prophet Muhammad (peace be upon him) said:“No salah is accepted without wudu (purification)”
  </Text>
  </View>
                       
                       <Image resizeMethod='resize' style={{top:50,
            width:"100%", 
            height: 650,
            left:-10,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/wudu.png')} />
             <View style={{flex: 1,transform: [{ rotateY: '180deg'}],
            justifyContent: "center",width:"100%",height:"100%",
            alignItems: "center",top:183,left:-10}}>
    
 
    <Text style={styles.TextComponentStyle}>Is only required when you are discharged{'\n'} out of passion while one is awake or asleep,ghusl becomes wajib.
    </Text>
    </View>

<Image resizeMethod='resize' style={{top:0,
            width: "100%", 
            height: 810,
            left:-11,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/How-To-Perform-Ghusl-01.jpg')} />


<Image resizeMethod='resize' style={{top:0,
            width: "100%", 
            height: 800,
            left:-10,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/Reward-for-praying-salah-1.png')} />
            <Image resizeMethod='resize' style={{top:0,
            width: "100%", 
            height: 850,
            left:-9,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/namazrakat.jpg')} />
            <View style={{flex: 1,transform: [{ rotateY: '180deg'}],
            justifyContent: "center",width:"100%",height:"100%",
            alignItems: "center",top:209,left:-10}}>
    <Text style={styles.TextComponentStyle}>After wudu face the Kaba direction{'\n'} and start with takbeer as shown in pic,and Follow the steps.</Text>
    </View>
                        <Image resizeMethod='resize' style={{top:0,
            width: "100%", 
            height: 800,
            left:0,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/namazkatareeqaeng1.png')} >
            </Image>

               {/* <View> {statebtn === "a" ? <Button style={{color:'#00bff0'}} title="stop" onPress={stop} />:<Button style={{color:'#00bff0'}} title="Audio" onPress={speak} />}</View>
            */}

            <View style={{left:268,top:-210,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="listen" onPress={speak} /></View>
    <View style={{left:50,top:-245,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="stop" onPress={stop} /></View>
            
                        
                        
                        <Image resizeMethod='resize' style={{top:0,
            width: "100%", 
            height: 800,
            left:0,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',justifyContent:"center",
            alignSelf:'center'}} source={require('../assets/salahpro/namazkatareeqaeng2.png')} />

            
<View style={{left:268,top:-225,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="listen" onPress={speak1} /></View>
    <View style={{left:50,top:-262,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="stop" onPress={stop} /></View>
            
                        <Image resizeMethod='resize' style={{top:0,
            width: "100%", 
            height: 1030,
            left:0,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/namazkatareeqaeng3.png')} />


<View style={{left:268,top:-345,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="listen" onPress={speak2} /></View>
    <View style={{left:53,top:-382,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="stop" onPress={stop} /></View>
      
                        <Image resizeMethod='resize' style={{top:0,
            width: "100%", 
            height: 700,
            left:-12,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/namazkatareeqaeng4.png')} />
            <View style={{left:268,top:-204,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="listen" onPress={speak3} /></View>
    <View style={{left:50,top:-240,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="stop" onPress={stop} /></View>
      

<Image resizeMethod='resize' style={{top:0,
            width: "100%", 
            height: 1650,
            left:-10,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/iklass.jpg')} />
<View style={{left:258,top:-607,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="listen" onPress={speak4} /></View>
    <View style={{left:50,top:-645,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="stop" onPress={stop} /></View>
      
                        <Image resizeMethod='resize' style={{top:-356,
            width: "100%", 
            height: 650,
            left:0,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/namazkatareeqaeng5.png')} />

<View style={{left:258,top:-518,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="listen" onPress={speak5} /></View>
    <View style={{left:50,top:-555,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="stop" onPress={stop} /></View>
      
                        <Image resizeMethod='resize' style={{top:-400,
            width: "100%", 
            height: 1050,
            left:-9,
            transform: [{ rotateY: '180deg'}],resizeMode: 'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/namazkatareeqaeng6.png')} />
            <View style={{left:258,top:-770,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="listen" onPress={speak6} /></View>
    <View style={{left:50,top:-807,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="stop" onPress={stop} /></View>
      
                        <Image resizeMethod='resize' style={{top:-470,
            width: "100%", 
            height: 650,
            left:-17,
            transform: [{ rotateY: '180deg'}],resizeMode:'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/namazkatareeqaeng7.png')} />
             <View style={{left:258,top:-630,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="listen" onPress={speak7} /></View>
    <View style={{left:50,top:-667,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="stop" onPress={stop} /></View>
      
                        <Image resizeMethod='resize' style={{top:-575,
            width: "100%", 
            height: 1050,
            left:-2,
            transform: [{ rotateY: '180deg'}],resizeMode:'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/namazkatareeqaeng8.png')} />
            <View style={{left:258,top:-953,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="listen" onPress={speak8} /></View>
    <View style={{left:50,top:-990,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="stop" onPress={stop} /></View>
      

                        <Image resizeMethod='resize' style={{top:-675,
            width: "100%", 
            height: 750,
            left:-9,
            transform: [{ rotateY: '180deg'}],resizeMode:'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/namazkatareeqaeng9.png')} />
             <View style={{left:258,top:-883,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="listen" onPress={speak7} /></View>
    <View style={{left:50,top:-920,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="stop" onPress={stop} /></View>
      
                        <Image resizeMethod='resize' style={{top:-745,
            width: "100%", 
            height: 950,
            left:-9,
            transform: [{ rotateY: '180deg'}],resizeMode:'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/namazkatareeqaeng10.png')} />
            <View style={{left:258,top:-1067,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="listen" onPress={speak9} /></View>
    <View style={{left:50,top:-1105,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="stop" onPress={stop} /></View>
      
                        <Image resizeMethod='resize' style={{top:-805,
            width: "100%", 
            height: 800,
            left:-13,
            transform: [{ rotateY: '180deg'}],resizeMode:'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/namazkatareeqaeng11.png')} />
            <View style={{left:258,top:-1035,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="listen" onPress={speak9} /></View>
    <View style={{left:50,top:-1070,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="stop" onPress={stop} /></View>
      
                        <Image resizeMethod='resize' style={{top:-885,
            width: "100%", 
            height: 940,
            left:-10,
            transform: [{ rotateY: '180deg'}],resizeMode:'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/namazkatareeqaeng12.png')} />
 <View style={{left:258,top:-1205,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="listen" onPress={speak10} /></View>
    <View style={{left:50,top:-1242,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="stop" onPress={stop} /></View>
      
                        <Image resizeMethod='resize' style={{top:-962,left:-12,
            width: "100%", 
            height: 820,
            transform: [{ rotateY: '180deg'}],resizeMode:'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/namazkatareeqaeng13.png')} />
            <View style={{left:258,top:-1205,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="listen" onPress={speak11} /></View>
    <View style={{left:50,top:-1242,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="stop" onPress={stop} /></View>
      

<Image resizeMethod='resize' style={{top:-1090,left:-10,
            width: 435, 
            height: 900,
            transform: [{ rotateY: '180deg'}],resizeMode:'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/namazkatareeqaeng14.png')} />
               <View style={{left:258,top:-1378,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="listen" onPress={speak12} /></View>
    <View style={{left:50,top:-1415,width:100,transform: [{ rotateY: '180deg'}]}}><Button style={{color:'#00bff0'}} title="stop" onPress={stop} /></View>
    <View style={{flex: 1,transform: [{ rotateY: '180deg'}],
            justifyContent: "center",width:"100%",height:"100%",
            alignItems: "center",top:-1380,left:-10}}>
    <Text style={styles.TextComponentStyle}>After reciting the second part of the tashahud, you will say the “tasleem.”{'\n'}The tasleem is to look to your right and say:{'\n'}Assalamu alaykum wa rahmatu Allah{'\n'}And then to look to the left and say it again:{'\n'}Assalamu alaykum wa rahmatu Allah.{'\n'}We hope this guide helps you.</Text>
    </View>
            
            {/* <Image resizeMethod='resize' style={{top:4,left:-7,
            width: 415, 
            height: 900,
            transform: [{ rotateY: '180deg'}],resizeMode:'contain',
            alignSelf:'center'}} source={require('../assets/salahpro/duaqunoot.jpg')} /> */}
                         
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

      </ScrollView>
  )
}