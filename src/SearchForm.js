import React from "react"
import { Input, Button, Form } from "semantic-ui-react"

export default function SearchForm(props) {
	return(
		<React.Fragment>
			<Form>
				<Input
					icon="search"
					placeholder="Search for Recipes"
				/>
				<Button>Search</Button>
			</Form>
		</React.Fragment>
	)
}