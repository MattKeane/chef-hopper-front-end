import React, { useState } from 'react';
import './App.css';
import SearchView from "./SearchView"
import RecipeView from "./RecipeView"

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
      {
        recipeToShow === -1
        ?
        <SearchView
          recipes={recipes}
          getRecipes={getRecipes}
          showRecipe={setRecipeToShow}
        />
        :
        <RecipeView
          recipe={recipes[recipeToShow]}
        />
      }
    </div>
  );
}

export default App;
