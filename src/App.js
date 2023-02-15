import './App.css';
import React,{useState,useEffect} from 'react';
import CharacterList from './components/CharacterList';
import Header from './components/NavBar';
import SearchBar from './components/SearchBar';
import axios from './components/api'

function App() {
   const [items,setItems]=useState([]);
   const [loading,setLoading]=useState(true); 
   const [query,setQuery]=useState('');


   useEffect(()=>{
     const fetchItems=async()=>{
      const response=axios.get(`/characters`);
      console.log(response);
     }  

     fetchItems()

   },[])
  return (
    <div className="App">
      <h2>hi</h2>
      <Header/>
      <SearchBar setQuery={(query)=>setQuery(query)}/>

      <CharacterList/>
      
    </div>
  );
}

export default App;
