const liItemList = document.querySelectorAll('.item');

console.log(`Number of categories: ${liItemList.length}`)

liItemList.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent} 
  Elements: ${item.lastElementChild.children.length}`)

  });

  




