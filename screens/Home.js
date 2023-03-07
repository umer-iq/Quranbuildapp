import React,{useState} from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,Share,
    ScrollView,Dimensions,
    FlatList,
} from 'react-native';
import * as Sharing from 'expo-sharing';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Quranaudio,Albakra } from "../constants/images";
import salah  from "../constants/images";
//import HijriDate,{toHijri}from 'hijri-date/lib/safe';
const { width,height } = Dimensions.get('window');
import mobileAds, { MaxAdContentRating } from 'react-native-google-mobile-ads';

import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8343081326487707/1100303999';

//const adUnitId = 'ca-app-pub-8343081326487707/1100303999';

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

  const shareUrl = async (url) => {
  try {
    await Sharing.shareAsync(url);
  } catch (error) {
    console.log('Error sharing:', error);
  }
};

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 18 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1 }}></View>
        </View>
    )
}
// const _formatDate = date => {
//     var monthNames = [
//         "Jan", "Feb", "March",
//         "April", "May", "June", "July",
//         "Aug", "Sep", "Oct",
//         "Nov", "Dec"
//     ];

//     var day = date.getDate();
//     var monthIndex = date.getMonth();
    
//     //console.log(dayname)
//     var year = date.getFullYear();

//     return day + ' ' + monthNames[monthIndex] + ' ' + year;
// }

// const _formatDateHijri = date => {
//     var monthNames = [
//         "Muharram", "Shafar", "Rabi’ul Awwal",
//         "Rabi’ul Akhir", "Jumadil Awwal", "Jumadil Akhir", "Rajab",
//         "Sya’ban", "Ramadhan", "Syawal",
//         "Dzulqa’dah", "Dzulhijjah"
//     ];
//     //var monthNames = ["Muha", "Saf", "Rab1", "Rab2", "Jumd1", "Jumd2", "Rajb", "Shbn", "Rmdn", "Shwl", "Qada", "Hija", "Muharram", "Safar", "Rabi'ul Awwal", "Rabi'ul Akhir", "Jumadal Ula", "Jumadal Akhira", "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhul Qa'ada", "Dhul Hijja"]

//     var day = date.getDate();
//     var monthIndex = date.getMonth();
//     console.log(monthIndex)
//     var year = date.getFullYear();
    
//     return day + ' ' + monthNames[monthIndex-1] + ' ' + year;
// }
//const today = _formatDate(new Date());

//const hijriToday = _formatDateHijri(new HijriDate());
////const nowGreg = new Date();
//const nowHijri = toHijri(now)
//console.log(new HijriDate())

const Home = ({ navigation,route }) => {
    //const [book, setBook] = React.useState(null);

    // React.useEffect(() => {
    //     let { book } = route.params;
    //     setBook(book)
    // }, [book])
    const [adLoaded, setAdLoaded] = useState(false);

  const adFailedToLoad = () => {
    setAdLoaded(false);
  };

  const adLoadedSuccessfully = () => {
    setAdLoaded(true);
  };
    const profileData = {
        name: 'Islam',
        
    }
  
    const bookOtherWordsForHome = {
        id: 1,
        bookName: "Surah Yaseen",
        bookCover: images.yaseen,
        rating: 4.5,
        language: "Arabic",
        pageNo: 13,
        author: "Quran",
        genre: [
            "Islamic", "ReciteDaily", 
        ],
        readed: "1k",
        description: "Surah Yasin, also written as Ya-Sin and Yaseen, is the 36th Surah (chapter) of the Quran and contains 83 verses. For those who don’t know what is Yasin Shareef, it is the heart of the Quran as it mentions all six articles or root beliefs of Islam, including belief in only one God, belief in prophethood, and belief in after-life and resurrection, among others. Surah Yaseen is one of the most loved Surah of the Holy Quran. Its recitation and memorization hold high importance. And it is a source of great reward too. The recitation of Surah Yaseen helps us in attaining Allah’s forgiveness too. Indeed, every letter of the Holy Quran is filled with mercy, blessings, and rewards.It was narrated that Anas (Radi Allahu Anhu) said: “The Messenger of Allah (PBUH) said:“Everything has a heart and the heart of the Quran is Yaseen. Whoever recites Surah Yaseen, Allah will record for him the reward of reading the Quran ten times.” (Jami At-Tirmidhi, 2887)",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    const bookTheMetropolis = {
        id: 2,
        bookName: "Manzil",
        bookCover: images.Manzillogo,
        rating: 4.1,
        language: "Arabic",
        pageNo: 13,
        author: "Quran",
        genre: [
            // "Adventure", "Drama"
        ],
        readed: "1k",
        description: "Manzil Dua is a collection of Ayaat or Verses and short Surahs from the Holy Quran which are recited as a means of protection and antidote - Sihr, Evil Eye as well as other harmful thing. Manzil is not a book or surah in Islam rather Manzil Dua consists of several verses which are parts of Surah Al-Faatiha, Surah Al-Baqarah, Surah Aal-e-Imran, Surah Al-A'araf, Surah Al-Israa,Surah Al-Muminoon, Surah Al-Saffaat, Surah Al-Rehman, Surah Al-Hashr, Surah Al-Jinn, Surah Al-Kaafiroon, Surah Al-Ikhlas, Surah Al-Falaq, Surah Al-Naas. The manzil Dua is prescribed to be read one or three times in one sitting. This may be performed once or twice a day, in the later case once in the morning and once in the evening. This dua is best cure for magic and evil effects. The recitation of Manzil dua found very effective in any kind of sickness.",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000"
    }

    const bookTheTinyDragon = {
        id: 3,
        bookName: "Surah Bakra",
        bookCover: images.Albakra,
        rating: 3.5,
        language: "Arabic",
        pageNo: 104,
        author: "Quran",
        genre: [
            "", "", ""
        ],
        readed: "1k",
        description: "Surah Baqarah is the 2nd Surah of Holy Quran which is the largest in length consists of 286 verses, considered the longest Surah of Quran. Surah Baqarah was revealed in Medina on Prophet Muhammad (SAW),So it is a Madni Surah. Holy Quran is composed of different chapters all of them are the miraculous and divine origin. Some of the Surahs of the Holy Quran has significance on others due to some reasons Surah Baqarah is one of those special Surahs.In Surah Baqarah, Allah Almighty introduces us to the Quran and tells us about three different types of people; those who will benefit from the guidance of the Quran, those who won’t, and those who are only pretending to be people of the Quran. The rest of the Surah is a beautiful blend of history, life lessons, and instructions. Surah Baqarah has various benefits and great rewards in this life and in the hereafter.There are many benefits of Surah Baqarah some of them are mentioned below: In the house where Surah Baqarah is recited Shaytan will not enter. Abu Hurayrah (RA) said that the Prophet Muhammad (PBUH) said: “Do not turn your houses into graves. Verily, Shaytan does not enter the house where Surah Al-Baqarah is recited” (Tirmidhi) Holy Prophet Muhammad (SAW) said: “Indeed Allah wrote in a book two thousand years before He created the heavens and the earth, and He sent down two Ayahs (verses) from it to end Surah al Baqarah with. If they are recited for three nights in a home, no Shaitan (devil) shall come near it.” (Tirmidhi)",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }
    const ReciteQuran = {
        id: 7,
        bookName: "How to perform Salah",
        bookCover: images.salah,
        rating: 3.5,
        language: "Arabic,English",
        pageNo: 14,
        author: "Quran",
        genre: [
            "", "", ""
        ],
        // readed: "13k",
        description: "The salah is a special form of worship that is the second most important pillar of Islam after the shahada (testimony of faith). It is an obligatory form of prayer performed five times a day that was revealed in the Holy Qur’an and taught to us by Prophet Muhammad (peace be upon him).There are many verses in the Holy Quran which Allah tells us about the importance of prayer. Here are two such verses:1st verse 'But those who hold fast to the Book and establish prayer – indeed, We will not allow to be lost the reward of the pious'.Qur'an - Chapter 7, Verse 170 2nd verse 'Recite, [O Muhammad], what has been revealed to you of the Book and establish prayer.Indeed, prayer prohibits immorality and wrongdoing, and the remembrance of Allah is greater. And Allah knows that which you do'. Qur'an - Chapter 29, Verse 45.The salah involves a number of physical movements – standing, bowing, prostrating, and sitting. It also involves the recitation of verses from the Holy Quran in Arabic along with a number of dua (supplications).The Muslim will face the direction of the Kaba, the Sacred House of Allah in Makkah, whenever they perform their prayer. These physical movements, recitations, and supplications are all done to show humility and submission to Allah. Allah Almighty tells us in the Holy Qur’an that mankind was only created for one reason: to worship Him. 'And I (Allah) created not the jinns and humans except they should worship Me (Alone)'.Qur'an - Chapter 51, Verse 56",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }


    const kalmas6 = {
        id: 5,


        bookName: "Six Kalmas",
        bookCover: images.kalma,
        rating: 3.5,
        language: "Arabic",
        pageNo: 6,
        author: "Hadiths",
        genre: [
            "", "", ""
        ],
        // readed: "13k",
        description: "The Six Kalimah,also known as the Six Traditions or the Six Phrases,are six Islamic phrases (prayers) often recited by Muslims. The phrases are taken in part from hadiths.",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }
    const Namazurdu = {
        id: 6,
        bookName: "How to perform Azan",
        bookCover: images.adan,
        rating: 3.5,
        language: "Arabic",
        pageNo: 2,
        author: "Hadith",
        genre: [
            "", "", ""
        ],
        // readed: "13k",
        description: "Adhan is recited loudly from the masjid five times a day.you can also listen azan in audio.The one who delivers the Azan should be honest, he should have a nice voice, and be knowledgeable of the times of the prayers. It is recommended to deliver the Adhan from a high place like a minaret. He should place his fingers in his ears, and to turn to the right and to the left when  reciting: “Come to the prayer. “Come to success.” It also is recommended that he does not accept any wage for this job, except form the national treasury or from charitable endowments. ",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }
    const fundamentals = {
        id: 4,
        bookName: "Fundamentals of Islam",
        bookCover: images.islam,
        rating: 4.0,
        language: "English",
        pageNo: 5,
        author: "Islamic study",
        genre: [
            "", "", ""
        ],
        // readed: "13k",
        description: "The fundamentals of Islam are those basic beliefs that are considered first step towards Islam.For a non Muslim these are the mandatory oaths that he should undertake to become a Muslim.",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }
    const pillars = {
        id: 8,
        bookName: "Five Pillars of Islam",
        bookCover: images.pillar,
        rating: 4.0,
        language: "English",
        pageNo: 5,
        author: "Islamic study",
        genre: [
            "", "", ""
        ],
        // readed: "13k",
        description: "There are five key practices that all Muslims are obligated to fulfil throughout their lifetime. These practices are referred to as pillars because they form the foundation of Muslim life. The five pillars of Islam are Shahada, Salah, Zakat, Fasting, and Hajj.",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }
    const Fasting = {
        id: 9,
        bookName: "Fasting(sawm) Dua",
        bookCover: images.fast,
        rating: 4.0,
        language: "Arabic",
        pageNo: 2,
        author: "Islamic study",
        genre: [
            "", "", ""
        ],
        // readed: "13k",
        description: "Read and listen Fasting dua.",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }
    const Eid = {
        id: 10,
        bookName: "How to perform Eid salah",
        bookCover: images.eid,
        rating: 4.0,
        language: "English",
        pageNo: 9,
        author: "",
        genre: [
            "", "", ""
        ],
        // readed: "13k",
        description: "Eid is a special occasion and one of the things which makes it so is the  congregational prayer which is the first thing everyone's list of eid ideas.Since this prayer comes only once a year, there is often confusion about how to perform this Eid prayer. Here is how to do it:",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }
    const compass = {
        id: 11,
        bookName: "Compass",
        //bookCover: images.Quran,
        rating: 4.0,
        language: "Arabic",
        pageNo: 2,
        author: "",
        genre: [
            "", "", ""
        ],
        // readed: "13k",
        description: "Direction of kaba compass",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const Quran = {
        id: 12,
        bookName: "coming soon Quran read with audio",
        bookCover: images.Quran,
        rating: 4.0,
        language: "Arabic",
        pageNo: 2,
        author: "",
        genre: [
            "", "", ""
        ],
        // readed: "13k",
        description: "Now you can read and listen Quran Simultaneously",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const myBooksData = [
        {
            ...bookOtherWordsForHome,
            completion: "13",
            //lastRead: "3d 5h",
            listen: "Data Audio",


        },
        {
            ...bookTheMetropolis,
            completion: "13",
           // lastRead: "10d 5h",
           listen: "Data Audio",


        },
        {
            ...bookTheTinyDragon,
            completion: "104",
            //lastRead: "1d 2h",
            listen: "Data Audio",


        },
        {

            ...ReciteQuran,
            completion: "14",
            //lastRead: "1d 2h",
            // ReleaseDate: "updated soon",
            // lastlisten: "update",
            //listen: "Data Audio",


        },
        {

            ...fundamentals,
            completion: "5",
            //lastRead: "1d 2h",
            //ReleaseDate: "",
            //listen: "Data Audio",

        },
        {

            ...kalmas6,
            completion: "6",
            //lastRead: "1d 2h",
            // ReleaseDate: "updated soon",
             listen: "Data Audio",

        },
        {
            ...Namazurdu,
            completion: "3",
            //lastRead: "3d 5h",

        },
        {
            ...pillars,
            completion: "5",
            //lastRead: "3d 5h",

        },
        {
            ...Fasting,
            completion: "2",
            //lastRead: "3d 5h",
            listen: "Data Audio",


        },
        {
            ...Eid,
            completion: "2",
            //lastRead: "3d 5h",
            listen: "",


        },
        {
            ...Quran,
            completion: "coming soon",
            //lastRead: "3d 5h",
            listen: "Data Audio",


        },
        // {
        //     ...compass,
        //     completion: "1",
        //     //lastRead: "3d 5h",
        //     //listen: "Data Audio",


        // }
    ]

    const categoriesData = [
        {
            id: 1,
            categoryName: "Basics of Islam",
            books: [
                fundamentals,pillars, kalmas6,Namazurdu,ReciteQuran,Fasting,Eid
            ]
        },
        {
            id: 2,
            categoryName: "Quran Surah",
            books: [
                bookOtherWordsForHome,bookTheMetropolis,bookTheTinyDragon
                
            ]
        },
        {
            id: 3,
            categoryName: "Coming Soon",
            books: [
                Quran
            ]
        },
    ]

    const [profile, setProfile] = React.useState(profileData);
    const [myBooks, setMyBooks] = React.useState(myBooksData);
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(1);
const onShare = async () => {
  try {
    const result = await Share.share({
      title: 'App link',
      message:
        ' Sharing App QuranSurah    https://play.google.com/store/apps/details?id=com.quran.surah'
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    Alert.alert(error.message);
  }
};
    function renderHeader() {
        return (
            
            <View style={{flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center', }}>
                {/* Greetings */}
                <View style={{ flex: 1 }}>
                    <View style={{ marginRight: SIZES.padding }}>
                        <Text style={{ ...FONTS.h3, color:'white' }}>Quran surah Ebook </Text>
                        <Text style={{ ...FONTS.h3, color:'grey' }}>Read with onlineaudio</Text>
                        {/* <Text style={{fontSize: 17,color:'white' }}>{hijriToday}/{today}</Text> */}
                    </View>
                </View>
      {/* <View style={{left:-570,top:40}}>  <Text style={{fontSize: 16,color:'white' }}>{hijriToday} / {today}</Text></View> */}
        
                {/* Points */}
                {/* <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.primary,
                        height: 40,
                        paddingLeft: 3,
                        paddingRight: SIZES.radius,
                        borderRadius: 20,width:90
                    }}
                    onPress={() => { navigation.navigate("Audio") }}
                >
            
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                
                        onPress={() => console.log("Claim")}>
                        <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <Image
                                source={icons.plus_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </View>

                        <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3,height:30 }}>{profile.point}Audio</Text>
                    </View>
                </TouchableOpacity> */}
            </View>
        )
    }

    function renderButtonSection() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: SIZES.padding }}>
                <View style={{ flexDirection: 'row', height: 70, backgroundColor: COLORS.secondary, borderRadius: SIZES.radius }}>
                    {/* Claim */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => { navigation.navigate("Audio") }}
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.speakers}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Audios</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Divider */}
                    <LineDivider />

                    {/* Get Point */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => onShare()
}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                        <Ionicons style={{
                                    width: 35,
                                    height: 40
                                }} name={'share-social'}
                                 size={35} color={'skyblue'} />
                            {/* <Image
                                source={icons.point_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            /> */}
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Share</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Divider */}
                    <LineDivider />

                    {/* My Card */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => { navigation.navigate("card") }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={icons.card_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>My Card</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const readingnavigation = () =>{
        
        //let { book } = params;
        //setBook(book)
        if(book.bookName === 'Surah Yaseen'){
         navigation.navigate('Yaseenpages')
        }
        else if(book.bookName ==='Manzil')
        {
         navigation.navigate('Manzil')
    
        }
        else if(book.bookName ==='Surah Bakra')
        {
         navigation.navigate('Bakra')
    
        }
        else if(book.bookName ==='How to perform Salah')
        {
         navigation.navigate('salah')
    
        }
        else if(book.bookName ==='Six Kalmas')
        {
         navigation.navigate('kalma')
    
        }
        else if(book.bookName ==='How to perform Azan')
        {
         navigation.navigate('Azan')
    
        }
        else if(book.bookName ==='Fundamentals of Islam')
        {
         navigation.navigate('fundamental')
    
        }
        else if(book.bookName ==='Five Pillars of Islam')
        {
         navigation.navigate('pillar')
    
        }
        else if(book.bookName ==='Fasting(sawm) Dua')
        {
         navigation.navigate('fasting')
    
        }
        else if(book.bookName ==='coming soon Quran read with audio')
        {
         navigation.navigate('Quran')
    
        }
        else if(book.bookName ==='How to perform Eid salah')
        {
         navigation.navigate('eidsalah')
    
        }
        else if(book.bookName ==='Compass')
        {
         navigation.navigate('kabacompass')
    
        }
    }
    function renderMyBookSection(myBooks) {

        const renderItem = ({ item, index }) => {
            //console.log(book)
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        marginLeft: index == 0 ? SIZES.padding : 0,
                        marginRight: SIZES.radius
                    }}
                    onPress={() => navigation.navigate("BookDetail", {
                        book: item
                    })}
                    //onPress={() => [item, readingnavigation()]}
                    //onPress={readingnavigation,setBook:item}
                >
                
                    {/* Book Cover */}
                    <Image
                        source={item.bookCover}
                        resizeMode="contain"
                        style={{
                            width:width - 280,
                            height: height - 650,
                            borderRadius: 0
                        }}
                    />

                    {/* Book Info */}
                    <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center',width:width-250,height:height-1000 }}>
                        <Image
                            source={icons.read_icon}
                            style={{
                                width: 15,
                                height: 15,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ marginLeft: 5, ...FONTS.body4, color: COLORS.lightGray }}>{item.listen}</Text>

                        <Image
                            source={icons.page_icon}
                            style={{
                                marginLeft: SIZES.radius,
                                width: 15,
                                height: 15,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ marginLeft: 5, ...FONTS.body4, color: COLORS.lightGray }}>{item.completion}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {/* Header */}
                <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>Scroll list </Text>

                    {/* <TouchableOpacity
                        onPress={() => console.log("See More")}
                    >
                        <Text style={{ ...FONTS.body3, color:'transparent', alignSelf: 'flex-start', textDecorationLine: 'underline' }}>see more</Text>
                    </TouchableOpacity> */}
                </View>

                {/* Books */}
                <View style={{ flex: 1, marginTop: SIZES.padding }}>
                    <FlatList
                        data={myBooks}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={true}
                    />
                </View>
            </View>
        )
    }

    function renderCategoryHeader() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ flex: 1, marginRight: SIZES.padding }}
                    onPress={() => setSelectedCategory(item.id)}
                >
                    {
                        selectedCategory == item.id &&
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{item.categoryName}</Text>
                    }
                    {
                        selectedCategory != item.id &&
                        <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>    {item.categoryName }   </Text>
                    }
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                />
            </View>
        )
    }

    function renderCategoryData() {
        var books = []

        let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory)

        if (selectedCategoryBooks.length > 0) {
            books = selectedCategoryBooks[0].books
        }

        const renderItem = ({ item }) => {
            return (
                <View style={{ marginVertical: SIZES.base }}>
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row' }}
                        onPress={() => navigation.navigate("BookDetail", {
                            book: item
                        })}
                        //onPress={() => [setBook(item), readingnavigation()]}
                    >
                        {/* Book Cover */}
                        <Image
                            source={item.bookCover}
                            resizeMode="cover"
                            style={{ width: width- 350, height:height- 760, borderRadius: 10 }}
                        />

                        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                            {/* Book name and author */}
                            <View>
                                <Text style={{ paddingRight: SIZES.padding, ...FONTS.h3, color: COLORS.white }}>{item.bookName}</Text>
                                <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{item.author}</Text>
                            </View>

                            {/* Book Info */}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                                <Image
                                    source={icons.page_filled_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.pageNo}</Text>

                                <Image
                                    source={icons.read_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.readed}</Text>
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.listen}</Text>
                            </View>

                            {/* Genre */}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                                {
                                    item.genre.includes("Adventure") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Adventure</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Romance") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>Romance</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Drama") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Drama</Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Bookmark Button */}
                    {/* <TouchableOpacity
                        style={{ position: 'absolute', top: 5, right: 15 }}
                        onPress={() => console.log("Bookmark")}
                    >
                        <Image
                            source={icons.bookmark_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.lightGray
                            }}
                        />
                    </TouchableOpacity> */}
                </View>
            )
        }

        return (
            <View style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={books}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:'black' }}>
            {/* Header Section */}
            <View style={{ height: 180 }}>
                {renderHeader(profile)}
                {renderButtonSection()}
            </View>

            {/* Body Section */}
            <ScrollView style={{ marginTop: SIZES.radius,width:width,height:height}}>
                {/* Books Section */}
                <View>
                    
                    {renderMyBookSection(myBooks)}
                </View>

                {/* Categories Section */}
                <View style={{ marginTop: SIZES.padding }}>
                    <View>
                        {renderCategoryHeader()}
                    </View>
                    <View>
                        {renderCategoryData()}
                    </View>
                </View>
            </ScrollView>
            {/* {adLoaded && (
        <BannerAd
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          adUnitID={adUnitId}
          onAdFailedToLoad={adFailedToLoad}
          onAdLoaded={adLoadedSuccessfully}
          requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
        />
      )} */}
        <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
        </SafeAreaView>
    )
}

export default Home;