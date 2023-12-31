import { showHeroImage } from "./main.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import productList from "./productList.mjs";
import { displayElementsBySearchTerm } from "./productListDisplay.mjs";

loadHeaderFooter();
showHeroImage();
productList();
displayElementsBySearchTerm();
