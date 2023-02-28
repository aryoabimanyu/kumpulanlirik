import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, StyleSheet, Linking  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Iicon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const depan = require('../img/depan.png');
const abi   = require('../img/abi.jpg');


export default function Information({ navigation }) {
    return (
        <View style={{ flex: 1 }}>


            {/* icon back*/}

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Iicon name='arrow-left' color="black" size={20} style={{ marginLeft: 30, marginTop: 40}}/>
            </TouchableOpacity>

            <View style={{ flex: 1, flexDirection: 'row', }}>
            <View style={{ }}>
             <Text style={{ fontSize: 15, fontWeight: '900', color: 'black', marginLeft: 45, marginTop: 75,  }}>Assalamualaikum.Wr.Wb</Text>
             <Text style={{ fontSize: 25, fontWeight: '900', color: 'black', marginLeft: 45, marginTop: -3, }}>KUMPULAN LIRIK</Text>
             <Text style={{ fontSize: 30, fontWeight: '900', color: '#168814', marginLeft: 45, marginTop: -5, }}>SHOLAWAT NABI</Text>
             </View>

             <View style={{ alignContent: 'center', marginTop: 60, marginLeft: 1, }}>
               <Image source={depan} style={{ height: 100, }}/>                
            </View>  
        </View>

            {/* text */}
            <View style={styles.text1}>
                <Text style={styles.text}>
                    Selamat menggunakan aplikasi Ini!!!{'\n'}perkenalkan saya abimanyu aryo seno{'\n'}pembuat aplikasi ini,saya berasal dari{'\n'}Ngargorejo, Ngemplak, Boyolali.{'\n'}{'\n'}
 Tujuan utama dibuatnya aplikasi ini adalah{'\n'}untuk mempermudah para pecinta sholawat{'\n'}mencari atau menyimak lirik sholawat untuk{'\n'}dilantunkan.lewat aplikasi ini insyallah kita{'\n'}semua akan dakwah dan syiar bersama{'\n'}lewat media yang sudah canggih saat ini.{'\n'}{'\n'}
                    semoga aplikasi ini bisa bermanfaat untuk{'\n'}seluruh pengguna yang menggunakan,saya{'\n'}mengucapkan terima kasih kepada semua{'\n'}orang yang sudah mensupport saya.
                    {'\n'}{'\n'}Tetap semangat, dan jangan lupa sholawat!!!
                </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center',  alignSelf: 'center', marginTop: 230, marginLeft:-25}}>
                <TouchableOpacity style={styles.icon} onPress={() => Linking.openURL('https://instagram.com/abimanew63_')}>
                    <Iicon name='instagram' color="black" size={25}  /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={() => Linking.openURL('https://www.youtube.com/channel/UC58tP62LOSOvoW-A4_YHo5A')}>
                    <Iicon name='youtube' color="black" size={25}  /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={() => Linking.openURL('https://tiktok.com/@abimanew_')}>
                    <Iicon name='tiktok' color="black" size={25}  /> 
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        
    },
    text1: {
        marginLeft: 45,
        marginRight: 75,
        // marginTop: 10
        // alignItems: 'center',
    },
    icon: {
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: -300,
    },
})