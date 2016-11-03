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
