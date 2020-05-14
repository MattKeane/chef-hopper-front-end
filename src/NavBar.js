import React from "react"
import { Menu } from "semantic-ui-react"

export default function NavBar(props) {

	const backToSearch = () => {
		props.setRecipeToShow(-1)
	}

	const openLogInModal = () => {
		props.setLoggingIn(true)	
	}

	return (
		<Menu>
			{
				props.recipeToShow !== -1
				&&
				<Menu.Item
					onClick={backToSearch}
				>
					Back to Search
				</Menu.Item>
			}
			{
				props.currentUser
				?
				<Menu.Menu position="right">
					<Menu.Item>
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
					<Menu.Item>
						Register
					</Menu.Item>
				</Menu.Menu>
			}
		</Menu>
	)
}