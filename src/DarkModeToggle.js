import React, { useContext } from "react"
import {Menu, Icon} from "semantic-ui-react"
import DarkModeContext from "./DarkModeContext"

// This component is the dark mode toggle that appears in the
// upper right of the app

export default function DarkModeToggle(props) {

	// DarkModeContext is set by DarkMode in the state of app.js

	const darkMode = useContext(DarkModeContext)

	// Pressing the button toggles darkMode in the state of app.js

	const toggleDarkMode = () => {
		props.setDarkMode(!darkMode)
	}

	// Icon chanes based on whether darkMode is on or not
	
	return (
		<Menu.Item
			onClick={toggleDarkMode}
		>

			{
				(useContext(DarkModeContext))
				?
				<Icon name="moon" />
				:
				<Icon name="moon outline" />
			}
		</Menu.Item>
	)
}
