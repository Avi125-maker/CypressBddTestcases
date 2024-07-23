
///<reference types="cypress" />
import { Given, When, And, Then, } from "cypress-cucumber-preprocessor/steps";
import Invalidlogin from "../../support/pageo-bjects/pageobjects";
import "cypress-iframe";


const ObjElement= new Invalidlogin();

//Scenario  
Given("I launch the web luma url {}", (objURL) => {
   cy.visit(objURL)
   cy.wait(3000)
})

 
When("I click on the createaccount", () => {
   cy.get('div[class="panel header"]>ul>li>a').contains('Create an Account').click();
   cy.wait(5000)
  
})


And("I enter firstname {}", (firstname) => {
   //Find the Password Textbox and enter the value
   ObjElement.setFirstName(firstname)
   
})

And("I enter lasttname {}", (lasttname) => {
   //Find the Password Textbox and enter the value
   ObjElement.setLastName(lasttname)
   
}) 

And("I new emailid {}", (newemailid) => {
   //Find the Password Textbox and enter the value
   ObjElement.setnewEmailid(newemailid)
   
})
And("I create the password {}", (password) => {
   //Find the Password Textbox and enter the valu
   ObjElement.setPassword(password)
   
})

And("I create the confirm password {}", (conformpassword) => {
   //Find the Password Textbox and enter the value
   ObjElement.setConformPassword(conformpassword)
   
})
Then("I click on the createButton", () => {
   //Find the Password Textbox and enter the value
   ObjElement.setCreateButton()
   
})

Then("I validate the user account", () => {
   //Find the Password Textbox and enter the value
   ObjElement.validateUserAccount()
   
})

When("I click on the login button", () => {
   //Find the Password Textbox and enter the value
   ObjElement.loginbutton()
   
})

And("I enter login emaiid {}", (emailid) => {
   //Find the Password Textbox and enter the value
   ObjElement.setEmailid(emailid)
   
})

And("I enter login password {}", (password) => {
   //Find the Password Textbox and enter the value
   ObjElement.setloginPassword(password)
   
})

Then("I click on the new login page button", () => {
   //Find the Password Textbox and enter the value
   ObjElement.loginpagebutton()
  //cy.get('#send2').contains('Sign In').click()
   
})