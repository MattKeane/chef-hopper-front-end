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
		<React.Fragment>
			{
				(props.recipes.length > 0)
				&&
				<div className="search-results">
					{recipes}			
				</div>		
			}
		</React.Fragment>
	)
}