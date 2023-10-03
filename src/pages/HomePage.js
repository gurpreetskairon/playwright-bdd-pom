const { expect } = require("@playwright/test");
let { setDefaultTimeout } = require("@cucumber/cucumber");
const path = require("path");
setDefaultTimeout(60 * 15000);

require("dotenv").config({
  path: path.join(__dirname, "../../.env"),
});

class HomePage {
  async navigate() {
    await global.page.goto(process.env.WEB_URL);
  }

  async selectMenu(item) {
    await global.page
      .locator(`//li[@id = 'nav-${item.toLowerCase()}']/a`)
      .click();
  }
}
module.exports = { HomePage };
