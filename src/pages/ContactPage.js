const { expect } = require("@playwright/test");

class ContactPage {
  btnSubmit = ".btn-contact";
  lblForenameError = "#forename-err";
  lblEmailError = "#email-err";
  lblMessageError = "#message-err";
  txtForename = "#forename";
  txtEmail = "#email";
  txtMessage = "#message";
  lblSuccessMessage = ".alert-success";

  foreName = "";

  async enterFormData(action, datatable) {
    const [headers, ...rows] = datatable.rawTable;

    for (const row of rows) {
      const [field, value] = row;

      if (field === "Forename") {
        await global.page.locator(this.txtForename).fill(value);
        this.foreName = value;
      } else if (field === "Email")
        await global.page.locator(this.txtEmail).fill(value);
      else if (field === "Message")
        await global.page.locator(this.txtMessage).fill(value);
    }
    if (action === "submit") await global.page.locator(this.btnSubmit).click();
  }

  async validateErrorMessages(datatable) {
    const [headers, ...rows] = datatable.rawTable;

    for (const row of rows) {
      const [field, value] = row;

      if (field === "Forename") {
        expect(await global.page.locator(this.lblForenameError)).toBeVisible();
        expect(
          await global.page.locator(this.lblForenameError).textContent()
        ).toEqual(value);
      } else if (field === "Email") {
        expect(await global.page.locator(this.lblEmailError)).toBeVisible();
        expect(
          await global.page.locator(this.lblEmailError).textContent()
        ).toEqual(value);
      } else if (field === "Message") {
        expect(await global.page.locator(this.lblMessageError)).toBeVisible();
        expect(
          await global.page.locator(this.lblMessageError).textContent()
        ).toEqual(value);
      }
    }
  }

  async validateForNoErrorMessages() {
    await expect(global.page.locator(this.lblForenameError)).toHaveCount(0);
    //expect(await global.page.locator(this.lblForenameError).count()).toEqual(0);
    await expect(global.page.locator(this.lblEmailError)).toHaveCount(0);
    await expect(global.page.locator(this.lblMessageError)).toHaveCount(0);
  }

  async successMessage(expectedMessage) {
    //let expectedMessage = await expectedMessage.replace("<forename>",this.foreName);
    //await global.page.locator(this.lblSuccessMessage).
    await global.page.waitForSelector(this.lblSuccessMessage);
    let actualMessage = await global.page
      .locator(this.lblSuccessMessage)
      .textContent();
    expect(actualMessage.trim()).toEqual(
      expectedMessage.replace("<forename>", this.foreName)
    );
  }
}
module.exports = { ContactPage };
