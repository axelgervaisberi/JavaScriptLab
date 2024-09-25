const breakfastMenu = [
  "Pancakes - $12",
  "Eggs Benedict - $22.99",
  "Oatmeal - $21.99",
  "Frittata - $15",
];
const maincourseMenu = ["Steak", "Pasta", "Burger", "Salmon"];
const dessertMenu = ["Cake", "Ice Cream", "Pudding", "Fruit Salad"];
const breakfastMenuItems = document.getElementById("breakfastMenuItems");
const maincourseMenuItems = document.getElementById("maincourseMenuItems");
const dessertMenuItems = document.getElementById("dessertMenuItems");

const breakfastMenuItemsHTML = breakfastMenu
  .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`)
  .join("");
breakfastMenuItems.innerHTML = breakfastMenuItemsHTML;

let maincourseItemsHTML = "";
maincourseMenu.forEach((item, index) => {
  maincourseItemsHTML += `<p>Item ${index + 1}: ${item}</p>`;
});
maincourseMenuItems.innerHTML = maincourseItemsHTML;

let dessertItemHTML = "";
for (i = 0; i < dessertMenu.length; i++) {
  dessertItemHTML += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
dessertMenuItems.innerHTML = dessertItemHTML;
