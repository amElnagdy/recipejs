import {state} from "./state";

export default function fetchRecipe() {
	const API_KEY = `a78a3c4b083eb79d624c09e09fe86a77`;
	const AppID = `d010c74d`;
	const url = `https://api.edamam.com/search?q=${state.searchTerm}&app_id=${AppID}&app_key=${API_KEY}&rom=0&to=1`;

	const markup = `<div style="align-items: center; text-align: center">
	<h2 class="ui icon header">
  <i class="close icon"></i>
  <div class="content">
    No Recipes Found
    <div class="sub header">Make sure you typed the recipe correctly..</div>
  </div>
</h2></div>`

	return fetch(url)
		.then(res => res.json())
		.then(data => {
		if (data.count== 0) document.querySelector(`#app`).innerHTML = markup;
		return data.hits[0]
		})
		.catch(err => console.log(err));
}