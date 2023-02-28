import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../../components/SearchBar';

const semuaLirik = [
  {
    no: 1,
    title: 'Ya Robbi Sholli'
  },
  {
    no: 2,
    title: 'Ya Rasulallah'
  },
  {
    no: 3,
    title: 'Assalamualaik'
  },
  {
    no: 4,
    title: 'Isyfa`lana'
  },
  {
    no: 5,
    title: 'Ya Sayyidi'
  },
  {
    no: 6,
    title: 'Nurul Mushtofa'
  },
  {
    no: 7,
    title: 'Ahmad Ya Habibi'
  },
  {
    no: 8,
    title: 'Sholawat Jibril'
  },
  {
    no: 9,
    title: 'Bii Maulidil Hadi'
  },
  {
    no: 10,
    title: 'Mughrom'
  },
  {
    no: 11,
    title: 'Shollu Ala Nuril'
  },
  {
    no: 12,
    title: 'Sholatun'
  },
  {
    no: 13,
    title: 'Ya Ramadhon'
  },
  {
    no: 14,
    title: 'Ya Robbi Sallimna'
  },
  {
    no: 15,
    title: 'Bilqurani'
  },
  {
    no: 16,
    title: 'Burdah'
  },
  {
    no: 17,
    title: 'Ya Habibal Qolbi'
  },
  {
    no: 18,
    title: 'Roqqot Aina'
  },
  {
    no: 19,
    title: 'Ya Maulidal Mushtofa'
  },
  {
    no: 20,
    title: 'Ya Habibana Ali'
  },
];


const LirikLatin = ({ navigation }) => {
  const [lirik, setLirik] = useState(semuaLirik);
  
  const [query, setQuery] = useState('');

  useEffect(() => {
    setLirik(semuaLirik.filter((lirik) => {
      return lirik.title.toLowerCase().includes(query.toLowerCase());
    }))
  }, [query]);

  return (
    <>
            <View style={{ width: 400, height: 72, backgroundColor: '#168814',}}>
            <Text style={{ fontSize: 20, fontWeight: '900', color: 'white', marginLeft: 15, marginTop: 15,  }}>LIRIK{'\n'}
            SHOLAWAT LATIN</Text> 
        </View>

        <View style={styles.container}>
          <SearchBar 
          value={query}
          placeholder="Lakukan pencarian di sini" 
          onChangeText={text => setQuery(text)}
          onPressDelete={() => setQuery('')}
        />
          <Text>Ini adalah hasil pencarian: {query}</Text>
        </View>

        <FlatList
          data={lirik}
          keyExtractor={(index) => {index}}
          renderItem={({item}) => {
            return (
            <TouchableOpacity onPress={() => {navigation.navigate('detailLirik', { lirikId: item.no, lirikKategori: 'latin' })}}>  
              <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 8, }}>
                  <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>{`${item.no}. ${item.title}`}</Text>
                  </View>
              </View>
            </TouchableOpacity> 
            )
          }}
        />


        </>

            
      )
}

    export default LirikLatin

    const styles = StyleSheet.create({
        container: {
          alignItems: 'center',
          justifyContent: 'center',
    }
})
















      {/* <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: -15, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>1.Ya Robbi Sholli</Text> 
             </View>
        </View>
      </TouchableOpacity>  */}

      {/* <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>2.Ya Rasulallah</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>3.Assalamualaik</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>4.Isyfa'lana</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>5.Ya Sayyidi</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>6.Nurul Mushtofa</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>7.Ahmad Ya Habibi</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>8.Sholawat Jibril</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>9.Bii Maulidil Hadi</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>10.Mughrom</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>11.Shollu Ala Nuril</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>12.Sholatun</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>13.Ya Ramadhon</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>14.Ya Robbi Sallimna</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>15.Bilqurani</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>16.Burdah</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>17.Ya Habibal Qolbi</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>18.Roqqot Aina</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>19.Ya Maulidal Mushtofa</Text> 
             </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity>    
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 5, }}>
             <View style={{ width: 320, height: 50, backgroundColor: '#168814', borderRadius: 10,}}>
             <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: 17, marginTop: 13,  }}>20.Ya Habibana Ali</Text> 
             </View>
        </View>
      </TouchableOpacity>  */}


