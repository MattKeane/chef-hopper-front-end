import React from "react"
import SearchForm from "./SearchForm"

export default function SearchView() {
	const getRecipes = async (searchTerm) => {
		try {
			const url = process.env.REACT_APP_API_URL + "/api/v1/recipes/search/"
			console.log("calling getRecipes")
			const everySpace = new RegExp(/\s/, "g")
			const apiSearchTerm = searchTerm.replace(everySpace, "+")
			const searchResponse = await fetch(url + apiSearchTerm)
			console.log(searchResponse.json())
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<React.Fragment>
			<SearchForm
				getRecipes={getRecipes}
			/>
		</React.Fragment>
		)
}