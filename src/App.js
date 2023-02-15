import './App.css';
import React,{useState,useEffect} from 'react';
import CharacterList from './components/CharacterList';
import Header from './components/NavBar';
import SearchBar from './components/SearchBar';
import axios from 'axios';


function App() {
   const [items,setItems]=useState({});
   const [loading,setLoading]=useState(true); 
   const [query,setQuery]=useState('');


   useEffect(()=>{
     const fetchItems=async()=>{
      const response=await axios.get("./data.json");
      setItems(response.data[0]);
      setLoading(false)
     }  

     fetchItems()

   },[query])
   console.log(items);
  return (
    <div className="App">
     {items && <h2>ho+{items.items}</h2>}
      <Header/>
      <SearchBar setQuery={(query)=>setQuery(query)}/>

      <CharacterList/>
      
    </div>
  );
}

export default App;
