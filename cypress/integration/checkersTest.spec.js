context('Random checkers test', () =>{


    beforeEach(() => {
        cy.visit('https://www.gamesforthebrain.com/game/checkers/')
    })


    it('First checkers test', () => {


        cy.get('.page').find('h1').should('have.text', 'Checkers')

        cy.get('.footnote').find('[href]').first().should('have.text', 'Restart...')

        cy.get('.footnote').find('[href]').last().should('have.text', 'Rules')

        cy.get('[id="message"]').should('have.text', 'Select an orange piece to move.')

        cy.get('[id="board"]').then(board => {
            cy.wrap(board).find('[name="space62"]').click()
            cy.wrap(board).find('[name="space53"]').click()
            cy.wait(2000)
        })

        cy.get('[id="message"]').should('have.text', 'Make a move.')

        cy.contains('Restart...').click()
        cy.wait(1000)

        cy.get('[id="board"]').then(board => {
            cy.wrap(board).find('[name="space62"]').click()
            cy.wrap(board).find('[name="space53"]').click()
            cy.wait(2000)
            cy.wrap(board).find('[name="space53"]').click()
            cy.wrap(board).find('[name="space44"]').click()
            cy.wait(2000)
            cy.wrap(board).find('[name="space42"]').click()
            cy.wrap(board).find('[name="space64"]').click()
            cy.wait(2000)
            cy.wrap(board).find('[name="space73"]').invoke('attr', 'src').then((src) => {
                expect(src).to.contain('me1.gif')
            })
            cy.wrap(board).find('[name="space02"]').click()
            cy.wrap(board).find('[name="space13"]').click()
            cy.wrap(board).find('[name="space13"]').invoke('attr', 'src').then((src) => {
                expect(src).to.contain('you2.gif')
            })
            cy.wait(2000)
            cy.wrap(board).find('[name="space13"]').invoke('attr', 'src').then((src) => {
                expect(src).to.contain('gray.gif')
            })


        }
        )
    })



})