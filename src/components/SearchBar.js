import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = ({onPressDelete, onPressSearch, placeholder, value, onChangeText}) => {
  const [onFocus, setOnFocus] = React.useState(false)
  const handleOnFocus = () => {
    setOnFocus(true)
  }
  const handleOnBlur = () => {
    setOnFocus(false)
  }
  return (
  <View style={styles.fieldContainer}> 
  <View style={{...styles.inputContainer, borderColor: onFocus ? '#168814' : 'd0cfcf',}}>
        <TouchableOpacity style={styles.buttonContainer}
        onPress={onFocus ? onPressDelete : onPressSearch}>
            <Icon 
            name={onFocus ? 'close-circle' : "search"} 
            color= {onFocus ? '#168814' : '#d0cfcf' }
            size= {30} />
        </TouchableOpacity>
        <TextInput
        value={value}
        style={styles.textInput} 
        placeholder="Cari Sesuatu..." 
        onBlur={handleOnBlur} 
        onFocus={handleOnFocus}
        onChangeText={onChangeText} />
  </View>
  </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    fieldContainer: {
        width: 350,
        paddingVertical: 5,
        marginVertical: 10,
    },
    inputContainer: {
        borderWidth: 1.25,
        height: 50,
        borderRadius: 20,
        // borderColor: '#d0cfcf',
        flexDirection: 'row-reverse',
    },
    buttonContainer: {
        alignItems:'center',
        justifyContent:'center',
        paddingRight: 10,
    },
    textInput: {
        flex: 1,
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 10,
    }
})