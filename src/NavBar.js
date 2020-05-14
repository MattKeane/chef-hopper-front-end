import React from "react"
import { Menu } from "semantic-ui-react"

export default function NavBar(props) {

	const backToSearch = () => {
		props.setRecipeToShow(-1)
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
				props.loggedInUser
				?
				<Menu.Menu position="right">
					<Menu.Item>
						Log Out
					</Menu.Item>
				</Menu.Menu>
				:
				<Menu.Menu position="right">
					<Menu.Item>
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