import React from "react"

export default function SearchResults(props) {

	const handleClick = (recipeIndex) => {
		props.showRecipe(recipeIndex)
		props.checkForSavedRecipe()
	}

	const recipes = props.recipes.map( (recipe, i) => {
		return (
			<li key={recipe.id}>
				<span 
					className="recipe-link"
					onClick={ () => {handleClick(i)}}
				>
					{recipe.title}
				</span>
			</li>
		)
	})

	return(
		<React.Fragment>
			<ul className="recipe-list">
				{recipes}
			</ul>
		</React.Fragment>
	)
}