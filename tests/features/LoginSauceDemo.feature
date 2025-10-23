@login
Feature: Login Feature for sauce demo

  Scenario Outline: Scenario Outline name: login with valid credentials
    Given user open website "https://www.saucedemo.com/"
    When user enter username "<username>"
    And user enter password "<password>"
    And user click on login button
    Then user should be logged in successfully
    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
