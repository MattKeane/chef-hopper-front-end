import React from "react"

export default function SearchResults(props) {
	const recipes = props.recipes.map(recipe => {
		return (
			<li key={recipe.id}>
				{recipe.title}
			</li>
		)
	})
	return(
		<React.Fragment>
			<ul>
				{recipes}
			</ul>
		</React.Fragment>
	)
}