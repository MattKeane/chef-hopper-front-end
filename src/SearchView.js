import React from "react"
import SearchForm from "./SearchForm"
import SearchResults from "./SearchResults"
import { Loader } from "semantic-ui-react"

export default function SearchView(props) {

	return (
		<div className="SearchView">
			<SearchForm
				getRecipes={props.getRecipes}
			/>
			<p>{props.message}</p>
			{
				props.loading
				?
				<Loader active>
					<p>Hopping to your recipes</p>
					<p><small>(this may take a minute)</small></p>
				</Loader>
				:
				<SearchResults
					recipes={props.recipes}
					showRecipe={props.showRecipe}
					checkForSavedRecipe={props.checkForSavedRecipe}
				/>
			}
		</div>
		)
}
