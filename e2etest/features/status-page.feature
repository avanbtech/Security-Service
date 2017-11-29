# ../features/status-page.feature

Feature: Status Page Test
  As a normal user,
  I am able to browse the status page of the security request system

  Scenario: Browse the status page of the security request system
    Given I am at the status page of the security request system
    Then I should see the status page and background image

  # Scenario: Browse the main page and get to the request form page
  #   Given I am at the main page of the security request system
  #   Then I should see the main page logo and background image
  #   When I click the request form button
  #   Then I should see the request form page

  # Scenario: Browse the main page and get to the status page
  #   Given I am at the main page of the security request system
  #   Then I should see the main page logo and background image
  #   When I click the check status button
  #   Then I should see the status page

  # Scenario: Browse the main page and get to the service view page
  #   Given I am at the main page of the security request system
  #   Then I should see the main page logo and background image
  #   When I click the service view button
  #   Then I should see the service view page

  # Scenario: Browse the main page and get to the export data page
  #   Given I am at the main page of the security request system
  #   Then I should see the main page logo and background image
  #   When I click the export data button
  #   Then I should see the export data page