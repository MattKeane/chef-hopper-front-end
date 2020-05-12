import React from "react"
import SearchForm from "./SearchForm"

export default function SearchView() {
	const getRecipes = (searchTerm) => {
		console.log("calling getRecipes")
		console.log(searchTerm)
	}
	return (
		<React.Fragment>
			<SearchForm
				getRecipes={getRecipes}
			/>
		</React.Fragment>
		)
}