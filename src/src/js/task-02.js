const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const parentNode = document.querySelector('#ingredients')
// console.log(parentNode)

ingredients.forEach((item) => {
  const ingredientTitle = document.createElement('li');
  ingredientTitle.textContent = item
  ingredientTitle.classList.add('item')
  parentNode.append(ingredientTitle)
  console.log(ingredientTitle)
 
});

// document.body.ul.append(ingredientTitle)

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. 
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> 
// за одну операцію у список ul#ingredients.