import { products } from "./data.js";
const productWrapper = document.querySelector(".product-wrapper");
const buttonEl = document.querySelector("#search");
const formEl = document.querySelector("#form");

console.log(formEl);

function data2(arr) {
  productWrapper.innerHTML = " ";
  arr.forEach((prod) => {
    //let { name, price, discount, rating, image } = prod;
    productWrapper.innerHTML += `
          <div class="product">
            <img src="${prod.image}" alt="${prod.name}" />
            <h2>Name: ${prod.name}</h2>
            <p>Brand: ${prod.brand}</p>
            <p>Category: ${prod.category}</p>
            <p>Price: $${prod.price}</p>
            <p>Description: ${prod.description}</p>
            <p>Discount:${prod.discount}<p>
          </div>
        `;
  });
}
data2(products);

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);
  let inputValue = formData.get("search-input");
  let filteredProducts = products.filter((prod) => {
    if (prod.brand.toLowerCase().includes(inputValue.toLowerCase())) {
      return prod;
    }
  });

  data2(filteredProducts);
  // buttonEl.textContent = productName;
});
