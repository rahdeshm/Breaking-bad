
import React,{useState,useEffect} from 'react';
import CharacterList from './components/CharacterList';
import Header from './components/NavBar';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import Spinner from './components/Spinner';
import Filte from './components/Filte';


function App() {
   const [items,setItems]=useState([]);
   const[filter,setFilter]=useState(items)
   const [loading,setLoading]=useState(true); 
   const [query,setQuery]=useState('');


   useEffect(()=>{
     const fetchItems=async()=>{
      const response=await axios.get("./data.json");
      setItems(response.data);
      setFilter(response.data)
      setLoading(false)
      setLoading(false)  
     }  
    //  console.log(items,'effect');
     fetchItems()
   },[])

   useEffect(()=>{
    if(query.length===0){
       setFilter(items)
       return
     } 
    const result= filter.filter((item)=>{
      return item.name.toLowerCase().includes(query.toLowerCase())
       })
      setFilter(result)
     },[query])
  
  return (

    <div className="App">
      <Header/>
      <SearchBar setItems={(items)=>setItems(items)} items={items} setQuery={(query)=>setQuery(query)}/>
       {
         loading? <Spinner/>:(
      <CharacterList items={filter}/>)
    }
    {/* <Filte/> */}
    </div>
  );
}

export default App;
