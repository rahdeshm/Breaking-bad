import React, { useEffect, useState } from "react";



function Filte() {

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

  const [filterList, setFilterList] = useState([]);
 useEffect(()=>{
   setFilterList(list)
 },[])
  const handleSearch = (event) => {

    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
  
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    console.log('hh',filteredValues,list);
    setFilterList(filteredValues);
  };
  return (
    <div className="app">
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div> //Display each item
        ))}
    </div>
  );
}

export default Filte;