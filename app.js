let handleSearch = () =>{
    console.log(document.getElementById("foodName").value);
    let foodName = document.getElementById("foodName").value
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`    
    fetch(url)
    .then(response => response.json())
    .then(mealList => showMealList(mealList))
}
let showMealList = (mealList) =>{
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    mealList.meals.map((mealItem)=>{
        console.log(mealItem.strMeal,mealItem.idMeal, mealItem.strMealThumb);
        li.innerHTML=mealItem.strMeal
        ul.appendChild(li)
    })
    document.getElementById('mealList').appendChild(ul)
}
document.getElementById("searchButton").addEventListener('click',function(){
    handleSearch()
})