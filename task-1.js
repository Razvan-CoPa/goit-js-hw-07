function countCategories(){
  let categories = document.querySelectorAll("#categories .item");
  console.log("Number of categories: ", categories.length);

  categories.forEach((category) => {
    let h2 = category.querySelector("h2");
    console.log("Category: ", h2.textContent);

    let elements = category.querySelectorAll("ul li");
    console.log("Elements: ", elements.length);
  })
}

countCategories();