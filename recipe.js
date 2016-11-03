'use strict';

function addIngredient(recipe, item, size){
  recipe[item] = size;
}

function removeIngredient(recipe, item){
  delete recipe[item];
}

function updateIngredient(recipe, item, size){
  recipe[item] = size;
  recipe;
}

function readRecipe(recipe){
  var i = 0;
  for (var key in recipe) {
    console.log("this recipe calls for " + recipe[key] + " I ate " + key );
  }
}
