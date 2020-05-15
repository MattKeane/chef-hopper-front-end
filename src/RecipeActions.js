import React from "react"
import { Menu } from "semantic-ui-react"
import SaveToggleButton from "./SaveToggleButton"

export default function RecipeActions(props) {

	const backToSearch = () => {
		props.setRecipeToShow(-1)
	}

	return (
		<React.Fragment>
			<Menu.Item
				onClick={backToSearch}
			>
				Back to Search
			</Menu.Item>
			{
				props.currentUser
				&&
				<SaveToggleButton
					currentRecipeIsSaved={props.currentRecipeIsSaved} 
				/>
			}
		</React.Fragment>
	)
}