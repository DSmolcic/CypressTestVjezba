


describe('Checkers Test', () =>{

    it('Checkers game', () =>{

        cy.visit('https://www.gamesforthebrain.com/game/checkers/')
        cy.get('[id="board"]')
        .find('[name="space62"]')
        .click()
        cy.get('[id="board"]')
        .find('[name="space53"]')
        .click()
        cy.wait(3000)
        cy.get('[id="board"]')
        .find('[name="space53"]')
        .click()
        cy.get('[id="board"]')
        .find('[name="space44"]')
        .click()
        cy.wait(3000)
        cy.get('[id="board"]')
        .find('[name="space53"]')
        .invoke('attr', 'src')
        .then((src) => {
            expect(src).to.contain('me1.gif')
        })
    })
})