import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Image
} from "react-native";
import { withNavigation } from "react-navigation";

const ResultList = ({ result, header, navigation }) => {
    if(result){
        return (
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.text}>{header}</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={result => result.id}
                horizontal
                data={result}
                renderItem={({ item }) => {
                  return (
                    <View style={{ marginLeft: 8, marginTop: 10 }}>                               
                      <TouchableOpacity onPress={() => navigation.navigate("Detail",{id:item.id})}>
                        <Image style={styles.img} source={{ uri: item.image_url }} />
                        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                        <Text>City : {item.city}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
          );
    }else{
        return(<View style={{justifyContent:'center'}}><Text>Loading</Text></View>)
    }
  
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5
  },
  img: {
    width: 270,
    height: 170,
    borderRadius: 4
  }
});

export default withNavigation(ResultList);
