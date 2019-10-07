import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  Image
} from "react-native";

const ResultList = ({ result, header }) => {
  return (
    <View style={{marginBottom:15}}>
     
      <FlatList
      showsHorizontalScrollIndicator = {false}
        keyExtractor={result => result.id}
        horizontal
        data={result}
        renderItem={({ item }) => {
          return (
            <View style={{marginLeft:8,marginTop:10}}>
              <Image style={styles.img} source={{ uri: item.image_url }} />
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              <Text>City : {item.city}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom:5
  },
  img: {
    width: 270,
    height: 170,
    borderRadius: 4
  }
});

export default ResultList;
