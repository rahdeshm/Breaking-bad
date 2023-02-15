import React,{useState} from "react";

const SearchBar=({setQuery})=>{
    const [text,setText]=useState('')

    const handleChange=(e)=>{
       setText(e.target.value);
       setQuery(e.target.value)
    }
   console.log(text);
    return(
      <div>
        <section>
            <form>
                <input
                  className="form-control"
                  type='text'
                  placeholder="search character"
                  autoFocus
                  id='search'
                  name="search"
                  value={text}
                  onChange={(e)=>handleChange(e)}
                ></input>
            </form>
        </section>
      </div>
    )
}

export default SearchBar