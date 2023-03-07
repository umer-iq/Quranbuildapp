import { View, Text } from 'react-native'
import React from 'react'

export default function hijridate() {
  return (
    <View>
      <Text>hijridate</Text>
    </View>
  )
}


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import HijriDate from 'hijri-date/lib/safe';
// //import colors from '../constants/colors';

// export default class Header extends React.Component {
//     _formatDate = date => {
//         var monthNames = [
//             "January", "February", "March",
//             "April", "May", "June", "July",
//             "August", "September", "October",
//             "November", "December"
//         ];

//         var day = date.getDate();
//         var monthIndex = date.getMonth();
//         var year = date.getFullYear();

//         return day + ' ' + monthNames[monthIndex] + ' ' + year;
//     }

//     _formatDateHijri = date => {
//         var monthNames = [
//             "Muharram", "Shafar", "Rabi’ul Awwal",
//             "Rabi’ul Akhir", "Jumadil Awwal", "Jumadil Akhir", "Rajab",
//             "Sya’ban", "Ramadhan", "Syawal",
//             "Dzulqa’dah", "Dzulhijjah"
//         ];

//         var day = date.getDate();
//         var monthIndex = date.getMonth();
//         var year = date.getFullYear();

//         return day + ' ' + monthNames[monthIndex] + ' ' + year;
//     }

//     render() {
//         const today = this._formatDate(new Date());
//         const hijriToday = this._formatDateHijri(new HijriDate());
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.dateText}>{hijriToday} / {today}</Text>
//                 <Text style={styles.locationText}>{this.props.location}</Text>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         paddingTop: 30,
//         paddingBottom: 25
//     },
//     dateText: {
//         fontSize: 16,
//         color: 'brown'
//     },
//     locationText: {
//         fontSize: 12,
//         color: 'brown'
//     }
// })
