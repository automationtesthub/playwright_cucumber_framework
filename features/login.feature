
Feature: login functionality

Background:
 Given the user is on the login page

  Scenario: successful login    
    When the user enters valid credentials
    Then the user should be redirected to the dashboard

  Scenario: unsuccessful login with invalid credentials    
    When the user enters invalid credentials
    Then an error message should be displayed

  Scenario: unsuccessful login with empty fields    
    When the user leaves the username and password fields empty
    Then an error message should be displayed

   @only
  Scenario Outline: data driven login with multiple sets of credentials
    When the user enters "<username>" and "<password>"
    Then the login result should be as expected
    Examples:
      | username       | password   |
      | validUser1     | validPass1 |
      | validUser2     | validPass2 |
      | invalidUser    | invalidPass|  