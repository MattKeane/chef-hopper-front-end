import React from "react"
import { Menu } from "semantic-ui-react"

export default function SaveToggleButton(props) {


	return (
		<React.Fragment>
			{
				props.currentRecipeIsSaved
				?
				<Menu.Item
					onClick={() => {props.deleteSavedRecipe()}}
				>
					Remove Saved Recipe
				</Menu.Item>
				:
				<Menu.Item
					onClick={() => {props.saveRecipe()}}
				>
					Save Recipe
				</Menu.Item>
			}
		</React.Fragment>
	)
}