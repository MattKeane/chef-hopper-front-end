import React from "react"

export default function SearchResults(props) {

	const handleClick = (recipeIndex) => {
		props.showRecipe(recipeIndex)
		props.checkForSavedRecipe(recipeIndex)
	}

	const recipes = props.recipes.map( (recipe, i) => {
		return (
			<p key={recipe.id}>
				<span 
					className="recipe-link"
					onClick={ () => {handleClick(i)}}
				>
					{recipe.title}
				</span>
			</p>
		)
	})

	return(
		<div className="search-results">
			{recipes}			
		</div>
	)
}