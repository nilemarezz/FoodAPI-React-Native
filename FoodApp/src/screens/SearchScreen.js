import React, { useState, useEffect } from "react";
import { View, Text , ScrollView} from "react-native";
import SearchBar from "../Components/Searchbar";
import SearchItem from "../api/SearchItem";
import ResultList from "../Components/ResultList";
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
  const defaultItem = async () => {
    const data = await SearchItem("Apple");
    setResult(data.restaurants);
  };
  const filterPrice = (getPrice) =>{
      return result.filter(result => {
          return result.price === getPrice
      })
  }
  useEffect(() => {
    defaultItem();
  }, []);
  return (
    <View style={{marginLeft:15,flex:1}}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => onTermSubmit()}
      />
      {errMsg ? <Text>Something went wrong</Text> : null}
      
      <ScrollView>
      <ResultList header="Cost Effective" result={filterPrice(2)}/>
      <ResultList header="Big Price" result={filterPrice(3)}/>

      <ResultList header="Big Spender" result={filterPrice(4)}/>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
