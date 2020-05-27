import React from "react"
import { Menu } from "semantic-ui-react"
import RecipeActions from "./RecipeActions"
import DarkModeToggle from "./DarkModeToggle"

// This component is the navigation bar that appears on top of the page
// Menu components render dynamically

export default function NavBar(props) {

	// Changes loggingIn in the state of app.js to true

	const openLogInModal = () => {
		props.setLoggingIn(true)
	}

	// Changes registering in the state of app.js to true

	const openRegisterModal = () => {
		props.setRegistering(true)
	}

	// ends session on both front and back end

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
				// Until noted otherwise, the following components
				// Render on the left side of the navigation bar

				// recipe actions are only visible
				// when the user is looking at a recipe

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

				// Saved recipes can only be accessed when a
				// user is logged in

				props.currentUser
				&&
				<Menu.Item
					onClick={ () => {props.showSavedRecipes()}}
				>
					Saved Recipes
				</Menu.Item>
			}
			{
				// The rest of the components render on the right
				// side of the navtigation bar

				// All these actions are account related, except DarkModeToggle

				// LogOut button is only available when a user is logged in

				props.currentUser
				?
				<Menu.Menu position="right">
					<Menu.Item
						onClick={logOut}
					>
						Log Out
					</Menu.Item>
					<DarkModeToggle
						setDarkMode={props.setDarkMode}
					/>
				</Menu.Menu>
				:

				// LogIn/Registration is only avaiable when no user is logged in

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
						setDarkMode={props.setDarkMode}
					/>
				</Menu.Menu>
			}
		</Menu>
	)
}
