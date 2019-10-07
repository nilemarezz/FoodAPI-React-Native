import React, { useState } from "react";
import { View, Text } from "react-native";
import SearchBar from "../Components/Searchbar";
import SearchItem from "../api/SearchItem";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [errMsg, seterrMsg] = useState("");

  const onTermSubmit = async () => {
    try {
      const data = await SearchItem(term);
      setResult(data.restaurants);
      setTerm("");
    } catch (err) {
      seterrMsg(err);
    }
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => onTermSubmit()}
      />
      {errMsg ? <Text>Something went wrong</Text> : null}
      {result.length === 0? <Text>Not Found the Resturant</Text> : <Text>Total find: {result.length}</Text>}
      
    </View>
  );
};

export default SearchScreen;
