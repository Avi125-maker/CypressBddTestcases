

Feature: Test the luma site home page

    Scenario Outline: create account in luma web site
        Given I launch the web luma url <objURL>
        When I click on the createaccount
        And I enter firstname <firstname>
        And I enter lasttname <lasttname>
        And I new emailid <newemailid>
        And I create the password <password>
        And I create the confirm password <conformpassword>
        Then I click on the createButton
       

        Examples:
            | objURL                                   | firstname | lasttname | newemailid                | password   | conformpassword |
            | https://magento.softwaretestingboard.com | avinas    | avinas    | avinash.vk58@gmail.com | Avinash@12 | Avinash@12      |

    Scenario Outline: login the account in luma web site
        Given I launch the web luma url <objURL>
        When I click on the login button
        And I enter login emaiid <emailid>
        And I enter login password <password>
        Then I click on the new login page button
       

        Examples:
            | objURL                                   | emailid    |password|
            | https://magento.softwaretestingboard.com | avinash.vk58@gmail.com |Avinash@12|

