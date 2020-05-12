import React, { useState } from "react"
import SearchForm from "./SearchForm"
import SearchResults from "./SearchResults"
import { Loader } from "semantic-ui-react"

export default function SearchView(props) {

	return (
		<div className="SearchView">
			<SearchForm
				getRecipes={props.getRecipes}
			/>
			{
				props.loading
				?
				<Loader active>
					Hopping to your recipes
				</Loader>
				:
				<SearchResults
					recipes={props.recipes}
					showRecipe={props.showRecipe}
				/>
			}
		</div>
		)
}