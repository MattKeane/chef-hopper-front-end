import React from "react"
import Menu from "semantic-ui-react"

export default function SaveToggleButton(props) {
	return (
		<React.fragment>
			{
				props.currentUser
				?
				<Menu.Item>
					Save Recipe
				</Menu.Item>
				:
				<Menu.Item>
					Remove Saved Recipe
				</Menu.Item>
			}
		</React.fragment>
	)
}