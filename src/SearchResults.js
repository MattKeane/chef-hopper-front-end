import React, { useContext } from "react"
import DarkModeContext from "./DarkModeContext"

export default function SearchResults(props) {

	const handleClick = (recipeIndex) => {
		props.showRecipe(recipeIndex)
		props.checkForSavedRecipe(recipeIndex)
	}

	const darkMode = useContext(DarkModeContext)

	const darkModeStyle = () => {
		if (darkMode) {
			return "search-results-dark"
		}
		return "search-results-light"
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
				?
				<div className={darkModeStyle()}>
					{recipes}
				</div>
				:
				<img className="chef-hopper" src="chef-hopper.png" alt="" />
			}
		</React.Fragment>
	)
}
