import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import SearchBar from "../Components/Searchbar";
import SearchItem from "../api/SearchItem";
import ResultList from "../Components/ResultList";
const SearchScreen = (props) => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [errMsg, seterrMsg] = useState("");

  const onTermSubmit = async props => {
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
  const filterPrice = getPrice => {
    return result.filter(result => {
      return result.price === getPrice;
    });
  };
  useEffect(() => {
    defaultItem();
  }, []);
  return (
    <View style={{ marginLeft: 15, flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => onTermSubmit()}
      />
      {errMsg ? <Text>Something went wrong</Text> : null}

      <ScrollView>
        <ResultList
          header="Cost Effective"
          result={filterPrice(2)}
          navigation={props.navigation}
        />
        <ResultList
          header="Big Price"
          result={filterPrice(3)}
          navigation={props.navigation}
        />

        <ResultList
          header="Big Spender"
          result={filterPrice(4)}
          navigation={props.navigation}
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
