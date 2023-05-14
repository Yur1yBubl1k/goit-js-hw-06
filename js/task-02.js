const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const parentNode = document.querySelector('#ingredients')

const updIngredienst = ingredients.map( item => {
  const ingredientTitle = document.createElement('li');
  ingredientTitle.textContent = item
  ingredientTitle.classList.add('item')
 
 return ingredientTitle
});

parentNode.append(...updIngredienst)


