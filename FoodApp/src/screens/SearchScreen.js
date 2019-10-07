import React, { useState } from "react";
import { View, Text } from "react-native";
import SearchBar from "../Components/Searchbar";


const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const onTermSubmit = ()=>{
        console.log('Submit Form')
    }
  return (
    <View>
      <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} onTermSubmit={()=>onTermSubmit()}/>
      <Text>{term}</Text>
    </View>
  );
};

export default SearchScreen;
