import React from "react"

export default function RecipeView(props) {

	const ingredients = props.recipe.ingredients.map( (ingredient, i) => {
		return (
			<li key={i}>
				{ingredient}
			</li>
		)
	})

	const instructions = props.recipe.instructions.map( (instruction, i) => {
		return (
			<li key={i}>
				{instruction}
			</li>
		)
	})

	const darkModeStyle = () => {
		if (props.darkMode) {
			return "recipe-dark"
		}
		return "recipe-light"
	}

	return (
		<div className={darkModeStyle()}>
			<h3>{props.recipe.title}</h3>
			<h5>Ingredients</h5>
			<div className="ingredients">
				<ul className="ingredient-list">
					{ingredients}
				</ul>
			</div>
			<h5>Instructions</h5>
			<div className="instructions">			
				<ol className="instruction-list">
					{instructions}
				</ol>
			</div>
		</div>
	)
}