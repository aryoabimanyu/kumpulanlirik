import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';


const depan     = require('../img/depan.png');
const lirik1    = require('../img/lirik1.jpg');
const lirik2    = require('../img/lirik2.jpg');
const lirik3    = require('../img/lirik3.jpg');


export default function Home({navigation}) {
    return (
        <ScrollView style={{flex: 1, marginLeft: -20}}>
            
        <View style={{ flex: 1, flexDirection: 'row', }}>
            <View style={{ }}>
             <Text style={{ fontSize: 15, fontWeight: '900', color: 'black', marginLeft: 58, marginTop: 75,  }}>Assalamualaikum.Wr.Wb</Text>
             <Text style={{ fontSize: 25, fontWeight: '900', color: 'black', marginLeft: 58, marginTop: -3, }}>KUMPULAN LIRIK</Text>
             <Text style={{ fontSize: 30, fontWeight: '900', color: '#168814', marginLeft: 58, marginTop: -5, }}>SHOLAWAT NABI</Text>
             </View>

             <View style={{ alignContent: 'center', marginTop: 60, marginLeft: 1, }}>
               <Image source={depan} style={{ height: 100, }}/>                
            </View>  
        </View>

        

            <View style={styles.kotak1}>
                {/* kotak 1*/}
                <TouchableOpacity onPress={() => {navigation.navigate("LirikArab")}}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgba(22, 136, 20, 0.9)', 'rgba(217, 217, 217, 0)',]}
                    style={styles.kotak}>
                    <Text style={styles.text}>
                        Lirik Sholawat{'\n'}
                        Arab
                    </Text>
                <View style={{ alignContent: 'center', marginTop: 60, marginLeft: 1, }}>
                <Image source={lirik1} style={styles.kotak2}/>                
                </View>  
                </LinearGradient>
                </TouchableOpacity>
                

                {/* kotak 2*/}
                <TouchableOpacity onPress={() => {navigation.navigate("LirikJawa")}}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgba(22, 136, 20, 0.9)', 'rgba(217, 217, 217, 0)',]}
                    style={styles.kotak}>
                    <Text style={styles.text}>
                        Lirik Sholawat{'\n'}
                        Jawa
                    </Text>
                <View style={{ alignContent: 'center', marginTop: 60, marginLeft: 1, }}>
                <Image source={lirik2} style={styles.kotak2}/>                
                </View>  
                </LinearGradient>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {navigation.navigate("LirikLatin")}}>
                {/* kotak 3*/}
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgba(22, 136, 20, 0.9)', 'rgba(217, 217, 217, 0)',]}
                    style={styles.kotak}>
                    <Text style={styles.text }>
                        Lirik Sholawat{'\n'}
                        Latin
                    </Text>
                <View style={{ alignContent: 'center', marginTop: 60, marginLeft: 1, }}>
                <Image source={lirik3} style={styles.kotak2}/>                
                </View>  
                </LinearGradient>
                </TouchableOpacity>

            </View>
            

            {/* ini buat icon */}
            <TouchableOpacity onPress={() => navigation.navigate('Information')}>
                <Icon name='information-circle' color="black" size={40} style={styles.icon } />
            </TouchableOpacity>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    kotak1: {
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 0
    },
    kotak: {
        width: 300,
        height: 155,
        borderRadius: 10,
        marginTop: 15,
    },
    kotak2: {
        width: 300,
        height: 155,
        borderRadius: 10,
        marginTop: -128,
        zIndex: -1,
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        marginTop: 24,
        marginLeft: 10,
    },
    icon: {
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
})






// export default function Home({navigation}) {
//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: 'white',}}>

//       <View style={{ flex: 1, flexDirection: 'row', }}>
//         <View style={{ }}>
//           <Text style={{ fontSize: 15, fontWeight: '900', color: 'black', marginLeft: 50, marginTop: 70,  }}>Assalamualaikum.Wr.Wb</Text>
//             <Text style={{ fontSize: 25, fontWeight: '900', color: 'black', marginLeft: 50, marginTop: 1, }}>KUMPULAN LIRIK</Text>
//             <Text style={{ fontSize: 30, fontWeight: '900', color: '#168814', marginLeft: 50 }}>SHOLAWAT NABI</Text>
//         </View>

//             {/* gambar */}
//             <View style={{ alignContent: 'center', marginTop: 60, marginLeft: 1, }}>
//               <Image source={require('./src/img/depan.png')} style={{ height: 100, }}/>
                   
//             </View>   
//         </View>
      

//       {/* lirik 1 */}
//       <TouchableOpacity>
//           <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10, }}>
//             <View style={{ width: 291, height: 152, backgroundColor: 'black', borderRadius: 10,}}>
//             </View>
//         </View>
//       </TouchableOpacity>

//       {/* lirik 2 */}
//       <TouchableOpacity>
//           <View style={{ backgroundColor: 'black', height: 152, width: 291, marginTop: 25, marginLeft: 50, borderRadius: 10,}}>
//         </View>
//       </TouchableOpacity>

//       {/* lirik 3 */}
//       <TouchableOpacity>
//           <View style={{ backgroundColor: 'black', height: 152, width: 291, marginTop: 25, marginLeft: 50, borderRadius: 10,}}>
//         </View>
//       </TouchableOpacity>

    
//       <TouchableOpacity>
//         <Image source={require('./src/img/i.png')} style={{ height: 40, marginLeft: 175, marginTop: 25}}/>
//       </TouchableOpacity>
      
//       </ScrollView>

//   )
// }   


// import React from 'react'
// import { View, Text, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native'

// export default function Home() {
//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: 'white',}}>

//       <View style={{ flex: 1, flexDirection: 'row', }}>
//         <View style={{ }}>
//           <Text style={{ fontSize: 15, fontWeight: '900', color: 'black', marginLeft: 50, marginTop: 70,  }}>Assalamualaikum.Wr.Wb</Text>
//             <Text style={{ fontSize: 25, fontWeight: '900', color: 'black', marginLeft: 50, marginTop: 1, }}>KUMPULAN LIRIK</Text>
//             <Text style={{ fontSize: 30, fontWeight: '900', color: '#168814', marginLeft: 50 }}>SHOLAWAT NABI</Text>
//         </View>

//             {/* gambar */}
//             <View style={{ alignContent: 'center', marginTop: 60, marginLeft: 1, }}>
//               <Image source={require('./src/img/depan.png')} style={{ height: 100, }}/>
                   
//             </View>   
//         </View>
      

//       {/* lirik 1 */}
//       <TouchableOpacity>
//           <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 10, }}>
//             <View style={{ width: 291, height: 152, backgroundColor: 'black', borderRadius: 10,}}>
//             </View>
//         </View>
//       </TouchableOpacity>

//       {/* lirik 2 */}
//       <TouchableOpacity>
//           <View style={{ backgroundColor: 'black', height: 152, width: 291, marginTop: 25, marginLeft: 50, borderRadius: 10,}}>
//         </View>
//       </TouchableOpacity>

//       {/* lirik 3 */}
//       <TouchableOpacity>
//           <View style={{ backgroundColor: 'black', height: 152, width: 291, marginTop: 25, marginLeft: 50, borderRadius: 10,}}>
//         </View>
//       </TouchableOpacity>

    
//       <TouchableOpacity>
//         <Image source={require('./src/img/i.png')} style={{ height: 40, marginLeft: 175, marginTop: 25}}/>
//       </TouchableOpacity>
      
//       </ScrollView>

//   )
// }