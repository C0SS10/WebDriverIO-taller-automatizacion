class AddContactPage {
  get btnAddContact() {
    return $("#add-contact");
  }
  get inputFirstName() {
    return $("#firstName");
  }
  get inputLastName() {
    return $("#lastName");
  }
  get inputBirthdate() {
    return $("#birthdate");
  }
  get inputEmail() {
    return $("#email");
  }
  get inputPhone() {
    return $("#phone");
  }
  get inputStreet1() {
    return $("#street1");
  }
  get inputStreet2() {
    return $("#street2");
  }
  get inputCity() {
    return $("#city");
  }
  get inputStateProvince() {
    return $("#stateProvince");
  }
  get inputPostalCode() {
    return $("#postalCode");
  }
  get inputCountry() {
    return $("#country");
  }
  get btnSubmit() {
    return $("#submit");
  }
  get errorMsg() {
    return $("#error");
  }

  async openForm() {
    await this.btnAddContact.click();
    await browser.waitUntil(() => this.inputFirstName.isDisplayed(), {
      timeout: 5000,
    });
  }

  async fillForm(data) {
    if (data.firstName) await this.inputFirstName.setValue(data.firstName);
    if (data.lastName) await this.inputLastName.setValue(data.lastName);
    if (data.birthdate) await this.inputBirthdate.setValue(data.birthdate);
    if (data.email) await this.inputEmail.setValue(data.email);
    if (data.phone) await this.inputPhone.setValue(data.phone);
    if (data.street1) await this.inputStreet1.setValue(data.street1);
    if (data.street2) await this.inputStreet2.setValue(data.street2);
    if (data.city) await this.inputCity.setValue(data.city);
    if (data.stateProvince)
      await this.inputStateProvince.setValue(data.stateProvince);
    if (data.postalCode) await this.inputPostalCode.setValue(data.postalCode);
    if (data.country) await this.inputCountry.setValue(data.country);
  }

  async submit() {
    await this.btnSubmit.click();
  }
}

export default new AddContactPage();
