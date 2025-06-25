Feature: Add New Contact

  As an authenticated user
  I want to add a new contact
  So that it appears in my personal contact list

  Background:
    Given I am logged in

  Scenario: Successfully create a contact with valid data
    When I click on the Add Contact button
    And I fill in the contact form with valid data
    And I submit the contact form
    Then I should see the new contact in the list

  Scenario: Missing required first name
    When I click on the Add Contact button
    And I leave the first name field empty
    And I submit the contact form
    Then I should see a validation error for first name
