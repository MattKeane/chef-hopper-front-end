import React, { useState } from "react"
import SearchForm from "./SearchForm"
import SearchResults from "./SearchResults"
import { Loader } from "semantic-ui-react"

export default function SearchView() {
	const [loading, setLoading] = useState(false)
	const [recipes, setRecipes] = useState([])

	const getRecipes = async (searchTerm) => {
		try {
			setLoading(true)
			const url = process.env.REACT_APP_API_URL + "/api/v1/recipes/search/"
			console.log("calling getRecipes")
			const everySpace = new RegExp(/\s/, "g")
			const apiSearchTerm = searchTerm.replace(everySpace, "+")
			const searchResponse = await fetch(url + apiSearchTerm)
			if (searchResponse.status === 200) {
				const searchJson = await searchResponse.json()
				console.log(searchJson)
				setRecipes(searchJson.data)
			}			
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
				<SearchResults
					recipes={recipes} 
				/>
			}
		</React.Fragment>
		)
}