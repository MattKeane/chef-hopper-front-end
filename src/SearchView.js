import React, { useState } from "react"
import SearchForm from "./SearchForm"
import SearchResults from "./SearchResults"
import { Loader } from "semantic-ui-react"

export default function SearchView() {
	const [loading, setLoading] = useState(false)
	const getRecipes = async (searchTerm) => {
		try {
			setLoading(true)
			const url = process.env.REACT_APP_API_URL + "/api/v1/recipes/search/"
			console.log("calling getRecipes")
			const everySpace = new RegExp(/\s/, "g")
			const apiSearchTerm = searchTerm.replace(everySpace, "+")
			const searchResponse = await fetch(url + apiSearchTerm)
			console.log(searchResponse.json())
			setLoading(false)
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<React.Fragment>
			<SearchForm
				getRecipes={getRecipes}
			/>
			{
				loading
				?
				<Loader active>
					Hopping to your recipes
				</Loader>
				:
				<SearchResults />
			}
		</React.Fragment>
		)
}