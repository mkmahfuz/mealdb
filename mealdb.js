
//required elements

const searchInput = document.getElementById("search-input");
const searchSubmit = document.getElementById('search-submit');
const mealDetailClick = document.getElementById('meal-details');
const resultError = document.getElementById('result-error');

searchSubmit.addEventListener("click", function () {fetchData(searchInput) });
const mealId = 52772;
//mealDetailClick.addEventListener("click", function () { mealDetails(mealId) });
//fecthing meal data
const fetchData = (searchInput) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`)
        .then(response => response.json())
        .then(data => displayMeal(data))
        .catch(error => displayError(error))
}
 //to do later clear previous search data
// function clearPrevData(){
//     // const emptySpan = document.createElement('span');
//     const mealResultDiv = document.getElementById("search-result");
//     const mealOutputDiv = document.getElementById("search-output");
//     mealOutputDiv.removeChild(mealResultDiv);
// }

function displayError(error) {
    console.log(error);
    console.log("No data found");
    resultError.innerHTML = `<h3>Sorry no data found</h3>`;
}

function displayMeal(data) {
    if (data.meals == null) {
        console.log("no meals found at this moment");
        resultError.innerHTML = `<h3>Sorry no meal found at this moment</h3>`;
    } else{   
    displayMealData(data.meals);  
    }
}

function displayMealData(dataArray){
    //console.log(dataArray);
    
    dataArray.forEach(element => {
        console.log(element.strMeal);
        console.log(element.strMealThumb);
        const mealDiv = document.createElement("div");
        mealDiv.className = "meal-container";
        mealDiv.innerHTML = `<div class="meal-image"><img src=${element.strMealThumb}></div><div class="meal-name">${element.strMeal}</div>`;
        const mealResult = document.getElementById("search-result");
        mealResult.appendChild(mealDiv);
        
    });
}


const mealDetails = (mealId) => {
    // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(response => response.json())
        .then(data => displayMealDetails(data))
        .catch(error => displayError(error))
}

function displayMealDetails(data){
    console.log(data);
    const mealContainer = document.getElementById("meal-container");
    const mealDetailsDiv = document.createElement("div");
        mealDiv.className = "meal-container";
        mealDiv.innerHTML = `<div class="meal-image"><img src=${element.strMealThumb}></div><div class="meal-name">${element.strMeal}</div>`;
        const mealResult = document.getElementById("search-result");
        mealResult.appendChild(mealDiv);


}