import React, { useState } from 'react';
import './App.css';
import SearchView from "./SearchView"

function App() {
  const [loading, setLoading] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [recipeToShow, setRecipeToShow] = useState(-1)

  const getRecipes = async (searchTerm) => {
    try {
      setLoading(true)
      const url = process.env.REACT_APP_API_URL + "/api/v1/recipes/search/"
      const everySpace = new RegExp(/\s/, "g")
      const apiSearchTerm = searchTerm.replace(everySpace, "+")
      const searchResponse = await fetch(url + apiSearchTerm)
      if (searchResponse.status === 200) {
        const searchJson = await searchResponse.json()
        setRecipes(searchJson.data)
      }     
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <SearchView
        recipes={recipes}
        getRecipes={getRecipes}
      />
    </div>
  );
}

export default App;
