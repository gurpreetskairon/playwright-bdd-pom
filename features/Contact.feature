@contact
Feature: This feature file covers the Contact scenarios

    @tc1
    Scenario: TC-1: Validate mandatory fields error message
        Given I am on the Jupiter Toys home page
        And I navigate to 'Contact' page
        When I enter the following values into the form and "submit"
            | field | value |
        Then I should get the following error messages
            | field    | value                |
            | Forename | Forename is required |
            | Email    | Email is required    |
            | Message  | Message is required  |
        When I enter the following values into the form and "not submit"
            | field    | value                          |
            | Forename | Gurpreet                       |
            | Email    | gurpreet.singh@mymail.com      |
            | Message  | This is a sample test message. |
        Then I should not get any error messages

    @tc2
    Scenario Outline: [TC-2]: Validate successful submission messages on providing all mandatory field values
        Given I am on the Jupiter Toys home page
        And I navigate to "Contact" page
        When I enter the following values into the form and "submit"
            | field    | value                          |
            | Forename | Gurpreet                       |
            | Email    | gurpreet.singh@mymail.com      |
            | Message  | This is a sample test message. |
        Then I should see the successful submission message like "Thanks <forename>, we appreciate your feedback."

        Examples:
            | runs |
            | 1    |
            | 2    |
            | 3    |
            | 4    |
            | 5    |