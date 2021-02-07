//---------------------------------------------------------
// SEARCH FOOD AND API FETCH START
//---------------------------------------------------------
const searchedFood = () => {
    let searchFood = document.getElementById('search').value;
    if(searchFood.length == 1){
        const getFoodDataByLetter = (letter) =>{
            const url =`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
            fetch(url)
            .then(res => res.json())
            .then(data => allFood(data)); 
        }
        getFoodDataByLetter(searchFood);    
    }
    else{
        const getFoodDataByWord = (word) => {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`
            fetch(url)
            .then(res => res.json())
            .then(data => allFood(data))
        }
        getFoodDataByWord(searchFood)    
    }
    searchFood.innerText = ''; 
}
//---------------------------------------------------------
// SEARCH FOOD AND API FETCH END
//---------------------------------------------------------

//---------------------------------------------------------
// SAME CATEGORY FOODS AREA CODE START
//---------------------------------------------------------

const allFood =(data) =>{
    let singleFoodDetails = document.getElementById('foodDetails');
    singleFoodDetails.innerHTML='';
    let foodsDiv = document.getElementById('foodsDiv');
    foodsDiv.innerHTML='';
    let foodList = data.meals;
    if(foodList == null){
        alert("You enter a wrong keyword. Please Enter a correct keyword. ");
    }
    else{
        foodList.forEach( foodItem => {
            let foodImage = foodItem.strMealThumb;
            let itemName = foodItem.strMeal; 
            const foodDiv = document.createElement('div');
            foodDiv.className = "food";
            const foodInfo =`
                <div onclick="singleFoodDetails('${foodItem.idMeal}')">
                    <img src="${foodImage}">
                    <h3>${itemName}</h3> 
                </div>       
            `
            foodDiv.innerHTML = foodInfo;
            foodsDiv.appendChild(foodDiv);
        });
    }
}

//---------------------------------------------------------
// SAME CATEGORY FOODS AREA CODE END
//---------------------------------------------------------

//---------------------------------------------------------
// SINGLE FOOD AREA CODE START
//---------------------------------------------------------

const singleFoodDetails = (foodId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
    fetch(url)
    .then(res =>res.json())
    .then(foodData =>showSingleFoodDetails(foodData))
}

const showSingleFoodDetails = (foodDetails) => { 
    let singleFoodDetails = document.getElementById('foodDetails');
    singleFoodDetails.innerHTML='';
    const foodDetailsArray = foodDetails.meals;
    const foodDetailsDiv = document.createElement('div');
    foodDetailsDiv.className = "foodDetails";
    const foodDetailsImage = foodDetailsArray[0].strMealThumb;
    const foodName = foodDetailsArray[0].strMeal;
    const foodDetailsInfo =`
        <img src="${foodDetailsImage}">
        <h2>${foodName}</h2>
        <h3>Ingredients</h3>
        <ul>
            <li>${foodDetailsArray[0].strIngredient1}</li>
            <li>${foodDetailsArray[0].strIngredient2}</li>
            <li>${foodDetailsArray[0].strIngredient3}</li>
            <li>${foodDetailsArray[0].strIngredient4}</li>
            <li>${foodDetailsArray[0].strIngredient5}</li>
            <li>${foodDetailsArray[0].strIngredient6}</li>
            <li>${foodDetailsArray[0].strIngredient7}</li>
            <li>${foodDetailsArray[0].strIngredient8}</li>
            <li>${foodDetailsArray[0].strIngredient9}</li>
        </ul>
    `
   
    foodDetailsDiv.innerHTML = foodDetailsInfo;
    singleFoodDetails.appendChild(foodDetailsDiv);
} 

//---------------------------------------------------------
// SINGLE FOOD AREA CODE END
//---------------------------------------------------------
