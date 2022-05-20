import './App.css';
import Header from './components/Header';
import React, { useEffect, useState } from "react";
import EmojiContainer from './components/EmojiContainer';


const url = "https://emojihub.herokuapp.com/api/all/category_"




function App() {
  const categoryList =
    [
      "smileys_and_people",
      "animals_and_nature",
      "food_and_drink",
      "travel_and_places",
      "activities",
      "objects",
      "symbols",
    ]

  const [category, setCategory] = useState(categoryList[0]);
  const [data, setData] = useState([]);




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url + category);
        const json = await response.json();
        setData(json)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

  }, [category])


  return (
    <div className="App">
      <Header category={category} setCategory={(e) => setCategory(e)} categoryList={categoryList} />
      <EmojiContainer data={data} />
    </div>
  );
}

export default App;
