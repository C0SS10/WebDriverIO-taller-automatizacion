import Page from "./page.js";

class LoginPage extends Page {
  get inputEmail() {
    return $("#email");
  }
  get inputPassword() {
    return $("#password");
  }
  get btnSubmit() {
    return $("#submit");
  }
  get errorMsg() {
    return $(
      '//*[@id="error"][contains(text(), "Incorrect username or password")]'
    );
  }
  get header() {
    return $('//h1[text()="Contact List"]');
  }

  async open() {
    return super.open();
  }

  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}

export default new LoginPage();
