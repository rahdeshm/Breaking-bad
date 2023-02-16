import React from "react";
import CharacterListItems from "./CharacterListItems";
import './CharacterList.scss'

const CharacterList=({items})=>{
    //  console.log(items);
    return(
        <section className="cards">
    {
        items.map(item=>{
            // console.log(item);
        return   <CharacterListItems item={item}/>
        })
    }
    </section>
    )

}

export default CharacterList