import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, StyleSheet, DatePickerAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { dataLirikArab, dataLirikJawa, dataLirikLatin } from '../../lirik/dataLirik';

const depan     = require('../../img/depan.png');


export default function DetailLirik({ navigation, route }) {

    const { lirikId, lirikKategori } = route.params;

    const [detail, setDetail] = useState({})

    useEffect(() => {
        // console.warn();
        // console.warn(lirikId)
        switch (lirikKategori) {
            case 'arab':
                setDetail(dataLirikArab.filter(lirik => lirik.id === lirikId))
                break;
        
            case 'jawa':
                setDetail(dataLirikJawa.filter(lirik => lirik.id === lirikId))
                break;

            case 'latin':
                setDetail(dataLirikLatin.filter(lirik => lirik.id === lirikId))
                break;
        }
    }, []);

    return (
        <View style={{flex: 1, marginLeft: -20}}>
            
        <View style={{ flex: 1, flexDirection: 'row', }}>
            <View style={{ }}>
             <Text style={{ fontSize: 18, fontWeight: '900', color: 'black', marginLeft: 58, marginTop: 75,  }}>Assalamualaikum.Wr.Wb</Text>
             <Text style={{ fontSize: 28, fontWeight: '900', color: 'black', marginLeft: 58, marginTop: -3, }}>KUMPULAN LIRIK</Text>
             <Text style={{ fontSize: 30, fontWeight: '900', color: '#168814', marginLeft: 58, marginTop: -5, }}>SHOLAWAT NABI</Text>
             </View> 
        </View>

        <View style={{ alignContent: 'center', marginTop: -550, marginLeft: 280, }}>
           <Image source={depan} style={{ height: 125, }}/>                
        </View> 
{/* 
        <Image source={ getLirikImage(detail.data) } /> */}

        <ScrollView style={{ flex: 1, }}>
            <Text style={{ fontSize: 15, color:'black', fontWeight: '600', width: 330, height: 850, justifyContent: 'center', marginLeft: 60  }}>
                {detail[0]?.data}
            </Text>
        </ScrollView>
        
        {/* {console.warn(detail[0])} */}
        </View>
        
    )
}

// async function getLirikImage (path) {
//     const { default: image } = await import(path)

//     const imageLirik = Image.resolveAssetSource(image).uri

//     return imageLirik
// }
