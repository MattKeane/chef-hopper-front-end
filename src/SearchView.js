import React from "react"
import SearchForm from "./SearchForm"

export default function SearchView() {
	const getRecipes = (searchTerm) => {
		console.log("calling getRecipes")
		const everySpace = new RegExp(/\s/, "g")
		console.log(searchTerm.replace(everySpace, "+"))
	}
	return (
		<React.Fragment>
			<SearchForm
				getRecipes={getRecipes}
			/>
		</React.Fragment>
		)
}