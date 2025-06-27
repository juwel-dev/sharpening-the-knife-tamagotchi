Feature: : Feed Pet

  Scenario Outline: eating
    Given I am on the "home" page
    When I feed my pet with "<food>"
    Then Fullness is increased by <fullness>

    Examples:
      | food   | fullness |
      | pizza  | 50       |
      | banana | 30       |
      | apple  | 20       |
      | bonbon | 1        |