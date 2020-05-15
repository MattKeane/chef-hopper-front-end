import React from "react"
import { Menu } from "semantic-ui-react"

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
		</React.Fragment>
	)
}