import React, { useState } from 'react';
import './App.css';
import SearchView from "./SearchView"
import RecipeView from "./RecipeView"
import NavBar from "./NavBar"
import LogInModal from "./LogInModal"
import RegisterModal from "./RegisterModal"


function App() {
  const [loading, setLoading] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [recipeToShow, setRecipeToShow] = useState(-1)
  const [message, setMessage] = useState("")
  const [currentUser, setCurrentUser] = useState(false)
  const [loggingIn, setLoggingIn] = useState(false)
  const [registering, setRegistering] = useState(false)
  const [savedRecipes, setSavedRecipes] = useState([])
  const [currentRecipeIsSaved, setCurrentRecipeIsSaved] = useState(false)

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

  const checkForSavedRecipe = (indexOfRecipe) => {
    if (indexOfRecipe !== -1) {
      const savedRecipeIds = []
      for (let i = 0; i < {savedRecipes}.length; i++) {
        savedRecipeIds.push(savedRecipes[i].id)
      }
      if (savedRecipeIds.includes(recipes[indexOfRecipe].id)) {
        setCurrentRecipeIsSaved(true)
      } else {
        setCurrentRecipeIsSaved(false)
      }
    } else {
      setCurrentRecipeIsSaved(false)
    }
  }

  const saveRecipe = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/recipes/save/" + recipes[recipeToShow].id
      const saveRecipeResponse = await fetch(url, {credentials: "include"})
      const saveRecipeJson = await saveRecipeResponse.json()
      console.log(saveRecipeJson)
      if (saveRecipeJson.status === 200) {
        setSavedRecipes([recipes[recipeToShow], ...savedRecipes])
        setCurrentRecipeIsSaved(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const getSavedRecipes = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/recipes/saved/"
      const getSavedRecipesResponse = await fetch(url, {credentials: "include"})
      const getSavedRecipesJson = await getSavedRecipesResponse.json()
      console.log(getSavedRecipesJson)
      if (getSavedRecipesJson.status === 200) {
        setRecipes(getSavedRecipesJson.data)
      }
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
        setCurrentUser={setCurrentUser}
        setRegistering={setRegistering}
        setSavedRecipes={setSavedRecipes}
        currentRecipeIsSaved={currentRecipeIsSaved}
        saveRecipe={saveRecipe}
        getSavedRecipes={getSavedRecipes}
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
          checkForSavedRecipe={checkForSavedRecipe}        
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
          setSavedRecipes={setSavedRecipes}
        />
      }
      {
        registering
        &&
        <RegisterModal
          setRegistering={setRegistering}
          setCurrentUser={setCurrentUser}
        />
      }
    </div>
  );
}

export default App;
