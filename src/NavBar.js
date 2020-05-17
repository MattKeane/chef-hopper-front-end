import React from "react"
import { Menu, Icon } from "semantic-ui-react"
import RecipeActions from "./RecipeActions"
import DarkModeToggle from "./DarkModeToggle"


export default function NavBar(props) {

	const openLogInModal = () => {
		props.setLoggingIn(true)	
	}

	const openRegisterModal = () => {
		props.setRegistering(true)
	}

	const logOut = async () => {
		try {
			const url = process.env.REACT_APP_API_URL + "/api/v1/users/logout"
			await fetch(url, {credentials: "include"})
			props.setCurrentUser(false)
			props.setSavedRecipes([])
			props.setRecipeToShow(-1)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<Menu>
			{
				props.recipeToShow !== -1
				&&
				<RecipeActions
					setRecipeToShow={props.setRecipeToShow}
					currentRecipeIsSaved={props.currentRecipeIsSaved}
					currentUser={props.currentUser}
					saveRecipe={props.saveRecipe}
					deleteSavedRecipe={props.deleteSavedRecipe}
				/>
			}
			{
				props.currentUser
				&&
				<Menu.Item
					onClick={ () => {props.showSavedRecipes()}}
				>
					Saved Recipes 
				</Menu.Item>
			}
			{
				props.currentUser
				?
				<Menu.Menu position="right">
					<Menu.Item
						onClick={logOut}
					>
						Log Out
					</Menu.Item>
					<DarkModeToggle
						darkMode={props.darkMode}
						setDarkMode={props.setDarkMode}
					/>
				</Menu.Menu>
				:
				<Menu.Menu position="right">
					<Menu.Item
						onClick={openLogInModal}
					>
						Log In
					</Menu.Item>
					<Menu.Item
						onClick={openRegisterModal}
					>
						Register
					</Menu.Item>
					<DarkModeToggle
						darkMode={props.darkMode}
						setDarkMode={props.setDarkMode}
					/>
				</Menu.Menu>
			}
		</Menu>
	)
}