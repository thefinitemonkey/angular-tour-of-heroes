describe('My first test', () => {
    it('Does not do much', () => {
        expect(true).to.equal(true)
    })
})

describe('My first test', () => {
    it('Visits the sample app', () => {
        cy.visit('http://localhost:4200')

        cy.contains('Tour of Heroes')
        cy.contains('Narco').click()

        cy.url().should('include', '/detail/12')
        cy.contains('NARCO Details')

        cy.get('input').clear().type('Nacho')
        cy.contains('NACHO Details')
    })
})