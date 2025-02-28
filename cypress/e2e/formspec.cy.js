/*describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
*/


describe('test form', () => {

  // 1. check the URL
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });  

  // 2. check the form and form fields exist
  it('should check if form and form fields exist', () => {
    
    cy.get('[data-cy="rating-form"]').should('exist'); // Form
    cy.get('[data-cy="input-name"]').should('exist'); // Name input
    cy.get('[data-cy="input-address"]').should('exist'); // Address input
    cy.get('[data-cy="input-phone"]').should('exist'); // Phone input
    cy.get('[data-cy="input-cuisine"]').should('exist'); // Cuisine input
    cy.get('[data-cy="input-rating"]').should('exist'); // Rating input

  });      


  // 3. fill the form. submit it, and verify the restaurant appears
  it('should fill the form, submit it, and verify the restaurant appears', () => {
    
    // 3.1 Fill in the form fields
    cy.get('[data-cy="input-name"]').type('Pizza House');
    cy.get('[data-cy="input-address"]').type('123r PL NE, Seattle, USA');
    cy.get('[data-cy="input-phone"]').type('111-123-1234');
    cy.get('[data-cy="input-cuisine"]').type('Italian');
    cy.get('[data-cy="input-rating"]').type('5');    

   
    // 3.2 Submit the form   
    cy.get('[data-cy="rating-form"]').submit();
     // OR Click the submit button if needed:
    //cy.get('button[type="submit"]').click(); // change to data-cy if needed    


    // 3.3 Verify the elements are visible
    cy.get(`[data-cy="Pizza House"] ul`).within(() => {
      cy.contains('li', '123r PL NE, Seattle, USA').should('be.visible');
      cy.contains('li', '111-123-1234').should('be.visible');
      cy.contains('li', 'Italian').should('be.visible');
      cy.contains('li', '5').should('be.visible');
    });

  
  });


});




