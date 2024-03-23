import React, { useState } from "react";
import Products from "./Products";
import "./page.css"

function Main() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [searchClicked,setSearchClicked] = useState(false);

  const app_id = "a5160b71";
  const app_key = "0f9fb0f0d30a4546991d807f2068dce3";

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchClicked(true);
    if (search.trim()!==""){    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${app_id}&app_key=${app_key}&from=0&to=30`
    )
      .then((response) => response.json())
      .then((data) => setData(data.hits))
      .catch((error)=>console.error("Error fetching data",error));
    }
  };
  return (
    <div>
      <center><h1 className="main--logo">Spice</h1></center>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
        <button type="button" onClick={submitHandler}>Search</button>
      </form>
      {searchClicked && data.length>=1 ? <Products data = {data} />:null}
    </div>
  );
}

export default Main;
