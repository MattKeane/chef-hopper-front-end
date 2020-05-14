import React, { useState } from 'react';
import './App.css';
import SearchView from "./SearchView"
import RecipeView from "./RecipeView"
import NavBar from "./NavBar"
import LogInModal from "./LogInModal"


function App() {
  const [loading, setLoading] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [recipeToShow, setRecipeToShow] = useState(-1)
  const [message, setMessage] = useState("")
  const [currentUser, setCurrentUser] = useState(false)
  const [loggingIn, setLoggingIn] = useState(false)
  const [registering, setRegistering] = useState(false)

  const getRecipes = async (searchTerm) => {
    try {
      setMessage("")
      setLoading(true)
      const url = process.env.REACT_APP_API_URL + "/api/v1/recipes/search/"
      const everySpace = new RegExp(/\s/, "g")
      const apiSearchTerm = searchTerm.replace(everySpace, "+")
      const searchResponse = await fetch(url + apiSearchTerm)
      if (searchResponse.status === 200 || searchResponse.status === 201) {
        const searchJson = await searchResponse.json()
        if (searchJson.data.length > 0) {
          setRecipes(searchJson.data)
        } else {
          console.log("No data")
          setMessage(searchJson.message)
        }
      }     
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <NavBar
        recipeToShow={recipeToShow}
        setRecipeToShow={setRecipeToShow}
        currentUser={currentUser}
        setLoggingIn={setLoggingIn}
        />
      <h1>Chef Hopper</h1>
      {
        recipeToShow === -1
        ?
        <SearchView
          recipes={recipes}
          getRecipes={getRecipes}
          showRecipe={setRecipeToShow}
          message={message}
          loading={loading}
        />
        :
        <RecipeView
          recipe={recipes[recipeToShow]}
        />
      }
      {
        loggingIn
        &&
        <LogInModal
          setLoggingIn={setLoggingIn}
          setCurrentUser={setCurrentUser}
        />
      }
    </div>
  );
}

export default App;
