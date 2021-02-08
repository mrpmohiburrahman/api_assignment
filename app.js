let handleSearch = () =>{
    // console.log(document.getElementById("foodName").value);
    let foodName = document.getElementById("foodName").value
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`    
    fetch(url)
    .then(response => response.json())
    .then(mealList => showMealList(mealList))
}
let showMealList = (mealList) =>{
    mealList.meals.map((mealItem)=>{
        let div = document.createElement('div');
        div.className='col-md-4 foodItem'
        // console.log(mealItem.strMeal,mealItem.idMeal, mealItem.strMealThumb);
        div.innerHTML=`
        <img id="foodThumb" src="${mealItem.strMealThumb}">
        <h2 id="foodName">${mealItem.strMeal}</h2>
        `
        div.addEventListener('click',function(){showIngredients(mealItem)})
        document.getElementById('mealList').appendChild(div)
    })
}
let showIngredients = mealItem =>{
    for (let key in mealItem) {
        if (key.substring(0, 13) === "strIngredient"
          && mealItem[key] !== ""){
          console.log(mealItem[key]);
        }
    }   
}
document.getElementById("searchButton").addEventListener('click',function(){
    handleSearch()
})