import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Food_Recipes from "./Components/Food_Recipes";
import Home from "./NavPages/Home";
import Favourites from "./NavPages/Favourite";
import RecipeDetail from "./NavPages/RecipeDetail";

function App() {

  const [favlist,setFavlist]=useState([]);
  return (
    <Router>  
      <div>
        <Routes>
          <Route path="/" element={<Food_Recipes />} />
          <Route path="/Favorites" element={<Favourites favlist={favlist} />} />
        <Route path="/RecipeDetail/:id" element={<RecipeDetail favlist={favlist} setFavList={setFavlist}/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
