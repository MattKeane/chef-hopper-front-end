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
		</Menu>
	)
}