const SearchItem = async (term) =>{
    const response = await fetch(`http://opentable.herokuapp.com/api/restaurants?name=${term}`);
    const data = await response.json() 
    return data;
}

export default SearchItem