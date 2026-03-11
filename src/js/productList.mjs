import { getProductByCategory } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

let products;
function productCardTemplate(product) {
  return `<div class="product-card">
            <a
              href="/product_pages/index.html?category=${product.category
    }&&product=${product.id}"
            >
              <img
                class="product-img"
                src="${product.image}"
                alt="${product.title}"
              />
              <h2 class="card__name">${product.title}</h2>
              <p class="product-card__price">$${product.price.toFixed(2)}</p></a
            >
          </div>`;
}

export async function productCategory(selector) {
  const el = document.querySelector(selector);

  let menClothing = await getProductByCategory("men's clothing");
  menClothing = menClothing.slice(0, 1);
  let jewelery = await getProductByCategory("jewelery");
  jewelery = jewelery.slice(0, 1);
  let womenClothing = await getProductByCategory("women's clothing");
  womenClothing = womenClothing.slice(0, 1);

  products = menClothing.concat(jewelery, womenClothing);

  // render out the product list to the element
  renderListWithTemplate(productCardTemplate, el, products);
}

export default async function product_list(selector, category = "all", home = false, limit = 4) {
  const el = document.querySelector(selector);
  if (category == "all" || category == "null" || category == undefined) {
    const menClothing = await getProductByCategory("men's clothing");
    const jewelery = await getProductByCategory("jewelery");
    const womenClothing = await getProductByCategory("women's clothing");

    products = menClothing.concat(jewelery, womenClothing);
  } else {
    // get the list of products
    products = await getProductByCategory(category);
    document.querySelector(".dynamic-category-heading").textContent =
      category.charAt(0).toUpperCase() + category.slice(1);
  }

  if (home == true) {
    products = products.filter(p => Number.parseInt(p.rating.rate.toString().split(".")[0]) > 3);
    products = [...products.slice(0, limit)];
  }

  // render out the product list to the element
  renderListWithTemplate(productCardTemplate, el, products);
}



