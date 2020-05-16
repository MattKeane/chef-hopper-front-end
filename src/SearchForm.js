import React, { useState } from "react"
import { Input, Button } from "semantic-ui-react"

export default function SearchForm(props) {
	const [searchTerm, setSearchTerm] = useState("")
	return(
		<div className="SearchForm">
			<Input
				name="search"
				icon="search"
				placeholder="Search for Recipes"
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
			/>
			<Button
				onClick={e => props.getRecipes(searchTerm)}
			>
				Search
			</Button>
		</div>
	)
}