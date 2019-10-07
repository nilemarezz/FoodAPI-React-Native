import React from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'
import {Feather, FontAwesome} from '@expo/vector-icons'
const Searchbar = () =>{
    return (
        <View style={styles.textInput}>
            <Feather name="search" style={styles.iconStyle} size={30}/>
            <TextInput style={styles.input} placeholder='Search'/>
        </View>
    )
}
const styles = StyleSheet.create({
    textInput : {
        backgroundColor:'#F0EEEE',
        height:40,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginTop:15
    },
    input:{
       fontSize:18,
        flex:1
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
})
export default Searchbar