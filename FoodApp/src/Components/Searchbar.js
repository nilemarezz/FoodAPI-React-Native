import React from 'react'
import {View,TextInput,StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'
const Searchbar = (props) =>{
    return (
        <View style={styles.textInput}>
            <Feather name="search" style={styles.iconStyle} size={30}/>
            <TextInput style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}
            value={props.term}
            onChangeText={(newTern=>props.onTermChange(newTern))}
            placeholder='Search'
            onEndEditing={()=> props.onTermSubmit()}/>
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