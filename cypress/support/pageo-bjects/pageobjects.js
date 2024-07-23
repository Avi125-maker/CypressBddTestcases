
///<reference types="cypress" />

class Invalidlogin {
    
    //Login Page properties
    txtfirstname = "#firstname";
    txtlasttname = "#lastname";
    txtemailID= "[title='Email']";
    txtPasword="#password";
    txtConformPasword="#password-confirmation";
    CreateButton="[title='Create an Account']";
   
    
    loginButton= "div[class='panel header']>ul>li>a";
    logintxtemailID= "#email";
    loginpassword= "[name='login[password]']";
    loginpageButton= "#send2";
    

    setFirstName(firstname) {
        //Find the firstname Textbox and enter the value
        cy.get(this.txtfirstname).type(firstname)
    }

    setLastName(lastName) {
        //Find the lastName Textbox and enter the value
        cy.get(this.txtlasttname).type(lastName)
    }

    setnewEmailid(emailid) {
        //Find the emailid Textbox and enter the value
        cy.get(this.txtemailID).type(emailid)
    }

    setPassword(password) {
        //Find the Password Textbox and enter the value
        cy.get(this.txtPasword).type(password)
    }
    setConformPassword(password) {
        //Find the conform Password Textbox and enter the value
        cy.get(this.txtConformPasword).type(password)
    }

    setCreateButton() {
        //Click on the create button
        cy.get(this.CreateButton).click()
    }

  
    loginbutton() {
        //Click on the login button
        cy.get(this.loginButton).contains('Sign In').click();
        cy.wait(5000)
    }

    setEmailid(emailid) {
        //Find the emailid Textbox and enter the value
        cy.get(this.logintxtemailID).type(emailid)
    }

    setloginPassword(password) {
        //Find the Password Textbox and enter the value
        cy.get(this.loginpassword).type(password)
    }

    loginpagebutton() {
        //Find the Password Textbox and enter the value
        //cy.get(this.loginpageButton).click()
        //cy.get('fieldset[data-hasrequired="* Required Fields"]>div.actions-toolbar>div.primary>[type="submit"]').click();
        cy.get(this.loginpageButton).contains('Sign In').click()
        cy.wait(5000)
    }
}
export default Invalidlogin;
