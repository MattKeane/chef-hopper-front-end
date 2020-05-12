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
	return (
		<div className="recipe">
			<h3>{props.recipe.title}</h3>
			<ul className="ingredient-list">
				{ingredients}
			</ul>
			<ul className="instruction-list">
				{instructions}
			</ul>
		</div>
	)
}