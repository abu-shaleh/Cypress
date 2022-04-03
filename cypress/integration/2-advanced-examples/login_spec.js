describe('Cypress Demo-Login', () => 
{
    it('Positive Login scenario', () => 
    {
      cy.visit('https://partnerforsqa.dev.uniteliving.com/dtms')
      cy.get('#partnerLoginForm > :nth-child(1) > .form-control').type('sohel@gain.io')
      cy.get('#partnerLoginForm > :nth-child(2) > .form-control').type('SQAengineer')
      cy.get('#partnerLoginForm > :nth-child(3) > .btn').click()
      cy.get('.dropdown.user-menu-dropdown > .dropdown-toggle > .user-avatar').click()
      cy.get(':nth-child(4) > .logout').click()
    })
    it('Negative Login scenario with invalid email', () => 
    {
      cy.visit('https://partnerforsqa.dev.uniteliving.com/dtms')
      cy.get('#partnerLoginForm > :nth-child(1) > .form-control').type('sohelgain.io')
      cy.get('#partnerLoginForm > :nth-child(2) > .form-control').type('SQAengineer')
      cy.get('#partnerLoginForm > :nth-child(3) > .btn').click()
      cy.get('.dropdown.user-menu-dropdown > .dropdown-toggle > .user-avatar').click()
      cy.get(':nth-child(4) > .logout').click()
    })
    it('Negative Login scenario with invalid password', () => 
    {
      cy.visit('https://partnerforsqa.dev.uniteliving.com/dtms')
      cy.get('#partnerLoginForm > :nth-child(1) > .form-control').type('sohel@gain.io')
      cy.get('#partnerLoginForm > :nth-child(2) > .form-control').type('1=1--')
      cy.get('#partnerLoginForm > :nth-child(3) > .btn').click()
      cy.get('.dropdown.user-menu-dropdown > .dropdown-toggle > .user-avatar').click()
      cy.get(':nth-child(4) > .logout').click()
    })
  })
