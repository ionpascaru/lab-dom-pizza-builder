// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($greenPeppers){
    if (state.greenPeppers) {
      $greenPeppers.style.visibility = "visible";
    }
    else {
      $greenPeppers.style.visibility = "hidden";
    }
  })
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  const newSauce = document.querySelector(".sauce");

  if (state.whiteSauce) {
    newSauce.classList.add("sauce-white");
  } else {
    newSauce.classList.remove("sauce-white");
  }
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  const newCrust = document.querySelector(".crust");
  
  if (state.glutenFreeCrust){
    newCrust.classList.add("crust-gluten-free");
  } else {
    newCrust.classList.remove("crust-gluten-free");
  }
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  const newPepperonni = document.querySelector(".btn-pepperonni")
  if(state.pepperonni){
    newPepperonni.classList.add("active");
  } else {
    newPepperonni.classList.remove("active");
  }
  const newMushrooms = document.querySelector(".btn-mushrooms")
  if(state.mushrooms) {
    newMushrooms.classList.add("active");
  } else {
    newMushrooms.classList.remove("active");
  }
  const newGreenPeppers = document.querySelector(".btn-green-peppers")
  if (state.greenPeppers) {
    newGreenPeppers.classList.add("active");
  } else {
    newGreenPeppers.classList.remove("active");
  }
  const newSauce = document.querySelector(".btn-sauce")
  if (state.whiteSauce) {
    newSauce.classList.add("active");
  } else {
    newSauce.classList.remove("active")
  }
  const newGlutenFreeCrust = document.querySelector(".btn-crust")
  if (state.glutenFreeCrust) {
    newGlutenFreeCrust.classList.add("active");
  } else {
    newGlutenFreeCrust.classList.remove()
  } 
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  let totalPrice = basePrice
  var list = document.querySelector('aside.panel.price ul')
  list.innerHTML = ""

  for (let ingredientKey in ingredients) { 
    if (state[ingredientKey]) { 
      totalPrice += ingredients[ingredientKey].price 
      list.innerHTML += `<li>$${ingredients[ingredientKey].price} ${ingredients[ingredientKey].name}</li>` //Modifico el texto para cada uno de los ingreientes 
    }
  }
  let tPrice = document.querySelector('aside.panel.price strong')
  tPrice.innerHTML = "$" + totalPrice
  // Iteration 4: change the HTML of `<aside class="panel price">`
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
  document.querySelector('.btn.btn-mushrooms').onclick = function() {
    state.mushrooms = !state.mushrooms
    renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
  document.querySelector('.btn-green-peppers').onclick = function () {
    state.greenPeppers = !state.greenPeppers
    renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
  document.querySelector('.btn-sauce').onclick = function () {
    state.whiteSauce = !state.whiteSauce
    renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
  document.querySelector('.btn-crust').onclick = function () {
    state.glutenFreeCrust = !state.glutenFreeCrust
    renderEverything()
}