Feature: User Login

  As a registered user
  I want to login using my credentials
  So that I can access my protected contact list

  Background:
    Given I am on the login page

  Scenario: Successful login with valid credentials
    When I enter a valid email and password
    And I click the login button
    Then I should be redirected to the contact list page
    And I should see the contact list header

  Scenario: Login with invalid credentials
    When I enter an invalid email or password
    And I click the login button
    Then I should see an error message "Incorrect username or password"
    And I should remain on the login page
