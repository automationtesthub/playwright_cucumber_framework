Feature: lead functionality

Background:
 Given the user is on the login page
 When the user enters valid credentials

  @lead
  Scenario: verify_create_lead_with_mandatory_fields_TC04 
    When the user click on new lead link
    And fill the mandatory fields and click on save button