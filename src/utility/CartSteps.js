const { When, Then } = require("@cucumber/cucumber");
const { ShopPage } = require("../pages/ShopPage");

let shopPage;

When("I choose to buy the following products", async (datatable) => {
  shopPage = new ShopPage();
  await shopPage.addProductsToCart(datatable);
});
Then("I validate the price displayed per product", async () => {
  console.log("");
});
Then("I validate the subtotal per product", async () => {
  console.log("");
});
Then("I validate the total amount to be paid", async () => {
  console.log("");
});
