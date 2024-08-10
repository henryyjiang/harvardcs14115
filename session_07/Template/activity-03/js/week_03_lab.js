
// Global variable with 60 attractions (JSON format)
// console.log(attractionData);

dataFiltering();

function dataFiltering() {
	let attractions = attractionData;

	let attractionCategoryElement = document.getElementById("attraction-category");
	let attractionCategory = attractionCategoryElement.options[attractionCategoryElement.selected];

	if (attractionCategory !== "all") {
		attractions = attractions.filter((row, index) => {
			return row.Category === attractionCategory;
		});
	}

	let sortedAttractions = attractions.sort((a,b) => {
		return b.Visitors - a.Visitors;
	})

	let topAttractions = sortedAttractions.filter((row, index) => {
		return index < 5;
	})

	renderBarChart(topAttractions);


	/* **************************************************
	 *
	 * ADD YOUR CODE HERE (ARRAY/DATA MANIPULATION)
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

}

function dataManipulation() {
	dataFiltering()
}