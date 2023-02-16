import React,{useState} from "react";

const SearchBar=({setQuery,items,setItems})=>{
    const [text,setText]=useState('')

    const handleChange=(e)=>{
       setText(e.target.value);
       setQuery(e.target.value)
      // if (e.target.value === "") {
      //   setItems(items);
      //   return;
      // }
      //  console.log('handlechange called');
      //  const list=[...items];
      //  const filteredData=list.filter(item=>{
      //   return item.name.toLowerCase().includes(e.target.value.toLowerCase())
      //  })
      //  setItems(filteredData);
    }
   
    return(

        <section className="search">
            <form>
                <input className='inputbox'
                
                  type='text'
                  placeholder="search character"
                  autoFocus
                  id='search'
                  name="search"
                  value={text}
                  onChange={handleChange}
                ></input>
            </form>
        </section>
  
    )
}

export default SearchBar