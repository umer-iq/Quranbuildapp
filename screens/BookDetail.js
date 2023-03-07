import React from "react";
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,Dimensions,
    Animated
} from 'react-native';

import { FONTS, COLORS, SIZES, icons } from "../constants";
const { width,height } = Dimensions.get('window');
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

// const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8343081326487707/1100303999';
const adUnitId =  'ca-app-pub-8343081326487707/1100303999';

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 5 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const BookDetail = ({ route, navigation,myBooks }) => {

    const [book, setBook] = React.useState(null);

    const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
    const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = React.useState(0);

    const indicator = new Animated.Value(0);

    React.useEffect(() => {
        let { book } = route.params;
        setBook(book)
    }, [book])
//console.log(book)
    function renderBookInfoSection() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={book.bookCover}
                    resizeMode="cover"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }}
                />

                {/* Color Overlay */}
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        backgroundColor: book.backgroundColor
                    }}
                >
                </View>

                {/* Navigation header */}
                <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 80, alignItems: 'flex-end' }}>
                    <TouchableOpacity
                        style={{ marginLeft: SIZES.base }}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Image
                            source={icons.back_arrow_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: book.navTintColor
                            }}
                        />
                    </TouchableOpacity>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  
                        <Text style={{ ...FONTS.h4, color: book.navTintColor }}>Detail</Text>
                    </View>
                       

                    {/* <TouchableOpacity
                        style={{ marginRigth: SIZES.base }}
                        onPress={() => console.log("Click More")}
                    >
                        <Image
                            source={icons.more_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: book.navTintColor,
                                alignSelf: 'flex-end'
                            }}
                        />
                    </TouchableOpacity> */}
                </View>

                {/* Book Cover */}
                <View style={{ flex: 2, paddingTop: SIZES.padding2, alignItems: 'center' }}>
                <BannerAd style={{width:width}}
      unitId={adUnitId}
      size={BannerAdSize.LEADERBOARD}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
                    <Image
                        source={book.bookCover}
                        resizeMode="contain"
                        style={{
                            flex: 1,
                            width: width-290,
                            height: height
                        }}
                    />
                </View>

                {/* Book Name and Author */}
                <View style={{ flex: 1.8, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ ...FONTS.h2, color: book.navTintColor }}>{book.bookName}</Text>
                    <Text style={{ ...FONTS.body3, color: book.navTintColor }}>{book.author}</Text>
                </View>

                {/* Book Info */}
                <View
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 10,
                        margin: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: "rgba(0,0,0,0.3)"
                    }}
                >
                    {/* Rating */}
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.rating}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Rating</Text>
                    </View>

                    <LineDivider />

                    {/* Pages */}
                    <View style={{ flex: 1, paddingHorizontal: SIZES.radius, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.pageNo}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Number of Page</Text>
                    </View>

                    <LineDivider />

                    {/* Language */}
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.language}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Language</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderBookDescription() {

        const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ? scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight : scrollViewVisibleHeight

        const difference = scrollViewVisibleHeight > indicatorSize ? scrollViewVisibleHeight - indicatorSize : 1

        return (
            <View style={{ flex: 1, flexDirection: 'row', padding: SIZES.padding }}>
                {/* Custom Scrollbar */}
                <View style={{ width: 6, height: height, backgroundColor: COLORS.gray1 }}>
                    <Animated.View
                        style={{
                            width: 6,
                            height: indicatorSize,
                            backgroundColor: COLORS.lightGray4,
                            transform: [{
                                translateY: Animated.multiply(indicator, scrollViewVisibleHeight / scrollViewWholeHeight).interpolate({
                                    inputRange: [0, difference],
                                    outputRange: [0, difference],
                                    extrapolate: 'clamp'
                                })
                            }]
                        }}
                    />
                </View>

                {/* Description */}
                <ScrollView
                    contentContainerStyle={{ paddingLeft: SIZES.padding2 }}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onContentSizeChange={(width, height) => {
                        setScrollViewWholeHeight(height)
                    }}
                    onLayout={({ nativeEvent: { layout: { x, y, width, height } } }) => {
                        setScrollViewVisibleHeight(height)
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: indicator } } }],
                        { useNativeDriver: false }
                    )}
                >
                    <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding }}>Description:</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>{book.description}</Text>
                </ScrollView>
            </View>
        )
    }

    function renderBottomButton() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {/* Bookmark */}
                {/* <TouchableOpacity
                    style={{
                        width: 60,
                        backgroundColor: COLORS.secondary,
                        marginLeft: SIZES.padding,
                        marginVertical: SIZES.base,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => console.log("Bookmark")}
                >
                    <Image
                        source={icons.bookmark_icon}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.lightGray2
                        }}
                    />
                </TouchableOpacity> */}

                {/* Start Reading */}
                <TouchableOpacity
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.primary,
                        marginHorizontal: SIZES.base,
                        marginVertical: SIZES.base,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                   
                    // onPress={book.bookName === 'Surah Yaseen' ? () => navigation.navigate('Yaseenpages') :  () => navigation.navigate('Manzil')}
                    onPress={readingnavigation}              
                >
                    <Text style={{ ...FONTS.h1, color: COLORS.white }}>Press</Text>
                </TouchableOpacity>
            </View>
        )
    }
const readingnavigation = () =>{
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
    if (book) {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.black }}>
         {/* <Text style={{left:20,}}>  <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    /></Text> */}
                {/* Book Cover Section */}
                <View style={{ flex: 4 }}>
              
                    {renderBookInfoSection()}
                </View>

                {/* Description */}
                <View style={{ flex: 2 }}>
                    {renderBookDescription()}
                </View>

                {/* Buttons */}
                <View style={{ height: 70, marginBottom: 30 }}>
                    {renderBottomButton()}
                </View>
            </View>
        )
    } else {
        return (<></>)
    }

}

export default BookDetail;