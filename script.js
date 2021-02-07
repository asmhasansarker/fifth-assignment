
function searchedFood(){
    let searchFood = document.getElementById('search').value;
    if(searchFood.length == 1){
        function getFoodDataByLetter(letter){
            const url =`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
            fetch(url)
            .then(res => res.json())
            .then(data => allFood(data)); 
        }
        getFoodDataByLetter(searchFood);    
    }
    else{
        function getFoodDataByWord(word){
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`
            fetch(url)
            .then(res => res.json())
            .then(data => allFood(data))
        }
        getFoodDataByWord(searchFood)    
    }
    searchFood.innerText = ''; 
}


function allFood(data){
    let singleFoodDetails = document.getElementById('foodDetails');
    singleFoodDetails.innerHTML='';
    let foodsDiv = document.getElementById('foodsDiv');
    foodsDiv.innerHTML='';
    let foodList = data.meals;
    if(foodList == null){
        alert("You enter a wrong keyword. Please Enter a correct keyword. ");
    }
    else{
        foodList.forEach(foodItem => {
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
    


    // foodList.forEach(foodItem => {
    //     let foodImage = foodItem.strMealThumb;
    //     let itemName = foodItem.strMeal; 
    //     const foodDiv = document.createElement('div');
    //     foodDiv.className = "food";
    //     const foodInfo =`
    //         <div onclick="singleFoodDetails('${foodItem.idMeal}')">
    //             <img src="${foodImage}">
    //             <h3>${itemName}</h3> 
    //         </div>       
    //     `
    //     foodDiv.innerHTML = foodInfo;
    //     foodsDiv.appendChild(foodDiv);
        
        
    // });
    


}


function singleFoodDetails(foodId){
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
    fetch(url)
    .then(res =>res.json())
    .then(foodData =>showSingleFoodDetails(foodData))
}

function showSingleFoodDetails(foodDetails){ 
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






// function foodDetails(food){

// }

// fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
// .then(res => res.json())
// .then(data => displayFoods(data));

// const displayFoods = foods =>{
//     console.log(foods.categories)
//     let allFoods = foods.categories;
//     allFoods.forEach(food => {
//         console.log(food.strCategory);
//     });
    
// }

//---------------------------
// Food Details Code Start
//---------------------------



// fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
// .then(res => res.json())
// .then(data => displayFoods(data));

// const displayFoods = foods =>{
//     console.log(foods.meals)
//     let allFoods = foods.meals;
//     allFoods.forEach(food => {
//         console.log(food.strMeal)
//         console.log(food.strIngredient1);
//         console.log(food.strIngredient2);
//         console.log(food.strIngredient3);
//         console.log(food.strIngredient4);
//         console.log(food.strIngredient5);
//         console.log(food.strIngredient6);
//         console.log(food.strIngredient7);
//         console.log(food.strIngredient8);
//     });
    
// }

//---------------------------
// Food Details Code End
//---------------------------