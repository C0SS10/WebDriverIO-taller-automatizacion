import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login.page.js";

Given("I am on the login page", async () => {
  await LoginPage.open();
});

When("I enter a valid email and password", async () => {
  await LoginPage.login("estebancossiogonzalez1@gmail.com", "password123");
});

When("I enter an invalid email or password", async () => {
  await LoginPage.login("malcorreo@email.com", "malapassword");
});

When("I enter an invalid email format", async () => {
  await LoginPage.inputEmail.setValue("invalidemail");
  await LoginPage.inputPassword.setValue("password123");
});

When("I click the login button", async () => {
  await LoginPage.btnSubmit.click();
});

Then("I should be redirected to the contact list page", async () => {
  await browser.waitUntil(
    async () => (await browser.getUrl()).includes("/contactList"),
    {
      timeout: 5000,
      timeoutMsg: "Expected to be redirected to contactList page",
    }
  );
});

Then("I should see the contact list header", async () => {
  await expect(LoginPage.header).toBeDisplayed();
});

Then("I should see an error message {string}", async (message) => {
  await expect(LoginPage.errorMsg).toHaveText(message);
});

Then("I should remain on the login page", async () => {
  await expect(browser).toHaveUrl(
    "https://thinking-tester-contact-list.herokuapp.com/"
  );
});
