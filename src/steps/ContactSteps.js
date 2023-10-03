const { Given, When, Then } = require("@cucumber/cucumber");
const { HomePage } = require("../pages/HomePage");
const { ContactPage } = require("../pages/ContactPage");

let homePage;
let contactPage;

Given("I am on the Jupiter Toys home page", async () => {
  homePage = new HomePage();
  await homePage.navigate();
});

Given("I navigate to {string} page", async (item) => {
  await homePage.selectMenu(item);
});

When(
  "I enter the following values into the form and {string}",
  async (action, datatable) => {
    contactPage = new ContactPage();
    await contactPage.enterFormData(action, datatable);
  }
);

Then("I should get the following error messages", async (datatable) => {
  await contactPage.validateErrorMessages(datatable);
});

Then("I should not get any error messages", async () => {
  await contactPage.validateForNoErrorMessages();
});

Then(
  "I should see the successful submission message like {string}",
  async (expectedMessage) => {
    await contactPage.successMessage(expectedMessage);
  }
);
