@google
Feature: Sample Playwright Test

  Scenario: Open Google and check title
    Given I navigate to "https://www.google.com"
    When i enter "Playwright BDD" in the search box
    Then the page title should contain "Google"
