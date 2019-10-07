import React, { useEffect, useState } from "react";
import { View, Text,Image,StyleSheet } from "react-native";
import SearchById from "../api/SearchById";
const ResultDetail = props => {
  const id = props.navigation.getParam("id");
  const [result, setResult] = useState();
  const Search = async () => {
    const data = await SearchById(id);
    setResult(data);
    console.log(data);
  };
  useEffect(() => {
    Search();
  }, []);

  if(result){
    return (
        <View style={styles.container}>
          <Text style={{fontSize:25,fontWeight:'bold'}}>{result.name}</Text>
          <Image style={{width:300,height:200}} source={{uri:result.image_url}}/>
          <Text style={{fontSize:20}}>City : {result.city}</Text>
          <Text style={{fontSize:20}}>Phone : {result.phone}</Text>
          <Text style={{fontSize:20}}>Area : {result.area}</Text>
          <Text style={{fontSize:20}}>Post Code : {result.postal_code}</Text>
        </View>
      );
  }else{
      return (<View style={{justifyContent:'center'}}><Text>Loading</Text></View>);
  }
  
};

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        alignItems:'center',
        
    }
})
export default ResultDetail;
