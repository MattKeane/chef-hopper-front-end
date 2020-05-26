import React, { useState } from 'react';
import './App.css';
import SearchView from "./SearchView"
import RecipeView from "./RecipeView"
import NavBar from "./NavBar"
import LogInModal from "./LogInModal"
import RegisterModal from "./RegisterModal"
import ThemeContext from "./ThemeContext"

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
  const [darkMode, setDarkMode] = useState(false)

  const pickTheme = () => {
    if (darkMode) {
      return "dark"
    }
    return "light"
  }

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
      for (let i = 0; i < savedRecipes.length; i++) {
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
      const saveRecipeResponse = await fetch(url, {
        credentials: "include",
        method: "POST"
      })
      const saveRecipeJson = await saveRecipeResponse.json()
      if (saveRecipeJson.status === 201) {
        setSavedRecipes([recipes[recipeToShow], ...savedRecipes])
        setCurrentRecipeIsSaved(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const getSavedRecipes = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/users/saved_recipes"
      const getSavedRecipesResponse = await fetch(url, {
        credentials: "include",
        method: "GET"})
      const getSavedRecipesJson = await getSavedRecipesResponse.json()
      if (getSavedRecipesJson.status === 200) {
        setSavedRecipes(getSavedRecipesJson.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const logIn = async (username, password) => {
    try {
      setMessage("")
      const url = process.env.REACT_APP_API_URL + "/api/v1/users/login"
      const payload = {
        username: username,
        password: password
      }
      const logInResponse = await fetch(url, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (logInResponse.status === 200) {
        const logInJson = await logInResponse.json()
        setCurrentUser(logInJson)
        getSavedRecipes()
        setRecipeToShow(-1)
        setLoggingIn(false)
      } else {
        setMessage("Invalid username or password")
      }
    } catch (err) {
      console.log(err)
    }
  }

  const showSavedRecipes = () => {
    setRecipeToShow(-1)
    setRecipes(savedRecipes)
  }

  const showRecipe = (recipeIndex) => {
    setRecipeToShow(recipeIndex)
    checkForSavedRecipe(recipeIndex)
  }

  const deleteSavedRecipe = async () => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/users/saved_recipes/" + recipes[recipeToShow].id
    const deleteRecipeResponse = await fetch(url, {
      credentials: "include",
      method: "DELETE"
    })
    const deleteRecipeJson = await deleteRecipeResponse.json()
    if (deleteRecipeJson.status === 200) {
      let updatedRecipes = recipes
      updatedRecipes.splice(recipeToShow, 1)
      setRecipeToShow(-1)
      setRecipes(updatedRecipes)
    }
  }

  const registerUser = async (username, email, password, verifyPassword) => {
    if (password === verifyPassword) {
      try {
        const url = process.env.REACT_APP_API_URL + "/api/v1/users/register"
        const payload = {
          credentials: "include",
          username: username,
          email: email,
          password: password
        }
        const registerResponse = await fetch(url, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const registerJson = await registerResponse.json()
        if (registerJson.status === 201) {
          setCurrentUser(registerJson.data)
          setRegistering(false)
        } else {
          setMessage(registerJson.message)
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      setMessage("Passwords must match")
    }
  }

  return (
    <div className="App">
      // <ThemeContext.provider value={pickTheme}>
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
          showSavedRecipes={showSavedRecipes}
          deleteSavedRecipe={deleteSavedRecipe}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          />
          <img className="header" src="header.png" alt="Chef Hopper" />
          {
            recipeToShow === -1
            ?
            <SearchView
            recipes={recipes}
            getRecipes={getRecipes}
            showRecipe={showRecipe}
            message={message}
            loading={loading}
            checkForSavedRecipe={checkForSavedRecipe}
            darkMode={darkMode}
            />
            :
            <RecipeView
            recipe={recipes[recipeToShow]}
            darkMode={darkMode}
            />
          }
          {
            loggingIn
            &&
            <LogInModal
            setLoggingIn={setLoggingIn}
            setCurrentUser={setCurrentUser}
            setSavedRecipes={setSavedRecipes}
            logIn={logIn}
            message={message}
            />
          }
          {
            registering
            &&
            <RegisterModal
            message={message}
            registerUser={registerUser}
            setRegistering={setRegistering}
            />
          }
          // </ThemeContext.provider>
        </div>
  );
}

export default App;
