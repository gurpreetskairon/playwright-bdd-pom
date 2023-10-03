Feature: This feature file covers scenarios related to cart functionality of Jupiter Toys application

    @cart @tc3
    Scenario: [TC-3]: Verify subtotal, price and total value of products added to cart
        Given I am on the Jupiter Toys home page
        And I navigate to 'Shop' page
        When I choose to buy the following products
            | product        | quantity |
            | Stuffed Frog   | 2        |
            | Fluffy Bunny   | 5        |
            | Valentine Bear | 3        |
