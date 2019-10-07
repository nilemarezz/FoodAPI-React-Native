const SearchById = async (id) =>{
    const response = await fetch(`http://opentable.herokuapp.com/api/restaurants/${id}`);
    const data = await response.json() 
    return data;
}

export default SearchById