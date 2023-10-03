const { expect } = require("@playwright/test");

class ShopPage {
  //btnBuy =

  products = new Map();

  async addProductsToCart(datatable) {
    const [headers, ...rows] = datatable.rawTable;

    for (const row of rows) {
      const [product, quantity] = row;
      let price = await global.page
        .locator(`//h4[text() = '${product}']/..//span`)
        .textContent();
      for (let i = 0; i < Number(quantity); i++)
        await global.page.locator(`//h4[text() = '${product}']/..//a`).click();
      this.products.set(product, [quantity, price]);
    }
    //console.log(await global.page.locator(".nav-cart>a>span").textContent());
  }
}
module.exports = { ShopPage };
