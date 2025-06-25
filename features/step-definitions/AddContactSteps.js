import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login.page.js";
import AddContactPage from "../pageobjects/addContact.page.js";

let contactEmail = `test${Date.now()}@example.com`;

Given("I am logged in", async () => {
  await LoginPage.open();
  await LoginPage.login("estebangonzalez888@gmail.com", "password123");
  await browser.waitUntil(() => browser.getUrl().includes("/contactList"));
});

When("I click on the Add Contact button", async () => {
  await AddContactPage.openForm();
});

When("I fill in the contact form with valid data", async () => {
  await AddContactPage.fillForm({
    firstName: "Esteban",
    lastName: "Cossiaca",
    birthdate: "1999-10-12",
    email: contactEmail,
    phone: "3001234567",
    street1: "Calle 123",
    street2: "Apto 4B",
    city: "Bogotá",
    stateProvince: "Cundinamarca",
    postalCode: "110111",
    country: "Colombia",
  });
});

When("I leave the first name field empty", async () => {
  await AddContactPage.fillForm({
    lastName: "Pérez",
    email: `invalid${Date.now()}@test.com`,
    phone: "3001234567",
  });
});

When("I submit the contact form", async () => {
  await AddContactPage.submit();
});

Then("I should see the new contact in the list", async () => {
  await browser.pause(1000);
  const contactCard = await $(`//*[contains(text(), '${contactEmail}')]`);
  await expect(contactCard).toBeDisplayed();
});

Then("I should see a validation error for first name", async () => {
  await expect(AddContactPage.errorMsg).toHaveTextContaining("firstName");
});
