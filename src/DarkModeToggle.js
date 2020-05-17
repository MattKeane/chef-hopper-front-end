import React from "react"
import {Menu, Icon} from "semantic-ui-react"

export default function DarkModeToggle(props) {

	const toggleDarkMode = () => {
		props.setDarkMode(!props.darkMode)
	}

	return (
		<Menu.Item
			onClick={toggleDarkMode}
		>
			{
				props.darkMode
				?
				<Icon name="moon" />
				:
				<Icon name="moon outline" />
			}
		</Menu.Item>
	)
}