import React from "react"
import { Menu } from "semantic-ui-react"
import RecipeActions from "./RecipeActions"


export default function NavBar(props) {

	const backToSearch = () => {
		props.setRecipeToShow(-1)
	}

	const openLogInModal = () => {
		props.setLoggingIn(true)	
	}

	const openRegisterModal = () => {
		props.setRegistering(true)
	}

	const logOut = async () => {
		try {
			const url = process.env.REACT_APP_API_URL + "/api/v1/auth/logout/"
			await fetch(url)
			props.setCurrentUser(false)
			props.setSavedRecipes([])
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
				/>
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
				</Menu.Menu>
			}
		</Menu>
	)
}